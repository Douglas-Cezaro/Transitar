import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routers/MainStack";
import { useFonts } from "expo-font";
import Loading from "./src/components/loading";

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
    return <Loading />;
  }

  return (
    <>
      <StatusBar backgroundColor="#F0F3F8" style="dark" />
      <Routes />
    </>
  );
}
