import React from "react";
import {View, FlatList} from "react-native";
import {StatusBar} from "expo-status-bar";
import Card from "../../components/Card/Card";
import NotFound from "../NotFound/NotFound";

const ShowReviewContent = ({ navigation, reviews}) => {
  return (
    <View>
      <View>
        {reviews.length === 0 ? (<NotFound />) : (
          <FlatList
            data={reviews}
            renderItem={({ item }) => <Card item={item} navigation={navigation}/>}
          />
        )}
        <StatusBar style="auto" />
      </View>
    </View>
  )
};

export default ShowReviewContent;