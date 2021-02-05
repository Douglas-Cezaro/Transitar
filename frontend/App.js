import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routers/MainStack";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#F0F3F8" style="dark" />
      <Routes />
    </>
  );
}
