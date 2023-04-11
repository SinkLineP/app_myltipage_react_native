import React from "react";
import {StyleSheet, View, Text} from "react-native";
import CustomCard from "../../../../../components/Card/CustomCard";


export default function FriendlyTab() {
  const allFriends = 0;
  const requestInFriends = 0;
  const responseInFriends = 0;

  const ButtonFriends = ({title, isBorder, countFriends}) => {
    return (
      <View style={{
        borderColor: "#d5d5d5",
        borderRightWidth: isBorder ? 1 : 0,
        borderLeftWidth: isBorder ? 1 : 0,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 15,
        flexDirection: "column",
        gap: -20
      }}>
        <Text style={{
          textAlign: "center",
          color: "white",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: 18,
        }}>{countFriends}</Text>
        <Text style={{
          textAlign: "center",
          color: "white",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: 10,
        }}>{title}</Text>
      </View>
    )
  }

  return (
    <CustomCard>
      <View style={stylesFriendlyTab.container}>
        <ButtonFriends title={`\n\nВсе\nдрузья`} countFriends={allFriends}/>
        <ButtonFriends title={`\n\nЗаявки\nв друзья`} countFriends={requestInFriends} isBorder={true} />
        <ButtonFriends title={`\n\nЗапросы\nв друзья`} countFriends={responseInFriends} />
      </View>
    </CustomCard>
  )
}

const stylesFriendlyTab = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
})