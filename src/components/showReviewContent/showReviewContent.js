import React, {useState} from "react";
import {View, FlatList, ImageBackground, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import Card from "../../components/Card/Card";
import ModalWindow from "../../components/ModalWindow/ModalWindow";


const ShowReviewContent = ({ navigation, reviews, setReviews, imageBackground, titleBtnAddedContent}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      {/*<ImageBackground source={require(imageBackground)}>*/}
        <ModalWindow setReviews={setReviews} showModal={showModal} funcShowModal={(value) => setShowModal(value)} />

        <View style={showReviewContentStyles.container}>
          <Text style={showReviewContentStyles.buttonAddMove} onPress={() => setShowModal(true)}>{titleBtnAddedContent}</Text>
        </View>

        <FlatList
          data={reviews}
          renderItem={({ item }) => <Card item={item} navigation={navigation}/>}
        />

        <StatusBar style="auto" />
      {/*</ImageBackground>*/}
    </View>
  )
};

const showReviewContentStyles = StyleSheet.create({
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

export default ShowReviewContent;