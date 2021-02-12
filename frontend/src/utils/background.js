//! TODO Vai ser implementado mais pra frente, tasks em background

import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import * as Permissions from "expo-permissions";

const LOCATION_TRACKING = "location-tracking";

export default function Background() {
  useEffect(() => {
    const config = async () => {
      let res = await Permissions.askAsync(Permissions.LOCATION);
      if (res.status !== "granted") {
        console.log("Permission to access location was denied");
      } else {
        console.log("Permission to access location granted");
      }
    };

    const location = async () => {
      const { locations } = await Location.startLocationUpdatesAsync(
        LOCATION_TRACKING,
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 1000,
          distanceInterval: 0,
        }
      );
      const hasStarted = await Location.hasStartedLocationUpdatesAsync(
        LOCATION_TRACKING
      );

      console.log("tracking started?", hasStarted);
    };

    config();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Start tracking" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  if (error) {
    console.log("LOCATION_TRACKING task ERROR:", error);
    return;
  }
  if (data) {
    const { locations } = data;
    let lat = locations[0].coords.latitude;
    let long = locations[0].coords.longitude;
    let speed = locations[0].coords.speed;

    const date = new Date(Date.now()).getMinutes();

    console.log(date);
    if (26 == date) {
      console.log("entrou");
    }

    console.log(
      `${new Date(Date.now()).getMinutes()}: ${lat},${long}, ${speed}`
    );
  }
});
