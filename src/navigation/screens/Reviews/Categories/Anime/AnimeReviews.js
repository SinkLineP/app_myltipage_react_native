import React, {useState} from "react";
import {StyleSheet} from "react-native";
import ShowReviewContent from "../../../../../components/showReviewContent/showReviewContent";

function AnimeReviews({navigation}) {
  const [reviews, setReviews] = useState([
    {key: 1, title: "Тетрадь смерти", body: "Старшекласснику Лайту Ягами в руки попадает тетрадь синигами Рюка. Каждый человек, чьё имя записать в эту тетрадку, умрёт, поэтому Лайт решает бороться со злом на земле.", rating: 0.0, releaseDate: "", img: "" },
    {key: 2, title: "S.A.O", body: "", rating: 0.0, releaseDate: "", img: "" },
    {key: 3, title: "Человек бензопила", body: "", rating: 0.0, releaseDate: "", img: "" }
  ])

  return (
    <>
      <ShowReviewContent navigation={navigation} reviews={reviews} setReviews={setReviews} imageBackground={""}/>
    </>
  )
}


const animeReviewsStyles = StyleSheet.create({



})

export default AnimeReviews;

