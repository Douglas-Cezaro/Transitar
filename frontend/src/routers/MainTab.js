import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components";

import History from "../views/History";
import Profile from "../views/Profile";
import Ranking from "../views/Ranking";
import CashOut from "../views/CashOut";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Ranking" component={Ranking} />
      <Tab.Screen name="CashOut" component={CashOut} />
    </Tab.Navigator>
  );
}
