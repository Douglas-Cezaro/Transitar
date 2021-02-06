import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerImage,
  ViewImage,
  ContainerTitle,
  Title,
  Scroller,
  Form,
  Input,
  BtnLogin,
  Styles,
  BtnText,
  ContainerRecoverPassword,
  BtnRecoverPassword,
  RecoverPasswordText,
  ContainerRegister,
  RegisterContent,
  RegisterLabel,
  BtnRegister,
  BtnRegisterText,
  TextError,
} from "./styles";

const ImageLogin = require("../../../assets/images/imageLogin.png");

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [next, setNext] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [message, setMessage] = useState([]);
  const navigation = useNavigation();

  const handlerApp = () => {
    if (user.trim() === "") {
      setErrorUser(true);
      const data = {
        user: "Preencha o campo usuário",
      };
      setMessage((message) => [...message, data]);
    } else if (password.trim() === "") {
      setErrorPassword(true);
      const data = {
        password: "Preencha o campo de senha",
      };
      setMessage((message) => [...message, data]);
    } else {
      navigation.navigate("MainTab");
    }
  };

  const handlerRegister = () => {
    navigation.navigate("Register");
  };

  const handleRecoverPassword = () => {
    navigation.navigate("RecoverPassword");
  };

  return (
    <Container>
      <Scroller>
        <ContainerImage>
          <ViewImage source={ImageLogin} />
        </ContainerImage>
        <KeyboardAvoidingView behavior="height" enabled>
          <ContainerTitle>
            <Title>Transitar</Title>
          </ContainerTitle>
          <Form>
            <Input
              placeholder="Usuário"
              returnKeyType={"next"}
              onFocus={() => {
                setErrorUser(false);
                setErrorPassword(false);
              }}
              onChangeText={(text) => {
                setUser(text);
              }}
              onSubmitEditing={() => {
                next.focus();
              }}
            />
            {errorUser && <TextError>{message[0].user}</TextError>}
            <Input
              placeholder="Senha"
              secureTextEntry={true}
              onFocus={() => {
                setErrorUser(false);
                setErrorPassword(false);
              }}
              ref={(input) => {
                setNext(input);
              }}
              onChangeText={(text) => setPassword(text)}
            />
            {errorPassword && <TextError>{message[1].password}</TextError>}

            <BtnLogin style={Styles.ButtonStyle} onPress={handlerApp}>
              <BtnText>Entrar</BtnText>
            </BtnLogin>
            <ContainerRecoverPassword>
              <BtnRecoverPassword onPress={handleRecoverPassword}>
                <RecoverPasswordText>Esqueceu a Senha?</RecoverPasswordText>
              </BtnRecoverPassword>
            </ContainerRecoverPassword>
            <ContainerRegister>
              <RegisterContent>
                <RegisterLabel>Não tem uma conta?</RegisterLabel>
                <BtnRegister onPress={handlerRegister}>
                  <BtnRegisterText>Cadastre-se</BtnRegisterText>
                </BtnRegister>
              </RegisterContent>
            </ContainerRegister>
          </Form>
        </KeyboardAvoidingView>
      </Scroller>
    </Container>
  );
}
