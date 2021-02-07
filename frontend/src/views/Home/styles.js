import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.SafeAreaView`
  background-color: #f0f3f8;
  flex: 1;
`;

export const ContainerImage = styled.View`
  top: 7%;
  align-items: center;
`;

export const ViewImage = styled.Image`
  width: 150px;
  height: 165px;
`;

export const ContainerSubTitle = styled.View`
  margin-top: 30%;
  align-items: center;
`;

export const SubTitle = styled.Text`
  font-family: "AveriaSansLibre_400Regular";
  font-size: 20px;
`;

export const ContainerCard = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 30%;
`;

export const Card = styled.TouchableOpacity`
  margin-top: 15%;
  width: 85%;
  height: 35%;
  background: #696880;
  border-radius: 15px;
  justify-content: center;
`;

export const CardContent = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const CardImage = styled.Image``;

export const CardText = styled.Text`
  margin-left: 10%;
  margin-right: 5%;
  font-family: "AveriaSansLibre_400Regular";
  font-size: 35px;
  color: #fff;
`;

// !Style para fazer shadow dos cards
export const Styles = StyleSheet.create({
  CardStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 15,
    zIndex: 1,
  },
});
