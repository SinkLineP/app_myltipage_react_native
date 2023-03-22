import React, {useEffect, useState} from "react";
import {FlatList, Text, StyleSheet, TouchableOpacity, View, Button} from "react-native";
import CardCategoriesReviews from "../../../../components/CardCategoriesReviews/CardCategoriesReviews";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../../../../store/Slices/currentUserSlice";


const MainReviews = ({navigation}) => {
  const dispatch = useDispatch();
  const current_user = useSelector(state => state.currentUser);

  return (
    <View>
      <Text>{current_user.name}</Text>

      <Button title={"create user"} onPress={() => dispatch(setCurrentUser({
        id: 1,
        email: "fdsdfsdf@mail.ru",
        password: "11111111",
        token: "csdfsddsfsdf:111111:1",
        phone: "+8(999)-888-77-66",
        name: "Misha",
        surname: "GuestSdsadsurname",
        lastname: "GuestdsadLastname",
        permission: {
          isAdmin: false,
          isManager: false,
          isUser: false,
          isGuest: true
        },
      }))} />
    </View>
  )

  // return (
  //   <FlatList
  //     style={mainReviewsStyles.list}
  //     data={[]}
  //     renderItem={({item}) => <CardCategoriesReviews item={item} navigation={navigation} imageDefault={require("./images/move_default.jpg")} />}
  //   />
  // )


}


const mainReviewsStyles = StyleSheet.create({
  list: {
    marginTop: 20,
    marginBottom: 20
  }
});


export default MainReviews;