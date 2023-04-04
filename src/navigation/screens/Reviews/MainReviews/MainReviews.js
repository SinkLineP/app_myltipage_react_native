import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet} from "react-native";
import CardCategoriesReviews from "../../../../components/CardCategoriesReviews/CardCategoriesReviews";
import {useDispatch, useSelector} from "react-redux";
import {removeCategoryReviews, setCategoryReviews} from "../../../../store/Slices/categoryReviewsSlice";
import {StatusBar} from "expo-status-bar";
import {getCategoriesReviews, getUsers} from "../../../../db/getData";
import {removeUsers, setUsers} from "../../../../store/Slices/usersSlice";


const MainReviews = ({navigation}) => {
  const dispatch = useDispatch();
  const categoryReviews = useSelector(state => state.categoryReviews.reviews);


  useEffect(() => {
    getCategoriesReviews().then(r => {
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


  return (
    <>
      <FlatList
        style={mainReviewsStyles.list}
        data={categoryReviews}
        renderItem={({item}) => <CardCategoriesReviews item={item} navigation={navigation} imageDefault={require("./images/move_default.jpg")} />}
      />

      <StatusBar style="auto" />
    </>
  )


}


const mainReviewsStyles = StyleSheet.create({
  list: {
    marginTop: 20,
    marginBottom: 20
  }
});


export default MainReviews;