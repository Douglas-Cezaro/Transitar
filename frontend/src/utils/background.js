import { Alert, AsyncStorage } from "react-native";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import * as Notifications from "expo-notifications";
import { Offline, db } from "../utils/offline";
import Api from "../api/index";

// Initial variables
var startLocation = null;
var endLocation = null;
var VAL_COMPARACAO_TIMEOUT = 1;
const LOCATION_TRACKING = "location-tracking";

export default async function Background(params) {
  const { locations } = params;

  const dataUser = await AsyncStorage.getItem("user");
  const user = JSON.parse(dataUser);

  async function saveStart(data) {
    await AsyncStorage.setItem("@startLocation", JSON.stringify(data));
  }

  async function saveEnd(data) {
    await AsyncStorage.setItem("@endLocation", JSON.stringify(data));
  }

  async function saveStartValide(data) {
    await AsyncStorage.setItem("@startValide", JSON.stringify(data));
  }

  async function sendNotification(data) {
    var registrationToken = await Notifications.getExpoPushTokenAsync();
    var messages = [];
    if (data.status) {
      messages.push({
        to: registrationToken.data,
        sound: "default",
        title: "Transitar",
        body: data.message,
      });

      await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messages),
      });
    }
  }

  async function sendApi(start, end) {
    const data = {
      userId: user.id,
      ltStart: start.ltStart,
      LgSatrt: start.LgSatrt,
      timeStart: start.timeStart,
      ltEnd: end.ltEnd,
      lgEnd: end.lgEnd,
      timeEnd: end.timeEnd,
    };

    const token = await AsyncStorage.getItem("token");

    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    await Api.post("/evaluateroute", data, config)
      .then((response) => {
        if (response.status === 401) {
          if (start.index) {
            const deleteRow = async () => {
              await db.transaction((tx) => {
                tx.executeSql(`DELETE FROM punctuatedroutes where id = ?;`, [
                  start.index,
                ]);
              });
            };
            deleteRow();
          }
          saveStartValide(null);
          saveStart(null);
          saveEnd(null);
          Offline(data);
        }
        if (response.status === 500) {
          if (start.index) {
            const deleteRow = async () => {
              await db.transaction((tx) => {
                tx.executeSql(`DELETE FROM punctuatedroutes where id = ?;`, [
                  start.index,
                ]);
              });
            };
            deleteRow();
          }
          Offline(data);
          saveStartValide(null);
          saveStart(null);
          saveEnd(null);
        }
        if (response.status === 200) {
          if (start.index) {
            const deleteRow = async () => {
              await db.transaction((tx) => {
                tx.executeSql(`DELETE FROM punctuatedroutes where id = ?;`, [
                  start.index,
                ]);
              });
            };
            deleteRow();
          }

          sendNotification(response.data);
          saveStartValide(null);
          saveStart(null);
          saveEnd(null);
        }
      })
      .catch((error) => {
        console.log(error);

        if (start.index) {
          const deleteRow = async () => {
            await db.transaction((tx) => {
              tx.executeSql(`DELETE FROM punctuatedroutes where id = ?;`, [
                start.index,
              ]);
            });
          };
          deleteRow();
        }
        Offline(data);
        saveStartValide(null);
        saveStart(null);
        saveEnd(null);
      });
  }

  function sendOffline() {
    const Fetch = async () => {
      await db.transaction((tx) => {
        tx.executeSql("SELECT * FROM punctuatedroutes", [], (trans, result) => {
          var response = result["rows"]._array;

          if (response.length > 0) {
            response.map((index) => {
              const dataStart = {
                index: index.id,
                ltStart: index.ltStart,
                LgSatrt: index.LgSatrt,
                timeStart: index.timeStart,
              };
              const dataEnd = {
                ltEnd: index.ltEnd,
                lgEnd: index.lgEnd,
                timeEnd: index.timeEnd,
              };

              sendApi(dataStart, dataEnd);
            });
          } else {
            console.log("Acabou");
          }
        });
      });
    };

    Fetch();
  }

  try {
    if (locations) {
      sendOffline();
      const lat = locations[0].coords.latitude;
      const long = locations[0].coords.longitude;
      const speed = locations[0].coords.speed;
      const time = locations[0].timestamp;
      var data = {
        ltStart: lat,
        LgSatrt: long,
        timeStart: time,
      };

      var start = await AsyncStorage.getItem("@startLocation");
      if (start !== null && start !== "null") {
        const startConvert = JSON.parse(start);
        startLocation = startConvert;
      } else {
        startLocation = null;
      }

      const end = await AsyncStorage.getItem("@endLocation");
      if (end !== null && end !== "null") {
        const endConvert = JSON.parse(end);
        endLocation = endConvert;
      } else {
        endLocation = null;
      }
      const startInitial = await AsyncStorage.getItem("@startValide");
      if (startInitial !== null && startInitial !== "null") {
        const startConvertDate = JSON.parse(startInitial);
        startValide = startConvertDate;
      } else {
        startValide = null;
      }

      const date = new Date(Date.now());

      // Validação para gravar a posição quando começar a se mover
      if (startLocation === null) {
        if (speed >= 10) {
          saveStart(data);
        }
      }
      // Validação de quando a posição inicial e final já estão gravadas
      if (
        startLocation !== null &&
        startLocation !== "null " &&
        endLocation !== null &&
        endLocation !== "null"
      ) {
        // valida se o registro de tempo já foi gravado
        if (startValide !== null && startValide !== "null") {
          const dataStart = new Date(Number(startValide));
          const diff = date - dataStart;
          const comp = diff / 60000;
          if (comp >= VAL_COMPARACAO_TIMEOUT) {
            sendApi(startLocation, endLocation);
          } else {
            // valida se a velocidade não aumentou novamente se acaso aumentar começa a contar do zero
            if (speed >= 10) {
              saveEnd(null);
              saveStartValide(null);
            }
          }
        } else {
          saveStartValide(date.getTime());
        }
      }
      // Validação de quando o Usuario para o carro para gravar a posição final
      if (
        (startLocation !== null &&
          startLocation !== "null" &&
          endLocation === null) ||
        endLocation === "null"
      ) {
        if (speed <= 1) {
          saveEnd(data);
        }
      }
    }
  } catch (e) {
    console.log(e);
    TaskManager.unregisterTaskAsync(LOCATION_TRACKING);
    TaskManager.unregisterAllTasksAsync();
    Alert.alert("Erro!", e.message);
  }
}
