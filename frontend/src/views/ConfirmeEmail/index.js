import React, { useEffect } from "react";
import { Alert, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerImage,
  ContainerTitle,
  Title,
  ViewImage,
  ContainerBtn,
  BtnBack,
  BtnText,
  Styles,
} from "./styles";
const ImageConfirmeEmail = require("../../../assets/images/ImageConfirmeEmail.png");

export default function Ranking() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("", "Quer realmente fechar o aplicativo", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("Login");
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>
          Verifique sua caixa de E-mail, enviamos um link para redefinir sua
          senha!
        </Title>
      </ContainerTitle>
      <ContainerImage>
        <ViewImage source={ImageConfirmeEmail} />
      </ContainerImage>
      <ContainerBtn>
        <BtnBack style={Styles.ButtonStyle} onPress={handleBack}>
          <BtnText>Voltar</BtnText>
        </BtnBack>
      </ContainerBtn>
    </Container>
  );
}
