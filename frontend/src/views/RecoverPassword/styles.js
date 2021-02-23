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
export const Form = styled.SafeAreaView`
  top: 20%;
  height: 20%;
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
  margin-bottom: 10%;
  font-family: "RobotoRegular";
  font-size: 16px;
  color: #fd5555;
`;

export const ContainerBtn = styled.View`
  align-items: center;
  top: 20%;
  width: 100%;
`;

export const BtnRecover = styled.TouchableOpacity`
  background: #2d8eff;
  width: 85%;
  height: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  align-items: center;
  justify-content: center;
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
  btnActive: {
    backgroundColor: "#2d8eff",
  },
  btnInactive: {
    backgroundColor: "rgba(45, 142, 255, 0.7)",
  },
});
