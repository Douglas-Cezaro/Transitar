import React, { useState, useEffect } from "react";
import { Keyboard, AsyncStorage, ActivityIndicator, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerImage,
  ViewImage,
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
  const [close, setClose] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlerApp = async () => {
    setLoading(true);

    setFocus([]);
    if (user.trim() === "") {
      setErrorUser(true);
      const data = {
        user: "Preencha o campo e-mail/CPF",
      };
      setMessage(data);
      setLoading(false);
    } else if (password.trim() === "") {
      setErrorPassword(true);
      const data = {
        password: "Preencha o campo de senha",
      };
      setLoading(false);

      setMessage(data);
    } else {
      const data = {
        username: user,
        password: password,
      };
      await Api.post("/login", data)
        .then(async (response) => {
          const res = response.data;
          if (response.status === 404) {
            if (res.error) {
              if (res.error === "Usúario não encontrado!") {
                const data = {
                  user: "Usúario não encontrado!",
                };
                setErrorUser(true);
                setMessage(data);
                setLoading(false);
              } else {
                const data = {
                  password: "Senha incorreta",
                };
                setErrorPassword(true);
                setMessage(data);
                setLoading(false);
              }
            }
          }
          if (response.status === 200) {
            setLoading(false);
            const data = {
              id: res.user.id,
              name: res.user.fullName,
              url: res.image.path,
            };
            await AsyncStorage.setItem("token", res.token);
            await AsyncStorage.setItem("user", JSON.stringify(data));
            navigation.navigate("MainTab", { screen: "Profile" });
          }
        })
        .catch((error) => {
          console.log(error);
          Alert.alert("Erro!", "Verique se está conectado a internet");
          setLoading(false);
        });
    }
  };

  const handlerRegister = () => {
    navigation.navigate("Register");
  };

  const handleRecoverPassword = () => {
    navigation.navigate("RecoverPassword");
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setClose(true);
  };

  const _keyboardDidHide = () => {
    setClose(false);
  };

  return (
    <Container>
      <Scroller>
        <ContainerImage>
          <ViewImage source={ImageLogin} />
        </ContainerImage>
        {!close && (
          <Animatable.View
            style={Styles.Title}
            animation="fadeInUp"
            useNativeDriver
          >
            <Title>Transitar</Title>
          </Animatable.View>
        )}

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

          <BtnLogin
            style={
              (Styles.ButtonStyle,
              [loading ? Styles.btnInactive : Styles.btnActive])
            }
            disabled={loading}
            onPress={handlerApp}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <BtnText>Entrar</BtnText>
            )}
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
      </Scroller>
    </Container>
  );
}
