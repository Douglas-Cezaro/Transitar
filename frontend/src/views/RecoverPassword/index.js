import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
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

const ImageRecover = require("../../../assets/images/ImageRecover.png");

export default function RecoverPassword() {
  const [user, setUser] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [focus, setFocus] = useState([]);
  const [message, setMessage] = useState([]);
  const navigation = useNavigation();

  const handlerRecover = () => {
    setFocus([]);
    if (user.trim() === "") {
      setErrorUser(true);
      const data = {
        user: "Preencha o campo e-mail/CPF",
      };
      setMessage(data);
    } else {
      navigation.navigate("ConfirmeEmail");
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
          <BtnRecover style={Styles.ButtonStyle} onPress={handlerRecover}>
            <BtnText>Enviar</BtnText>
          </BtnRecover>
        </ContainerBtn>
      </Form>
    </Container>
  );
}
