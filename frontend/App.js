import React from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import Routes from "./src/routers/MainStack";
import { useFonts } from "expo-font";

export default function App() {
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
    return (
      <View
        style={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#F0F3F8" style="dark" />
      <Routes />
    </>
  );
}
