import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.SafeAreaView`
  background-color: #f0f3f8;
  flex: 1;
  height: 100%;
`;

export const ContainerImage = styled.View`
  top: 3%;
  align-items: center;
`;

export const Scroller = styled.ScrollView`
  margin-top: 7%;
  height: 100%;
`;

export const Form = styled.SafeAreaView`
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.TextInput`
  margin-top: 5%;
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
  font-size: 15px;
  color: #fd5555;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
`;

export const BtnRegister = styled.TouchableOpacity`
  margin-top: 10%;
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
});

export const BtnText = styled.Text`
  font-family: "RobotoBold";
  font-size: 16px;
  color: #fff;
`;
