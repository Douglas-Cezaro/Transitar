import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routers/MainStack";
import { useFonts } from "expo-font";
import Loading from "./src/components/loading";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import * as Permissions from "expo-permissions";
import { AsyncStorage } from "react-native";
import * as Notifications from "expo-notifications";
import Api from "./src/api/index";

const LOCATION_TRACKING = "location-tracking";
// tempo que o app espera depois que o condutor estiver parado para mandar a request de pontuação
const VAL_COMPARACAO_TIMEOUT = 2;

const vardefault = {
  ltStart: 0,
  LgSatrt: 0,
  timeStart: 0,
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useEffect(() => {
    const config = async () => {
      let res = await Permissions.askAsync(Permissions.LOCATION);
      let res21 = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (res.status !== "granted") {
        console.log("Permission to access location was denied");
      } else {
        console.log("Permission to access location granted");
      }
    };

    const location = async () => {
      await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
        accuracy: Location.Accuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 0,
      });
      const hasStarted = await Location.hasStartedLocationUpdatesAsync(
        LOCATION_TRACKING
      );
      console.log("tracking started?", hasStarted);
    };
    location();
    config();
  }, []);
  let [fontsLoaded] = useFonts({
    AveriaSansLibre_300Light: require("./assets/fonts/AveriaSansLibre-Light.ttf"),
    AveriaSansLibre_400Regular: require("./assets/fonts/AveriaSansLibre-Regular.ttf"),
    AveriaSansLibre_700Bold: require("./assets/fonts/AveriaSansLibre-Regular.ttf"),
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Thin.ttf"),
  });
  if (!fontsLoaded) {
    // TODO: vai ser ajustado quando for implementado animations
    return <Loading />;
  }

  return (
    <>
      <StatusBar backgroundColor="#F0F3F8" style="dark" />
      <Routes />
    </>
  );
}

async function saveStart(data) {
  await AsyncStorage.setItem("@startLocation", JSON.stringify(data));
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
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

async function saveEnd(data) {
  await AsyncStorage.setItem("@endLocation", JSON.stringify(data));
}

async function saveStartValide(data) {
  await AsyncStorage.setItem("@startValide", JSON.stringify(data));
}

async function sendApi(start, end) {
  console.log("Api");
  const data = {
    ltStart: start.ltStart,
    LgSatrt: start.LgSatrt,
    timeStart: start.timeStart,
    ltEnd: end.ltStart,
    lgEnd: end.LgSatrt,
    timeEnd: end.timeStart,
  };
  const token = await AsyncStorage.getItem("token");
  const response = await (
    await Api.post(
      "/evaluateroute",
      { data: data },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
  ).data;

  sendNotification(response);
  saveStartValide("");
  saveStart(vardefault);
  saveEnd(vardefault);
}

TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  if (error) {
    console.log("LOCATION_TRACKING task ERROR:", error);
    return;
  }
  if (data) {
    const { locations } = data;
    if (locations) {
      const lat = locations[0].coords.latitude;
      const long = locations[0].coords.longitude;
      const speed = locations[0].coords.speed;
      const time = locations[0].timestamp;
      const data = {
        ltStart: lat,
        LgSatrt: long,
        timeStart: time,
      };
      var startLocation = vardefault;
      var endLocation = vardefault;
      startLocation = startLocation = JSON.parse(
        await AsyncStorage.getItem("@startLocation")
      );
      endLocation = JSON.parse(await AsyncStorage.getItem("@endLocation"));
      const startValide = await AsyncStorage.getItem("@startValide");
      const date = new Date(Date.now());

      if (startLocation.ltStart === 0 && endLocation.ltStart === 0) {
        if (speed >= 0) {
          saveStart(data);
        }
      }
      if (startLocation.ltStart !== 0 && endLocation.ltStart !== 0) {
        if (startValide) {
          const valStart = startValide.replace('"', "").replace('"', "");
          const dataStart = new Date(Number(valStart));
          const diff = date - dataStart;
          const comp = diff / 60000;

          if (comp >= VAL_COMPARACAO_TIMEOUT) {
            sendApi(startLocation, endLocation);
          } else {
            if (speed >= 10) {
              saveEnd(vardefault);
              saveStart(data);
            }
          }
        } else {
          saveStartValide(date.getTime());
        }
      }
      if (startLocation.ltStart !== 0 && endLocation.ltStart == 0) {
        if (speed <= 1) {
          saveEnd(data);
        }
      }
    }
  }
});
