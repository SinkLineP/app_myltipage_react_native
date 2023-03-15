import React, {useState} from "react";
import {View, FlatList} from "react-native";
import {
  fantasticAnimalsPoster1,
  fantasticAnimalsPoster2,
  fantasticAnimalsPoster3
} from "../postersLinks/postersURL";
import {globalStyles} from "../../styles/global";
import {StatusBar} from "expo-status-bar";
import Card from "../../components/Card/Card";


const HomePage = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {key: 1, title: "Фантастические твари и где они обитают", rating: 7.6, releaseDate: "2016 год", img: fantasticAnimalsPoster1 },
    {key: 2, title: "Фантастические твари: Преступления Грин-де-Вальда", rating: 6.6, releaseDate: "2018 год", img: fantasticAnimalsPoster2 },
    {key: 3, title: "Фантастические твари: Тайны Дамблдора", rating: 6.0, releaseDate: "2022 год", img: fantasticAnimalsPoster3 }
  ])


  return (
    <>
      <View style={globalStyles.containerNoFlex}>
        <FlatList
          data={reviews}
          renderItem={({ item }) => <Card item={item} navigation={navigation}/>}
        />
        <StatusBar style="auto" />
      </View>
    </>
  )
};

export default HomePage;