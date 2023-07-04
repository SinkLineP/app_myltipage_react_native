import React from "react";
import {StyleSheet, View, Text} from "react-native";
import CustomCard from "../../../../../../components/Card/CustomCard";


export default function FriendlyTab({navigation}) {
  const allFriends = 0;
  const requestInFriends = 0;
  const responseInFriends = 0;

  const ButtonFriends = ({title, isBorder, countFriends, transfer}) => {
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
        <Text style={{textAlign: "center"}} onPress={() => {
          navigation.navigate(transfer);
        }}>
          <Text style={{
            textAlign: "center",
            color: "black",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 18,
          }}>{countFriends}</Text>
          <Text style={{
            textAlign: "center",
            color: "black",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 10,
          }}>{title}</Text>
        </Text>
      </View>
    )
  }

  return (
    <View style={stylesFriendlyTab.container}>
      <ButtonFriends title={`\n\nВсе\nдрузья`} countFriends={allFriends} transfer={"AllFriendsPage"}/>
      <ButtonFriends title={`\n\nЗаявки\nв друзья`} countFriends={requestInFriends} transfer={"RequestFriendsPages"} isBorder={true} />
      <ButtonFriends title={`\n\nЗапросы\nв друзья`} countFriends={responseInFriends} transfer={"ResponseFriendsPage"} />
    </View>
  )
}

const stylesFriendlyTab = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around"
  }
})