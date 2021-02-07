import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.SafeAreaView`
  background-color: #f0f3f8;
  flex: 1;
`;

export const ContainerTitle = styled.View`
  top: 10%;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  font-family: "AveriaSansLibre_400Regular";
  font-size: 24px;
`;

export const ContainerImage = styled.View`
  align-items: center;
  top: 20%;
  flex: 1;
`;

export const ViewImage = styled.Image`
  width: 350px;
  height: 300px;
`;

export const ContainerBtn = styled.View`
  align-items: center;
`;

export const BtnBack = styled.TouchableOpacity`
  margin-top: 5%;
  margin-bottom: 5%;
  width: 85%;
  height: 60px;
  background: #2d8eff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  bottom: 10%;
`;

export const BtnText = styled.Text`
  font-family: "RobotoBold";
  font-size: 16px;
  color: #fff;
`;

// !Style para fazer shadow do button
export const Styles = StyleSheet.create({
  ButtonStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    zIndex: 1,
  },
});
