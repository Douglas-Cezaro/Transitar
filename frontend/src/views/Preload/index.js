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
      console.log(token);
      if (token) {
        let config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        console.log(config);
        let res = await Api.get("validatetoken", config);
        console.log(res);
        if (res.token) {
          await AsyncStorage.setItem("token", token);
          navigation.reset({
            routes: [{ name: "MainTab" }],
          });
        } else {
          navigation.navigate("MainTab");
        }
      } else {
        navigation.navigate("Login");
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
