import React from "react";
import { Text } from "react-native";
import {
  Container,
  ContainerTitle,
  Title,
  ContainerSubTitle,
  SubTitle,
  ContainerCard,
  Card,
  Styles,
  CardContent,
  CardImage,
  CardText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const ImageReport = require("../../../assets/images/ImageReport.png");
const ImageConductor = require("../../../assets/images/ImageConductor.png");

export default function Profile() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>Transitar</Title>
      </ContainerTitle>
      <ContainerSubTitle>
        <SubTitle>Qual tipo de Recurso você procura?</SubTitle>
      </ContainerSubTitle>
      <ContainerCard>
        <Card style={Styles.CardStyle}>
          <CardContent>
            <CardImage source={ImageReport} />
            <CardText>Reportar</CardText>
          </CardContent>
        </Card>
        <Card style={Styles.CardStyle} onPress={handleLogin}>
          <CardContent>
            <CardText>Condutor</CardText>
            <CardImage source={ImageConductor} />
          </CardContent>
        </Card>
      </ContainerCard>
    </Container>
  );
}
