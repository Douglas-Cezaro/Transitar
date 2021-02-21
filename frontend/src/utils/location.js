import React from "react";
import * as Location from "expo-location";

export default async function GeoLocation() {
  let { status } = await Location.requestPermissionsAsync();
  if (status !== "granted") {
    setErrorMsg("Permission to access location was denied");
    return;
  }

  let location = await Location.getCurrentPositionAsync({});

  return location;
}
