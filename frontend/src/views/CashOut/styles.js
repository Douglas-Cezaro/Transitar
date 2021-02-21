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

export const ListContainer = styled.View`
  flex: 1;
  margin-top: 25%;
  align-items: center;
  margin-bottom: 3%;
`;

export const List = styled.ScrollView`
  width: 90%;
`;

export const OutCard = styled.View`
  width: 100%;
  height: 80px;
  margin-top: 3%;
  background: #ffffff;
  border-radius: 15px;
`;

export const OutContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;
export const OutContentLeft = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const OutContentRight = styled.View`
  width: 50%;
  align-items: flex-end;
  justify-content: center;
`;

export const OutImageContainer = styled.View`
  align-items: center;
  margin-left: 15%;
  width: 20%;
  height: 50%;
`;

export const OutImage = styled.Image`
  width: 100%;
  flex: 1;
`;

export const OutNameContainer = styled.View`
  width: 75%;
  margin-left: 10%;
`;

export const OutName = styled.Text`
  font-family: "RobotoBold";
  font-size: 17px;
  color: #000;
`;
export const OutScore = styled.Text`
  margin-right: 10%;
  text-decoration: underline;
  font-family: "RobotoRegular";
  font-size: 25px;
  color: #000;
`;
