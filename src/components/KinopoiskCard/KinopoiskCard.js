import React, {useEffect, useState} from "react";
import {FlatList, View, Text} from "react-native";
import {getFilmByID} from "../../db/getData";


function KinopoiskCard({id_array}) {
  const cartoon = []

  useEffect(() => {
    id_array.map((id) => {
      getFilmByID(id).then(r => {
        cartoon.push(r)
      });
    })
  }, [id_array])


  return (
    <View>
      <FlatList
        data={cartoon}
        renderItem={({item}) => <Text>{item.nameRu}</Text>}
      />
    </View>
  )
}

export default KinopoiskCard;