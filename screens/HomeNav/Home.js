import React, {useState} from "react";
import {View, FlatList, ImageBackground, Modal, StyleSheet, Text, Button} from "react-native";
import {
  fantasticAnimalsPoster1,
  fantasticAnimalsPoster2,
  fantasticAnimalsPoster3
} from "../postersLinks/postersURL";
import {globalStyles} from "../../styles/global";
import {StatusBar} from "expo-status-bar";
import Card from "../../components/Card/Card";
import {MaterialIcons} from "@expo/vector-icons";
import ModalWindow from "../../components/ModalWindow/ModalWindow";


const HomePage = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false)
  const [reviews, setReviews] = useState([
    {key: 1, title: "Фантастические твари и где они обитают", body: "Поиск и изучение необычайных волшебных существ приводят магозоолога Ньюта Саламандера в Нью-Йорк. Скорее всего, он отбыл бы на поезде дальше, если бы не немаг (так в Америке называют магглов) по имени Якоб, оставленный в неположенном месте магический чемодан и побег из него фантастических животных Ньюта.", rating: 7.6, releaseDate: "2016 год", img: fantasticAnimalsPoster1 },
    {key: 2, title: "Фантастические твари: Преступления Грин-де-Вальда", body: "Могущественный тёмный волшебник Геллерт Грин-де-Вальд пойман в Штатах, но не собирается молча сидеть в темнице и устраивает грандиозный побег. Теперь ничто не помешает ему добиться своей цели — установить превосходство волшебников над всеми немагическими существами на планете. Чтобы сорвать планы Грин-де-Вальда, Альбус Дамблдор обращается к своему бывшему студенту Ньюту Саламандеру, который соглашается помочь, не подозревая, какая опасность ему грозит. В раскалывающемся на части волшебном мире любовь и верность проверяются на прочность, а конфликт разделяет даже настоящих друзей и членов семей.", rating: 6.6, releaseDate: "2018 год", img: fantasticAnimalsPoster2 },
    {key: 3, title: "Фантастические твари: Тайны Дамблдора", body: "Профессор Альбус Дамблдор узнаёт, что могущественный тёмный волшебник Геллерт Грин-де-Вальд планирует захватить власть над миром. Понимая, что не сможет остановить его в одиночку, Дамблдор просит магозоолога Ньюта Саламандера возглавить команду выдающихся волшебников и одного отважного магла-пекаря. Им предстоят невероятно опасные приключения, встреча со старыми и укрощение новых магических существ и борьба со сторонниками Грин-де-Вальда, которых становится всё больше.", rating: 6.0, releaseDate: "2022 год", img: fantasticAnimalsPoster3 }
  ])



  return (
    <>
      <ImageBackground source={require("../../assets/backgroundImage/background_01.png")}>

        <ModalWindow showModal={showModal} funcShowModal={(value) => setShowModal(value)} />

        <View style={homeStyles.container}>
          <Text style={homeStyles.buttonAddMove} onPress={() => setShowModal(true)}>добавить фильм для обзора</Text>
        </View>

        <FlatList
          data={reviews}
          renderItem={({ item }) => <Card item={item} navigation={navigation}/>}
        />
        <StatusBar style="auto" />

      </ImageBackground>
    </>
  )
};

const homeStyles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20
  },
  buttonAddMove: {
    backgroundColor: "coral",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    padding: 7,
    textTransform: "uppercase",
    marginTop: 10,
    textAlign: "center"
  }
})

export default HomePage;