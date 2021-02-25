import React, { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
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
  ContainerEndPointStartText,
  EndPointEndText,
  ContainerEndPointEndText,
  CardScore,
  CardScoreText,
} from "./styles";
import api from "../../api";
import Loading from "../../components/loading";

export default function History() {
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPont = async () => {
    setLoading(true);
    const user = await AsyncStorage.getItem("user");
    const token = await AsyncStorage.getItem("token");
    const userConvert = JSON.parse(user);
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    await api
      .get(`punctuatedroutes/${userConvert.id}`, config)
      .then((response) => {
        setAddress(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    setLoading(false);
  };

  const formattedAddress = (add) => {
    var array = add.split(",");
    const index = array.length - 2;
    array.splice(index, 2);
    return array.join(",");
  };

  useEffect(() => {
    fetchPont();
  }, [address]);

  return (
    <Container>
      <ContainerTitle>
        <Title>Rotas pontuadas</Title>
      </ContainerTitle>
      <Scroller>
        <ContainerCard>
          {loading ? (
            <Loading />
          ) : (
            address.map((add, index) => (
              <Card key={index}>
                <CardContentTitle>
                  <CardTitle>Pontuação por boa conduta</CardTitle>
                </CardContentTitle>
                <CardContent>
                  <CardLocation>
                    <CardLocationStart>
                      <EndPointStart />
                      <ContainerEndPointStartText>
                        <EndPointStartText>
                          {formattedAddress(add.addressStart)}
                        </EndPointStartText>
                      </ContainerEndPointStartText>
                    </CardLocationStart>
                    <CardLocationEnd>
                      <EndPointEnd />
                      <ContainerEndPointEndText>
                        <EndPointEndText>
                          {formattedAddress(add.addressEnd)}
                        </EndPointEndText>
                      </ContainerEndPointEndText>
                    </CardLocationEnd>
                  </CardLocation>
                  <CardScore>
                    <CardScoreText>+ {add.value}pts</CardScoreText>
                  </CardScore>
                </CardContent>
              </Card>
            ))
          )}
        </ContainerCard>
      </Scroller>
    </Container>
  );
}
