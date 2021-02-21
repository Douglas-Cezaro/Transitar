import React from "react";
import { Text } from "react-native";
import {
  Container,
  ContainerTitle,
  Title,
  ListContainer,
  List,
  OutCard,
  OutContent,
  OutContentLeft,
  OutContentRight,
  OutImageContainer,
  OutImage,
  OutNameContainer,
  OutName,
  OutScore,
} from "./styles";

const Image = require("../../../assets/images/Empresa.png");

export default function CashOut() {
  return (
    <Container>
      <ContainerTitle>
        <Title>Histórico de consumo</Title>
      </ContainerTitle>
      <ListContainer>
        <List>
          <OutCard>
            <OutContent>
              <OutContentLeft>
                <OutImageContainer>
                  <OutImage source={Image} />
                </OutImageContainer>
                <OutNameContainer>
                  <OutName>Empresa X</OutName>
                </OutNameContainer>
              </OutContentLeft>
              <OutContentRight>
                <OutScore>- 2pts</OutScore>
              </OutContentRight>
            </OutContent>
          </OutCard>
          <OutCard>
            <OutContent>
              <OutContentLeft>
                <OutImageContainer>
                  <OutImage source={Image} />
                </OutImageContainer>
                <OutNameContainer>
                  <OutName>Empresa X</OutName>
                </OutNameContainer>
              </OutContentLeft>
              <OutContentRight>
                <OutScore>- 2pts</OutScore>
              </OutContentRight>
            </OutContent>
          </OutCard>
          <OutCard>
            <OutContent>
              <OutContentLeft>
                <OutImageContainer>
                  <OutImage source={Image} />
                </OutImageContainer>
                <OutNameContainer>
                  <OutName>Empresa X</OutName>
                </OutNameContainer>
              </OutContentLeft>
              <OutContentRight>
                <OutScore>- 2pts</OutScore>
              </OutContentRight>
            </OutContent>
          </OutCard>
          <OutCard>
            <OutContent>
              <OutContentLeft>
                <OutImageContainer>
                  <OutImage source={Image} />
                </OutImageContainer>
                <OutNameContainer>
                  <OutName>Empresa X</OutName>
                </OutNameContainer>
              </OutContentLeft>
              <OutContentRight>
                <OutScore>- 2pts</OutScore>
              </OutContentRight>
            </OutContent>
          </OutCard>
          <OutCard>
            <OutContent>
              <OutContentLeft>
                <OutImageContainer>
                  <OutImage source={Image} />
                </OutImageContainer>
                <OutNameContainer>
                  <OutName>Empresa X</OutName>
                </OutNameContainer>
              </OutContentLeft>
              <OutContentRight>
                <OutScore>- 2pts</OutScore>
              </OutContentRight>
            </OutContent>
          </OutCard>
          <OutCard>
            <OutContent>
              <OutContentLeft>
                <OutImageContainer>
                  <OutImage source={Image} />
                </OutImageContainer>
                <OutNameContainer>
                  <OutName>Empresa X</OutName>
                </OutNameContainer>
              </OutContentLeft>
              <OutContentRight>
                <OutScore>- 2pts</OutScore>
              </OutContentRight>
            </OutContent>
          </OutCard>
          <OutCard>
            <OutContent>
              <OutContentLeft>
                <OutImageContainer>
                  <OutImage source={Image} />
                </OutImageContainer>
                <OutNameContainer>
                  <OutName>Empresa X</OutName>
                </OutNameContainer>
              </OutContentLeft>
              <OutContentRight>
                <OutScore>- 2pts</OutScore>
              </OutContentRight>
            </OutContent>
          </OutCard>
          <OutCard>
            <OutContent>
              <OutContentLeft>
                <OutImageContainer>
                  <OutImage source={Image} />
                </OutImageContainer>
                <OutNameContainer>
                  <OutName>Empresa X</OutName>
                </OutNameContainer>
              </OutContentLeft>
              <OutContentRight>
                <OutScore>- 2pts</OutScore>
              </OutContentRight>
            </OutContent>
          </OutCard>
        </List>
      </ListContainer>
    </Container>
  );
}
