import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet} from "react-native";
import CardCategoriesReviews from "../../../../components/CardCategoriesReviews/CardCategoriesReviews";
import {BASE_URL} from "../../../../Variables/ServerConfig";
import {useDispatch, useSelector} from "react-redux";
import {removeCategoryReviews, setCategoryReviews} from "../../../../store/Slices/categoryReviewsSlice";


const MainReviews = ({navigation}) => {
  const dispatch = useDispatch();
  const categoryReviews = useSelector(state => state.categoryReviews.reviews);

  const res = async () => {
    const response = await fetch(`${BASE_URL}/api/category`);
    if (!response.ok) {
      throw new Error("Server Error!");
    }
    return await response.json();
  }

  useEffect(() => {
    res().then(r => {
        dispatch(removeCategoryReviews())
        r.categories.map(({id, image_url, title, transfer}) => {
          dispatch(setCategoryReviews({
            id: id,
            image_url: image_url,
            title: title,
            transfer: transfer
          }))
        })
    });
  }, [])

  console.log(categoryReviews);

  return (
    <FlatList
      style={mainReviewsStyles.list}
      data={categoryReviews}
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