import React, { useState } from "react";
import { KeyboardAvoidingView, AsyncStorage } from "react-native";
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
import Api from "../../api/index";

const ImageLogin = require("../../../assets/images/imageLogin.png");

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [next, setNext] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [focus, setFocus] = useState([]);
  const [message, setMessage] = useState([]);
  const navigation = useNavigation();

  const handlerApp = async () => {
    setFocus([]);
    if (user.trim() === "") {
      setErrorUser(true);
      const data = {
        user: "Preencha o campo e-mail/CPF",
      };
      setMessage(data);
    } else if (password.trim() === "") {
      setErrorPassword(true);
      const data = {
        password: "Preencha o campo de senha",
      };

      setMessage(data);
    } else {
      const data = {
        username: user,
        password: password,
      };
      let res = await (await Api.post("/login", data)).data;
      if (res.error) {
        console.log("Entrou");
        if (res.error === "Usúario não encontrado!") {
          const data = {
            user: "Usúario não encontrado!",
          };
          setErrorUser(true);
          setMessage(data);
        } else {
          const data = {
            password: "Senha incorreta",
          };
          setErrorPassword(true);
          setMessage(data);
        }
      } else {
        await AsyncStorage.setItem("token", res.token);
        navigation.navigate("MainTab");
      }
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
              style={[
                (errorUser && Styles.InputError) ||
                  (focus.user && Styles.InputFocus),
              ]}
              placeholder="E-mail/CPF"
              returnKeyType={"next"}
              onFocus={() => {
                setErrorUser(false);
                setErrorPassword(false);
                setFocus({ user: true });
              }}
              onChangeText={(text) => {
                setUser(text);
              }}
              onSubmitEditing={() => {
                next.focus();
              }}
            />
            {errorUser && <TextError>{message.user}</TextError>}
            <Input
              style={[
                (errorPassword && Styles.InputError) ||
                  (focus.password && Styles.InputFocus),
              ]}
              placeholder="Senha"
              secureTextEntry={true}
              onFocus={() => {
                setErrorUser(false);
                setErrorPassword(false);
                setFocus({ password: true });
              }}
              ref={(input) => {
                setNext(input);
              }}
              onChangeText={(text) => setPassword(text)}
            />
            {errorPassword && <TextError>{message.password}</TextError>}

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
