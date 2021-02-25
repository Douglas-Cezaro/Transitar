import React, { useState, useEffect } from "react";
import { Modal, ActivityIndicator, AsyncStorage } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerTitle,
  Title,
  BackButton,
  ContainerImage,
  ContainerSettings,
  SettingsView,
  ViewImage,
  ViewBtn,
  BtnEdit,
  BtnEditText,
  ContainerModal,
  ModalView,
  ModalTitle,
  ModalContainerBtn,
  ModalViewExit,
  ModalBtnExit,
  ModalBtn,
  Styles,
} from "./styles";
import { Entypo, FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import Api from "../../api/index";

const ImageUser = require("../../../assets/images/ImageUser.png");

export default function Settings() {
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState({});
  const navigation = useNavigation();

  const fetchUser = async () => {
    const data = await AsyncStorage.getItem("user");
    const dataToken = await AsyncStorage.getItem("token");
    setToken(dataToken);
    setUser(JSON.parse(data));
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const handleGoBack = () => {
    navigation.reset({
      routes: [{ name: "MainTab", key: 1 }],
    });
  };

  const gallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Eita, precisamos de acesso as suas fotos...");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
    setModalVisible(false);
  };

  const camera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
    setModalVisible(false);
  };

  const handleEdit = async () => {
    setLoading(true);
    if (images.length > 0) {
      const data = new FormData();

      images.forEach((image, index) => {
        data.append("images", {
          name: `image_${index}.jpg`,
          type: "image/jpg",
          uri: image,
        });
      });

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      Api.put(`user/editImage/${user.id}`, data, config)
        .then(async (response) => {
          const data = user;

          data.url = response.data.url;

          if (response.data.error) {
            alert(
              "Erro ao tentar alterar os dados vai ser necessario logar novamente"
            );
            navigation.reset({
              routes: [{ name: "Login" }],
            });
          }
          await AsyncStorage.setItem("user", JSON.stringify(data));
          fetchUser();
          setLoading(false);
          setImages([]);
        })
        .catch((error) => {
          console.log(error);
          alert("Erro ao alterar imagem");
          setLoading(false);
        });
    } else {
      alert("Nada para ser alterado");
      setLoading(false);
    }
  };

  return (
    <Container>
      <ContainerTitle>
        <BackButton onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={50} color="#7E8389" />
        </BackButton>
        <Title>Edite seu perfil</Title>
      </ContainerTitle>
      <ContainerImage>
        {images.length > 0 ? (
          images.map((image) => {
            return <ViewImage source={{ uri: image }} key={image} />;
          })
        ) : user.url ? (
          <ViewImage source={{ uri: user.url }} />
        ) : (
          <ViewImage source={ImageUser} />
        )}

        <ContainerSettings onPress={() => setModalVisible(true)}>
          <SettingsView>
            <Ionicons name="settings-sharp" size={20} color="white" />
          </SettingsView>
        </ContainerSettings>
      </ContainerImage>
      <ViewBtn>
        <BtnEdit
          style={
            (Styles.ButtonStyle,
            [loading ? Styles.btnInactive : Styles.btnActive])
          }
          disabled={loading}
          onPress={handleEdit}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <BtnEditText>Salvar</BtnEditText>
          )}
        </BtnEdit>
      </ViewBtn>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ContainerModal>
          <ModalView style={Styles.modalView}>
            <ModalViewExit>
              <ModalBtnExit onPress={() => setModalVisible(false)}>
                <AntDesign name="closecircle" size={28} color="#fd5555" />
              </ModalBtnExit>
            </ModalViewExit>

            <ModalTitle>Selecione de onde quer adicionar a foto</ModalTitle>
            <ModalContainerBtn>
              <ModalBtn onPress={() => camera()}>
                <Entypo name="camera" size={24} color="white" />
              </ModalBtn>
              <ModalBtn onPress={() => gallery()}>
                <FontAwesome name="photo" size={24} color="white" />
              </ModalBtn>
            </ModalContainerBtn>
          </ModalView>
        </ContainerModal>
      </Modal>
    </Container>
  );
}
