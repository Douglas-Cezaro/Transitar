import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../views/Preload";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import History from "../views/History";
import Profile from "../views/Profile";
import Ranking from "../views/Ranking";
import RecoverPassword from "../views/RecoverPassword";
import MainTab from "../routers/MainTab";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Ranking" component={Ranking} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  </NavigationContainer>
);
