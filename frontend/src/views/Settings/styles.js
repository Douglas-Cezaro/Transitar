import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.SafeAreaView`
  background-color: #f0f3f8;
  flex: 1;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 10%;
`;

export const Title = styled.Text`
  font-family: "AveriaSansLibre_400Regular";
  font-size: 32px;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  right: 70%;
  height: 50px;
  color: #7e8389;
`;

export const ContainerImage = styled.View`
  top: 20%;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
`;

export const ContainerSettings = styled.TouchableOpacity`
  left: 14%;
  top: -13%;
  width: 17%;
  height: 15%;
`;

export const SettingsView = styled.View`
  background: #2d8eff;
  flex: 1;
  border-radius: 50px;
  background: #ffb00b;
  border: 4px solid #f5f9f9;
  align-items: center;
  justify-content: center;
`;

export const ViewImage = styled.Image`
  width: 45%;
  height: 40%;
  border-radius: 100px;
`;

export const ViewBtn = styled.View`
  align-items: center;
`;

export const BtnEdit = styled.TouchableOpacity`
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

export const BtnEditText = styled.Text`
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export const ContainerModal = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View``;

export const ModalTitle = styled.Text`
  text-align: center;
  font-family: "AveriaSansLibre_400Regular";
  font-size: 15px;
`;

export const ModalContainerBtn = styled.View`
  flex-direction: row;
  margin-top: 5%;
  justify-content: space-between;
`;

export const ModalViewExit = styled.View`
  left: 50%;
  bottom: 15%;
`;

export const ModalBtnExit = styled.TouchableOpacity``;

export const ModalBtn = styled.TouchableOpacity`
  margin-left: 10%;
  margin-right: 10%;
  width: 30%;
  height: 40px;
  background: #ffb00b;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;
