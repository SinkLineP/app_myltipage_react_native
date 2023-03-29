import React, {useState} from "react";
import {StyleSheet} from "react-native";
import ShowReviewContent from "../../../../../components/showReviewContent/showReviewContent";



function SerialsReviews({navigation}) {
  const [reviews, setReviews] = useState([]);

  return (
    <>
      <ShowReviewContent navigation={navigation} reviews={reviews} setReviews={setReviews} imageBackground={""} />
    </>
  )
}


const serialsReviewsStyles = StyleSheet.create({

})

export default SerialsReviews;