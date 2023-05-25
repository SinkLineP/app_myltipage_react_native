import React, {useState} from "react";
import {Text, View, Image} from "react-native";


export default function RenderItem({ item, width, index }) {
  const [widthItem, setWidthItem] = useState(0);

  return (
    <View
      key={item.id}
      style={{
        width: width,
      }}
    >
      <View
        onLayout={(event) => {setWidthItem(event.nativeEvent.layout.width)}}
        style={{
          paddingHorizontal: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "white",
          padding: 15,
          borderRadius: 10,
          borderColor: "#d2d2d2",
          borderWidth: 1,
          alignItems: "center",
          width: width - 10
        }}
        key={index}>
        {
          item.images.map((img, index) => {
            return (
              <Image key={index} source={{uri: img}} resizeMode={"contain"} style={{width: widthItem - 10, height: 150}} />
            )
          })
        }
        <Text>Адресс: {item.address}</Text>
        <Text>Тип строения: {item.type}</Text>
        <Text>Цена: {item.price}</Text>
      </View>
    </View>
  )
}