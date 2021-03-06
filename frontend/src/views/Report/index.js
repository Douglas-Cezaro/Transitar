import React, { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import {
  Alert,
  Modal,
  Image,
  Keyboard,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo, FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import GeoLocation from "../../utils/location";

import Api from "../../api/index";
import {
  Container,
  ContainerTitle,
  BackButton,
  Title,
  TitleFeatured,
  ContainerImage,
  Scroller,
  Form,
  Input,
  BtnCamera,
  BtnReport,
  Label,
  ContainerUploadedImage,
  BtnText,
  TextError,
  Styles,
  ContainerModal,
  ModalView,
  ModalViewExit,
  ModalBtnExit,
  ModalTitle,
  ModalContainerBtn,
  ModalBtn,
} from "./styles";
const ImageViewReport = require("../../../assets/images/ImageViewReport.png");

export default function Report() {
  const [description, setDescription] = useState("");
  const [close, setClose] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState([]);
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const handleGoBack = () => {
    const router = route.params.view;
    navigation.reset({
      routes: [{ name: router }],
    });
  };

  const _keyboardDidShow = () => {
    setClose(true);
  };

  const _keyboardDidHide = () => {
    setClose(false);
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

  const handlerReport = async () => {
    setLoading(true);
    setFocus([]);
    if (description.trim() === "") {
      setError(true);
      const data = {
        description: "Preencha o campo descrição",
      };
      setMessage(data);
      setLoading(false);
    } else {
      const { latitude, longitude } = (await GeoLocation()).coords;
      const data = new FormData();

      data.append("description", description);
      data.append("latitude", String(latitude));
      data.append("longitude", String(longitude));

      images.forEach((image, index) => {
        data.append("images", {
          name: `image_${index}.jpg`,
          type: "image/jpg",
          uri: image,
        });
      });

      await Api.post("/report", data)
        .then((response) => {
          setLoading(false), Alert.alert("", "Reportado com sucesso");
        })
        .catch((error) => Alert.alert("", "Erro ao tentar mandar o reporte"));
      setDescription("");
      setImages([]);
    }
  };

  return (
    <Container>
      <Scroller>
        {!close && (
          <ContainerTitle>
            <BackButton onPress={handleGoBack}>
              <Ionicons name="arrow-back-outline" size={50} color="#7E8389" />
            </BackButton>
            <Title>
              <TitleFeatured>Reporte</TitleFeatured> um problema encontrado no
              transito da sua cidade!
            </Title>
          </ContainerTitle>
        )}
        <ContainerImage>
          {!close && (
            <Animatable.Image
              source={ImageViewReport}
              animation="fadeInUp"
              useNativeDriver
              style={Styles.ViewImage}
            />
          )}
        </ContainerImage>

        <Form>
          {error && <TextError>{message.description}</TextError>}
          <Input
            style={[
              (error && Styles.InputError) ||
                (focus.description && Styles.InputFocus),
            ]}
            value={description}
            onFocus={() => {
              setError(false);
              setFocus({ description: true });
            }}
            onChangeText={(text) => {
              setError(false);
              setFocus({ description: true });
              setDescription(text);
            }}
            multiline
            placeholder="Descrição"
          />

          <BtnCamera
            style={Styles.ButtonStyle}
            onPress={() => setModalVisible(true)}
          >
            <Entypo name="camera" size={35} color="white" />
          </BtnCamera>
          {images.length > 0 && <Label>Fotos</Label>}

          <ContainerUploadedImage>
            {images.map((image) => {
              return (
                <Image
                  source={{ uri: image }}
                  style={Styles.UploadedImage}
                  key={image}
                />
              );
            })}
          </ContainerUploadedImage>
          <BtnReport
            style={
              (Styles.ButtonStyle,
              [loading ? Styles.btnInactive : Styles.btnActive])
            }
            disabled={loading}
            onPress={handlerReport}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <BtnText>Reportar</BtnText>
            )}
          </BtnReport>
        </Form>
      </Scroller>
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
