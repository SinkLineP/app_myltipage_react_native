import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, ScrollView, Dimensions} from "react-native";
import {useSelector} from "react-redux";
import ImageViewer from "../../../../../components/ImageViewer/ImageViewer";
import {StatusBar} from "expo-status-bar";
import MessageWarning from "../components/MessageWarning";



export default function ShowProfile({navigation, user}) {
  const currentUser = useSelector(state => state.users.currentUser);

  const WidgetInput = ({counts, title}) => {
    return (
      <View style={stylesShowProfile.widgetInput}>
        <Text style={stylesShowProfile.countTitle}>{counts}</Text>
        <Text style={stylesShowProfile.contentTitle}>{title}</Text>
      </View>
    )
  }

  return (
    <>
      <View style={stylesShowProfile.container}>
        {currentUser.is_confirmed_email === "false" || currentUser.is_confirmed_phone || currentUser.is_default_password ? (<MessageWarning navigation={navigation} currentUser={user} />) : ("")}
        <View style={stylesShowProfile.containerHeader}>
          <View style={stylesShowProfile.header}>
            <View>
              <ImageViewer styles={stylesShowProfile.cardImage} selectedImage={user.avatar} />
            </View>
            <View style={stylesShowProfile.containerAboutUser}>
              <Text style={stylesShowProfile.names}>{user.username}</Text>
              <Text style={stylesShowProfile.country}>country</Text>
              <View style={stylesShowProfile.containerFollowAndMessage}>
                <Text style={stylesShowProfile.followButton}>Подписаться</Text>
              </View>
            </View>
            <View style={stylesShowProfile.containerAboutUser}>
              <Text onPress={() => {
                navigation.push(
                  "EditProfile"
                )
              }} style={stylesShowProfile.settings}>⋮</Text>
            </View>
          </View>
          <View style={stylesShowProfile.widgetFriendsAndFeeds}>
            <WidgetInput counts={0} title={"Постов"} />
            <WidgetInput counts={0} title={"Подписчиков"} />
            <WidgetInput counts={0} title={"Подписок"} />
          </View>
        </View>
        <View style={stylesShowProfile.description}>
          <ScrollView>
            <Text>Description</Text>
            <Text>Mail: {user.mail === "" ? (<Text>Почта не указана</Text>) : (<Text>{user.mail}</Text>)}</Text>
            <Text>Статус подтверждения почты: {user.is_confirmed_email === "true" ? (<Text>Подтверждено</Text>) : (<Text>Не подтверждено</Text>)}</Text>
            <Text>Телефон: {user.phone === "" ? (<Text>Телефон не указан</Text>) : (<Text>{user.phone}</Text>)}</Text>
            <Text>Статус подтверждения телефона: {user.is_confirmed_phone === "true" ? (<Text>Подтверждено</Text>) : (<Text>Не подтверждено</Text>)}</Text>
          </ScrollView>
        </View>
        <View style={stylesShowProfile.feeds}>
          <Text>Feeds</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  )
}

const stylesShowProfile = StyleSheet.create({
  whiteSpace: {
    flexDirection: "column",
    gap: 10
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
  },
  containerImage: {

  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerAboutUser: {
    marginTop: 20,
    paddingLeft: 10,
    width: "50%"
  },
  names: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14
  },
  settings: {
    marginTop: 1,
    width: 25,
    height: 25,
    textAlign: "center",
    lineHeight: 31,
    fontWeight: "bold",
    fontSize: 24,
    marginRight: 15
  },
  container: {
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  widgetFriendsAndFeeds: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 10
  },
  widgetInput: {
  },
  countTitle: {
    textAlign: "center",
    fontWeight: "bold"
  },
  contentTitle: {
    textAlign: "center",
    fontWeight: "bold"
  },
  description: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    height: 150,
    maxHeight: 150,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  containerHeader: {
    backgroundColor: "#fff",
    borderRadius: 10
  },
  followButton: {
    borderWidth: 2,
    borderColor: "#1674bd",
    color: "#1674bd",
    padding: 5,
    marginTop: 5,
    borderRadius: 5,
    textAlign: "center",
    fontWeight: "bold"
  },
  containerFollowAndMessage: {
    flexDirection: "row",
  },
  country: {
    color: "#4a4848",
    fontStyle: "italic",
    fontWeight: "bold"
  },
  feeds: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    height: Dimensions.get('window').height / 2.4 ,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  }
})