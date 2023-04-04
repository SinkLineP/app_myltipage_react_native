import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import ShowReviewContent from "../../../../../components/showReviewContent/showReviewContent";
import {getFilmByOption} from "../../../../../db/getData";
import KinopoiskCard from "../../../../../components/KinopoiskCard/KinopoiskCard";



function CartoonReviews({navigation}) {
  const [cartoons, setCartoons] = useState([]);

  const options = {
    Order: "RATING",
    Type: "FILM",
    RatingFrom: 0,
    RatingTo: 10,
    YearFrom: 1000,
    YearTo: 2000,
    Page: 1
  }

  useEffect(() => {
    getFilmByOption(options).then(r => {
      const filmsAPI = r.items;
      filmsAPI.map((item) => {
        item.genres.map((genres) => {
          if (genres.genre === "мультфильм") {
            if (genres.genre.length !== cartoons.length) {
              cartoons.push(item.kinopoiskId)
            }
          }
        })
      })
    });
  }, [])




  return (
    <>
      <KinopoiskCard id_array={cartoons} />
      {/*<ShowReviewContent navigation={navigation} reviews={reviews} setReviews={setReviews} imageBackground={""}/>*/}
    </>
  )
}


const cartoonReviewsStyles = StyleSheet.create({

})

export default CartoonReviews;