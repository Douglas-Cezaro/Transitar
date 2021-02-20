import React, { useEffect } from "react";
import { Container } from "./styles";
import { AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Api from "../../api/index";
import Loading from "../../components/loading";

export default function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        let config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        let res = await Api.get("validatetoken", config);
        if (res.token) {
          await AsyncStorage.setItem("token", token);
          navigation.reset("MainTab", { screen: "Profile" });
        } else {
          navigation.navigate("MainTab", { screen: "Profile" });
        }
      } else {
        navigation.navigate("Home");
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <Loading />
    </Container>
  );
}
