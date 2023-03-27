import React, {useState} from "react";
import {StyleSheet} from "react-native";
import ShowReviewContent from "../../../../../components/showReviewContent/showReviewContent";



function CartoonReviews({navigation}) {
  const [reviews, setReviews] = useState([]);


  return (
    <>
      <ShowReviewContent navigation={navigation} reviews={reviews} titleBtnAddedContent={"Добавить мультфильм для обзора"} setReviews={setReviews} imageBackground={""} />
    </>
  )
}


const cartoonReviewsStyles = StyleSheet.create({

})

export default CartoonReviews;