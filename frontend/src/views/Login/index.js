import React from "react";
import { Text } from "react-native";
import { Container, ContainerImage, ContainerTitle, Title } from "./styles";
import ImageLogin from "../../../assets/images/imageLogin.png";

export default function Login() {
  return (
    <Container>
      <ContainerImage source={ImageLogin}></ContainerImage>
      <ContainerTitle>
        <Title>Transitar</Title>
      </ContainerTitle>
    </Container>
  );
}
