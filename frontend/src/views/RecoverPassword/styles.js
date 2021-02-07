import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.SafeAreaView`
  background-color: #f0f3f8;
  flex: 1;
`;

export const ContainerTitle = styled.View`
  top: 7%;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: "AveriaSansLibre_400Regular";
  font-size: 25px;
`;

export const ContainerImage = styled.View`
  align-items: center;
  top: 10%;
  width: 100%;
`;

export const ViewImage = styled.Image``;

export const ContainerSubTitle = styled.View`
  top: 15%;
  margin-left: 10%;
  margin-right: 10%;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-family: "AveriaSansLibre_400Regular";
  font-size: 20px;
`;

export const Scroller = styled.ScrollView``;

export const Form = styled.SafeAreaView`
  top: 20%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
export const Input = styled.TextInput`
  width: 85%;
  height: 60px;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 100px;
  font-family: "RobotoRegular";
  color: rgba(0, 0, 0, 0.4);
  padding-left: 20px;
  padding-right: 20px;
`;

export const TextError = styled.Text`
  margin-top: 2%;
  margin-bottom: 50%;
  font-family: "RobotoRegular";
  font-size: 16px;
  color: #fd5555;
`;

export const BtnRecover = styled.TouchableOpacity`
  width: 85%;
  height: 60px;
  background: #2d8eff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  bottom: 35%;
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
  InputError: {
    borderColor: "rgba(255, 14, 14, 0.5)",
    color: "rgba(255, 14, 14, 0.5)",
  },
  InputFocus: {
    borderColor: "rgba(45, 142, 255, 0.7)",
  },
});
