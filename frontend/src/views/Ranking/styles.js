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

export const CardContainer = styled.View`
  align-items: center;
  top: 10%;
  height: 20%;
`;

export const Card = styled.View`
  background-color: #2d8eff;
  border-radius: 20px;
  width: 90%;
  flex: 1;
`;

export const CardContent = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CardContentLeft = styled.View`
  width: 50%;
  padding: 4%;
`;

export const CardContentLeftUp = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerImageCard = styled.View`
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const ViewImageCard = styled.Image`
  width: 90%;
  flex: 1;
  border-radius: 100px;
`;

export const Position = styled.Text`
  font-family: "AveriaSansLibre_400Regular";
  font-size: 50px;
  color: #f0f3f8;
`;

export const NameUser = styled.Text`
  text-align: center;
  margin-top: 10%;
  font-family: "RobotoBold";
  font-size: 15px;
  color: #f0f3f8;
`;

export const Separator = styled.View`
  width: 2px;
  height: 80%;
  background-color: #f0f3f8;
`;

export const CardContentRight = styled.View`
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const ScoreTitle = styled.Text`
  font-family: "RobotoRegular";
  font-size: 15px;
  color: #f0f3f8;
`;

export const Score = styled.Text`
  margin-top: 5%;
  font-family: "RobotoBold";
  font-size: 30px;
  color: #f0f3f8;
  text-decoration: underline;
`;

export const ListContainer = styled.View`
  flex: 1;
  margin-top: 25%;
  align-items: center;
  margin-bottom: 3%;
`;

export const List = styled.ScrollView`
  width: 90%;
`;

export const RankingCard = styled.View`
  width: 100%;
  height: 65px;
  margin-top: 3%;
  background: #ffffff;
  border-radius: 15px;
`;

export const RankingContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;
export const RankingContentLeft = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const RankingContentRight = styled.View`
  width: 50%;
  align-items: flex-end;
  justify-content: center;
`;

export const RankingPositionContainer = styled.View`
  width: 50%;
  align-items: center;
`;

export const RankingPosition = styled.Text`
  font-family: "AveriaSansLibre_400Regular";
  font-size: 30px;
  color: #000;
`;

export const RankingImageContainer = styled.View`
  align-items: center;
  margin-left: 5%;
  width: 28%;
  height: 75%;
`;

export const RankingImage = styled.Image`
  width: 100%;
  flex: 1;
  border-radius: 100px;
`;

export const RankingNameContainer = styled.View`
  width: 50%;
  margin-left: 5%;
`;

export const RankingName = styled.Text`
  font-family: "RobotoBold";
  font-size: 15px;
  color: #000;
`;
export const RankingScore = styled.Text`
  margin-right: 10%;
  text-decoration: underline;
  font-family: "RobotoRegular";
  font-size: 25px;
  color: #000;
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
