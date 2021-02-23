import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerTitle,
  Title,
  ContainerImage,
  ViewImage,
  ContainerSubTitle,
  SubTitle,
  Form,
  Input,
  ContainerBtn,
  BtnRecover,
  BtnText,
  TextError,
  Styles,
} from "./styles";
import Api from "../../api/index";

const ImageRecover = require("../../../assets/images/ImageRecover.png");

export default function RecoverPassword() {
  const [user, setUser] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [focus, setFocus] = useState([]);
  const [message, setMessage] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handlerRecover = () => {
    setFocus([]);
    setLoading(true);
    if (user.trim() === "") {
      setErrorUser(true);
      const data = {
        user: "Preencha o campo e-mail/CPF",
      };
      setMessage(data);
      setLoading(false);
    } else {

      Api.post("forgotPassword", { username: user }).then(resp => {
        if (resp.status == 200) {
          navigation.navigate("ConfirmeEmail");
        } else {
          console.log(resp.data.error);
          setErrorUser(true);
          const data = {
            user: resp.data.error,
          };
          setMessage(data);
        }
        setLoading(false);
      }).catch(err => {
        console.log(err);
        setLoading(false);
      })
    }
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>Esqueceu sua senha?</Title>
      </ContainerTitle>
      <ContainerImage>
        <ViewImage source={ImageRecover} />
      </ContainerImage>
      <ContainerSubTitle>
        <SubTitle>
          Informe seu E-mail ou CPF que enviaremos um link para redefinir sua
          senha!
        </SubTitle>
      </ContainerSubTitle>
      <Form>
        <Input
          style={[
            (errorUser && Styles.InputError) ||
            (focus.user && Styles.InputFocus),
          ]}
          placeholder="E-mail/CPF"
          onFocus={() => {
            setFocus({ user: true });
          }}
          onChangeText={(text) => {
            setErrorUser(false);
            setFocus({ user: true });
            setUser(text);
          }}
        />
        {errorUser && <TextError>{message.user}</TextError>}
        <ContainerBtn>
          <BtnRecover
            style={
              (Styles.ButtonStyle,
                [loading ? Styles.btnInactive : Styles.btnActive])
            }
            disabled={loading}
            onPress={handlerRecover}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
                <BtnText>Enviar</BtnText>
              )}
          </BtnRecover>
        </ContainerBtn>
      </Form>
    </Container >
  );
}
