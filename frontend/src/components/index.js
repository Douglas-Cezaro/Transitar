import React, { useEffect } from "react";
import styled from "styled-components/native";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { Alert, BackHandler, StyleSheet, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import Background from "../utils/background";

const LOCATION_TRACKING = "location-tracking";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const TabArea = styled.View`
  height: 60px;
  background-color: #2d8eff;
  flex-direction: row;
`;

export const styles = StyleSheet.create({
  TabItemCenter: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: "#F0F3F8",
    marginTop: -20,
    marginRight: 10,
    marginLeft: 10,
  },
  TabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabIcon: {
    color: "#2D8EFF",
  },
});

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  useEffect(() => {
    const config = async () => {
      let res = await Permissions.askAsync(Permissions.LOCATION);
      let res21 = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (res.status !== "granted") {
        console.log("Permission to access location was denied");
        let res = await Permissions.askAsync(Permissions.LOCATION);
      } else {
        console.log("Permission to access location granted");
      }
    };

    const location = async () => {
      const hasStarted = await Location.hasStartedLocationUpdatesAsync(
        LOCATION_TRACKING
      )
        .then(async (response) => {
          console.log(response);
          await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
            accuracy: Location.Accuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 0,
          }).catch((error) => {
            console.log("Permission to access location was denied");
            config();
          });
          console.log("tracking started?", response);
        })
        .catch(async (error) => {
          await Permissions.askAsync(Permissions.LOCATION);
        });
    };
    location();
    config();
  }, []);
  useEffect(() => {
    const backAction = () => {
      Alert.alert("", "Quer realmente fechar o aplicativo", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <TabArea>
      <TouchableOpacity
        onPress={() => goTo("History")}
        style={[state.index === 0 ? styles.TabItemCenter : styles.TabItem]}
      >
        <FontAwesome5
          name="map-marker-alt"
          size={28}
          color="#F0F3F8"
          style={[state.index === 0 && styles.tabIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goTo("Profile")}
        style={[state.index === 1 ? styles.TabItemCenter : styles.TabItem]}
      >
        <FontAwesome5
          name="user-alt"
          size={28}
          color="#F0F3F8"
          style={[state.index === 1 && styles.tabIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goTo("Ranking")}
        style={[state.index === 2 ? styles.TabItemCenter : styles.TabItem]}
      >
        <FontAwesome
          name="trophy"
          size={28}
          color="#F0F3F8"
          style={[state.index === 2 && styles.tabIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goTo("CashOut")}
        style={[state.index === 3 ? styles.TabItemCenter : styles.TabItem]}
      >
        <MaterialIcons
          name="attach-money"
          size={28}
          color="#F0F3F8"
          style={[state.index === 3 && styles.tabIcon]}
        />
      </TouchableOpacity>
    </TabArea>
  );
};

try {
  TaskManager.isTaskRegisteredAsync(LOCATION_TRACKING)
    .then((data) => {
      TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
        if (error) {
          console.log(error.message);
          return;
        }
        if (data) {
          Background(data);
        }
      });
    })
    .catch((error) => {
      console.log("Error");
    });
} catch (e) {
  console.log("Error");
}
