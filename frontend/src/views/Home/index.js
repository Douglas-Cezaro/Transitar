import React from "react";
import {
  Container,
  ContainerImage,
  ViewImage,
  ContainerSubTitle,
  SubTitle,
  ContainerCard,
  Card,
  Styles,
  CardContent,
  CardContainerImage,
  CardImage,
  CardText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
const Logo = require("../../../assets/images/Logo.png");
const ImageReport = require("../../../assets/images/ImageReport.png");
const ImageConductor = require("../../../assets/images/ImageConductor.png");

export default function Profile() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handledReport = () => {
    navigation.navigate("Report", { view: "Home" });
  };

  return (
    <Container>
      <ContainerImage>
        <ViewImage source={Logo} />
      </ContainerImage>
      <ContainerSubTitle>
        <SubTitle>Qual tipo de Recurso você procura?</SubTitle>
      </ContainerSubTitle>
      <ContainerCard>
        <Card style={Styles.CardStyle} onPress={handledReport}>
          <CardContent>
            <CardContainerImage style={{ height: "290%" }}>
              <CardImage source={ImageReport} />
            </CardContainerImage>
            <CardText>Reportar</CardText>
          </CardContent>
        </Card>
        <Card style={Styles.CardStyle} onPress={handleLogin}>
          <CardContent>
            <CardText>Condutor</CardText>
            <CardContainerImage style={{ height: "212%", right: "15%" }}>
              <CardImage source={ImageConductor} />
            </CardContainerImage>
          </CardContent>
        </Card>
      </ContainerCard>
    </Container>
  );
}
