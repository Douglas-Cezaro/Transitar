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
        await Api.get("validatetoken", config)
          .then(async (response) => {
            if (response.status === 401) {
              navigation.reset({
                routes: [{ name: "Login" }],
              });
            }
            if (response.status === 200) {
              await AsyncStorage.setItem("token", token);
              navigation.reset({
                routes: [{ name: "MainTab" }],
              });
            }
          })
          .catch((error) => {
            navigation.reset({
              routes: [{ name: "MainTab" }],
            });
          });
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
