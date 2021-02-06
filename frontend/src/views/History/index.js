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
          </Card>
        </ContainerCard>
      </Scroller>
    </Container>
  );
}
