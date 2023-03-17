import React, {useState} from "react";
import {FlatList, Text, StyleSheet, TouchableOpacity, View} from "react-native";
import CardCategoriesReviews from "../../../components/CardCategoriesReviews/CardCategoriesReviews";



const MainReviews = ({navigation}) => {
  const [categories, setCategories] = useState([])

  return (
    <FlatList
      style={mainReviewsStyles.list}
      data={categories}
      renderItem={({item}) => <CardCategoriesReviews item={item} navigation={navigation} imageDefault={require("./images/move_default.jpg")} />}
    />
  )
}


const mainReviewsStyles = StyleSheet.create({
  list: {
    marginTop: 20,
    marginBottom: 20
  }
});


export default MainReviews;