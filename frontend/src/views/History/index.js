import React from "react";
import {
  Container,
  ContainerTitle,
  Title,
  Scroller,
  ContainerCard,
  Card,
  CardContentTitle,
  CardTitle,
  CardContent,
  CardLocation,
  CardLocationStart,
  CardLocationEnd,
  EndPointStart,
  EndPointEnd,
  EndPointStartText,
  EndPointEndText,
  CardScore,
  CardScoreText,
} from "./styles";

export default function History() {
  return (
    <Container>
      <ContainerTitle>
        <Title>Rotas pontuadas</Title>
      </ContainerTitle>
      <Scroller>
        <ContainerCard>
          <Card>
            <CardContentTitle>
              <CardTitle>Pontuação por boa conduta</CardTitle>
            </CardContentTitle>
            <CardContent>
              <CardLocation>
                <CardLocationStart>
                  <EndPointStart />
                  <EndPointStartText>Rua Trancredo Neves</EndPointStartText>
                </CardLocationStart>
                <CardLocationEnd>
                  <EndPointEnd />
                  <EndPointEndText>Rua Dom João Sexto </EndPointEndText>
                </CardLocationEnd>
              </CardLocation>
              <CardScore>
                <CardScoreText>+ 2pts</CardScoreText>
              </CardScore>
            </CardContent>
          </Card>
        </ContainerCard>
      </Scroller>
    </Container>
  );
}
