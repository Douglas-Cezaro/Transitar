import React from "react";
import styled from "styled-components/native";

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

export const Scroller = styled.ScrollView`
  top: 10%;
`;

export const ContainerCard = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  width: 90%;
  flex: 1;
  height: 120px;
  background-color: #fff;
  border-radius: 15px;
`;

export const CardContentTitle = styled.View`
  margin-top: 2%;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-family: "AveriaSansLibre_400Regular";
`;

export const CardContent = styled.View`
  margin: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardLocation = styled.View``;

export const CardLocationStart = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const EndPointStart = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background: #00c566;
`;
export const EndPointStartText = styled.Text`
  margin-left: 2%;
  font-family: "AveriaSansLibre_400Regular";
`;

export const CardLocationEnd = styled.View`
  flex-direction: row;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const EndPointEnd = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background: #fb8282; ;
`;

export const EndPointEndText = styled.Text`
  margin-left: 2%;
  font-family: "AveriaSansLibre_400Regular";
`;

export const CardScore = styled.View``;

export const CardScoreText = styled.Text`
  font-family: "AveriaSansLibre_400Regular";
  font-size: 32px;
  text-decoration: underline;
`;
