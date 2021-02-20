import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerTitle,
  Title,
  ContainerCardMain,
  ContentCardMain,
  ContainerImage,
  ViewImage,
  ContainerSettings,
  Settings,
  ContainerCardMainNameUser,
  CardMainNameUser,
  ContainerScore,
  ViewImageProfile,
  Separator,
  Score,
  ScoreTitle,
  Value,
  ContainerCard,
  ContentCard,
  Card,
  CardContent,
  CardContainerImage,
  CardImage,
  CardText,
  Styles,
} from "./styles";

const ImageUser = require("../../../assets/images/ImageUser.png");
const ImageProfile = require("../../../assets/images/ImageProfile.png");
const ImageReport = require("../../../assets/images/ImageReport.png");

export default function Profile() {
  const navigation = useNavigation();

  const handledReport = () => {
    navigation.navigate("Report");
  };

  const handledSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>Perfil</Title>
      </ContainerTitle>
      <ContainerCardMain style={Styles.CardStyle}>
        <ContentCardMain>
          <ContainerImage>
            <ViewImage source={ImageUser} />
            <ContainerSettings onPress={handledSettings}>
              <Settings>
                <Ionicons name="settings-sharp" size={20} color="white" />
              </Settings>
            </ContainerSettings>
          </ContainerImage>

          <ContentCard>
            <ContainerCardMainNameUser>
              <CardMainNameUser>Angelica Jackson</CardMainNameUser>
            </ContainerCardMainNameUser>
            <ContainerScore>
              <ViewImageProfile source={ImageProfile}></ViewImageProfile>
              <Separator />
              <Score>
                <ScoreTitle>Pontos Disponíveis</ScoreTitle>
                <Value>300 pts</Value>
              </Score>
            </ContainerScore>
          </ContentCard>
        </ContentCardMain>
      </ContainerCardMain>
      <ContainerCard>
        <Card style={Styles.CardStyle} onPress={handledReport}>
          <CardContent>
            <CardContainerImage style={{ height: "300%" }}>
              <CardImage source={ImageReport} />
            </CardContainerImage>
            <CardText>Reportar</CardText>
          </CardContent>
        </Card>
      </ContainerCard>
    </Container>
  );
}
