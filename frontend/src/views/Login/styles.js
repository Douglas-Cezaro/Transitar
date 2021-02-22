import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.SafeAreaView`
  background-color: #f0f3f8;
  flex: 1;
`;

export const ContainerImage = styled.View`
  align-items: center;
`;

export const ViewImage = styled.Image`
  width: 100%;
`;

export const ContainerTitle = styled.View`
  top: 2%;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: "AveriaSansLibre_400Regular";
  font-size: 35px;
`;

export const Scroller = styled.ScrollView`
  height: 100%;
`;

export const Form = styled.SafeAreaView`
  margin-top: 15%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.TextInput`
  margin-top: 2%;
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
  font-family: "RobotoRegular";
  font-size: 16px;
  color: #fd5555;
`;

export const BtnLogin = styled.TouchableOpacity`
  margin-top: 5%;
  margin-bottom: 5%;
  width: 85%;
  height: 60px;
  background: #2d8eff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  align-items: center;
  justify-content: center;
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
  InputSuccess: {
    borderColor: "rgba(0, 197, 102, 0.5)",
  },
  Title: {
    top: "2%",
    alignItems: "center",
  },
  btnActive: {
    backgroundColor: "#2d8eff",
  },
  btnInactive: {
    backgroundColor: "rgba(45, 142, 255, 0.7)",
  },
});

export const BtnText = styled.Text`
  font-family: "RobotoBold";
  font-size: 16px;
  color: #fff;
`;

export const ContainerRecoverPassword = styled.View`
  padding-top: 2%;
`;

export const BtnRecoverPassword = styled.TouchableOpacity``;

export const RecoverPasswordText = styled.Text`
  font-family: "RobotoBold";
  font-size: 14px;
  color: #020c37;
  opacity: 0.3;
`;

export const ContainerRegister = styled.View`
  margin-top: 10%;
`;

export const RegisterContent = styled.View`
  flex-direction: row;
`;

export const RegisterLabel = styled.Text`
  margin-right: 5%;
  font-family: "RobotoBold";
  font-size: 14px;
  color: #020c37;
  opacity: 0.3;
`;

export const BtnRegister = styled.TouchableOpacity``;

export const BtnRegisterText = styled.Text`
  font-family: "RobotoRegular";
  font-size: 16px;
  color: #2d8eff;
`;
