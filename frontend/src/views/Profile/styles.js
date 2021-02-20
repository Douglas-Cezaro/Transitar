import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.SafeAreaView`
  background-color: #f0f3f8;
  flex: 1;
`;

export const ContainerTitle = styled.View`
  align-items: center;
  top: 7%;
`;

export const Title = styled.Text`
  font-family: "AveriaSansLibre_400Regular";
  font-size: 32px;
`;

export const ContainerCardMain = styled.View`
  top: 20%;
  align-items: center;
  flex: 1;
`;

export const ContentCardMain = styled.View`
  background: #2d8eff;
  border-radius: 20px;
  width: 90%;
  height: 65%;
  align-items: center;
`;

export const ContainerImage = styled.View`
  top: -25%;
  align-items: center;
  flex-direction: column;
  width: 67%;
  height: 51%;
`;

export const ContainerSettings = styled.TouchableOpacity`
  top: -35%;
  left: 18%;
  width: 18%;
  height: 37%;
`;

export const Settings = styled.View`
  background: #2d8eff;
  flex: 1;
  border-radius: 50px;
  background: #ffb00b;
  border: 4px solid #f5f9f9;
  align-items: center;
  justify-content: center;
`;

export const ViewImage = styled.Image`
  width: 50%;
  height: 100%;
  border-radius: 100px;
`;
export const ContainerCardMainNameUser = styled.View`
  align-items: center;
  bottom: 20%;
`;

export const CardMainNameUser = styled.Text`
  font-family: "RobotoMedium";
  font-size: 19px;
  color: #f0f3f8;
`;

export const ContainerScore = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewImageProfile = styled.Image`
  left: 50%;
`;

export const Separator = styled.View`
  width: 2px;
  background-color: #f0f3f8;
`;

export const Score = styled.View`
  right: 50%;
`;

export const ScoreTitle = styled.Text`
  font-family: "RobotoRegular";
  font-size: 16px;
  color: #f0f3f8;
`;

export const Value = styled.Text`
  font-family: "RobotoBold";
  font-size: 35px;
  color: #f0f3f8;
`;
export const ContainerCard = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.TouchableOpacity`
  margin-top: 20%;
  margin-bottom: 5%;
  width: 90%
  height: 50%;
  background: #696880;
  border-radius: 15px;
  justify-content: center;
`;

export const CardContent = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
export const ContentCard = styled.View`
  height: 50%;
  width: 100%;
  justify-content: center;
  bottom: 10%;
`;
export const CardContainerImage = styled.View`
  flex: 1;
  align-items: center;
`;

export const CardImage = styled.Image`
  flex: 1;
`;

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
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 9,
    zIndex: 1,
  },
});
