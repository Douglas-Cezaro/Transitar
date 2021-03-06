import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import {
  Container,
  ContainerTitle,
  Title,
  CardContainer,
  Card,
  Styles,
  CardContent,
  CardContentLeft,
  CardContentLeftUp,
  ContainerImageCard,
  ViewImageCard,
  Position,
  NameUser,
  Separator,
  CardContentRight,
  ScoreTitle,
  Score,
  ListContainer,
  List,
  RankingCard,
  RankingContent,
  RankingContentLeft,
  RankingContentRight,
  RankingPositionContainer,
  RankingPosition,
  RankingImageContainer,
  RankingImage,
  RankingNameContainer,
  RankingName,
  RankingScore,
} from "./styles";
const ImageUser = require("../../../assets/images/ImageUser.png");

export default function Ranking() {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const data = await AsyncStorage.getItem("user");
    setUser(JSON.parse(data));
  };

  fetchUser();
  return (
    <Container>
      <ContainerTitle>
        <Title>Ranking</Title>
      </ContainerTitle>
      <CardContainer>
        <Card style={Styles.CardStyle}>
          <CardContent>
            <CardContentLeft>
              <CardContentLeftUp>
                <ContainerImageCard>
                  <ViewImageCard
                    source={user.url ? { uri: user.url } : ImageUser}
                  />
                </ContainerImageCard>
                <Position>6°</Position>
              </CardContentLeftUp>
              <NameUser>{user.name}</NameUser>
            </CardContentLeft>
            <Separator />
            <CardContentRight>
              <ScoreTitle>Pontos já acumulados</ScoreTitle>
              <Score>100pts</Score>
            </CardContentRight>
          </CardContent>
        </Card>
      </CardContainer>
      <ListContainer>
        <List>
          <RankingCard>
            <RankingContent>
              <RankingContentLeft>
                <RankingPositionContainer>
                  <RankingPosition>1°</RankingPosition>
                </RankingPositionContainer>
                <RankingImageContainer>
                  <RankingImage source={ImageUser}></RankingImage>
                </RankingImageContainer>
                <RankingNameContainer>
                  <RankingName>Fulana</RankingName>
                </RankingNameContainer>
              </RankingContentLeft>
              <RankingContentRight>
                <RankingScore>950pts</RankingScore>
              </RankingContentRight>
            </RankingContent>
          </RankingCard>
          <RankingCard>
            <RankingContent>
              <RankingContentLeft>
                <RankingPositionContainer>
                  <RankingPosition>2°</RankingPosition>
                </RankingPositionContainer>
                <RankingImageContainer>
                  <RankingImage source={ImageUser}></RankingImage>
                </RankingImageContainer>
                <RankingNameContainer>
                  <RankingName>Fulana</RankingName>
                </RankingNameContainer>
              </RankingContentLeft>
              <RankingContentRight>
                <RankingScore>950pts</RankingScore>
              </RankingContentRight>
            </RankingContent>
          </RankingCard>
          <RankingCard>
            <RankingContent>
              <RankingContentLeft>
                <RankingPositionContainer>
                  <RankingPosition>3°</RankingPosition>
                </RankingPositionContainer>
                <RankingImageContainer>
                  <RankingImage source={ImageUser}></RankingImage>
                </RankingImageContainer>
                <RankingNameContainer>
                  <RankingName>Fulana</RankingName>
                </RankingNameContainer>
              </RankingContentLeft>
              <RankingContentRight>
                <RankingScore>950pts</RankingScore>
              </RankingContentRight>
            </RankingContent>
          </RankingCard>
          <RankingCard>
            <RankingContent>
              <RankingContentLeft>
                <RankingPositionContainer>
                  <RankingPosition>4°</RankingPosition>
                </RankingPositionContainer>
                <RankingImageContainer>
                  <RankingImage source={ImageUser}></RankingImage>
                </RankingImageContainer>
                <RankingNameContainer>
                  <RankingName>Fulana</RankingName>
                </RankingNameContainer>
              </RankingContentLeft>
              <RankingContentRight>
                <RankingScore>950pts</RankingScore>
              </RankingContentRight>
            </RankingContent>
          </RankingCard>
          <RankingCard>
            <RankingContent>
              <RankingContentLeft>
                <RankingPositionContainer>
                  <RankingPosition>5°</RankingPosition>
                </RankingPositionContainer>
                <RankingImageContainer>
                  <RankingImage source={ImageUser}></RankingImage>
                </RankingImageContainer>
                <RankingNameContainer>
                  <RankingName>Fulana</RankingName>
                </RankingNameContainer>
              </RankingContentLeft>
              <RankingContentRight>
                <RankingScore>950pts</RankingScore>
              </RankingContentRight>
            </RankingContent>
          </RankingCard>
        </List>
      </ListContainer>
    </Container>
  );
}
