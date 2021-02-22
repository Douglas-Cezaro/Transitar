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
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  font-family: "AveriaSansLibre_400Regular";
  font-size: 22px;
`;

export const TitleFeatured = styled.Text`
  color: #ffb00b;
  font-family: "AveriaSansLibre_700Bold";
  font-size: 30px;
`;

export const ContainerImage = styled.View`
  align-items: center;
  top: 7%;
`;

export const Scroller = styled.ScrollView``;

export const Form = styled.SafeAreaView`
  flex: 1;
  margin-top: 7%;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.TextInput`
  margin-top: 5%;
  width: 85%;
  height: 140px;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 25px;
  font-family: "RobotoRegular";
  color: rgba(0, 0, 0, 0.4);
  padding-left: 20px;
  padding-right: 20px;
`;

export const TextError = styled.Text`
  margin-top: 30%;
  font-family: "RobotoRegular";
  font-size: 16px;
  color: #fd5555;
`;

export const BtnReport = styled.TouchableOpacity`
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

export const BtnCamera = styled.TouchableOpacity`
  margin-top: 5%;
  margin-bottom: 5%;
  width: 85%;
  height: 60px;
  background: #ffb00b;
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
  ViewImage: { width: 230, height: 200 },
  UploadedImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
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

export const Label = styled.Text`
  margin-right: 70%;
  font-family: "AveriaSansLibre_400Regular";
  font-size: 19px;
`;

export const ContainerUploadedImage = styled.View`
  flex-direction: row;
`;

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
