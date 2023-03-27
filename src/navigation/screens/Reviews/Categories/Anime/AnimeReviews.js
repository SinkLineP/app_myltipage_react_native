import React, {useState} from "react";
import {StyleSheet} from "react-native";
import ShowReviewContent from "../../../../../components/showReviewContent/showReviewContent";




function AnimeReviews({navigation}) {
  const [reviews, setReviews] = useState([]);

  return (
    <>
      <ShowReviewContent navigation={navigation} reviews={reviews} titleBtnAddedContent={"Добавить аниме для обзора"} setReviews={setReviews} imageBackground={""} />
    </>
  )
}


const animeReviewsStyles = StyleSheet.create({



})

export default AnimeReviews;

