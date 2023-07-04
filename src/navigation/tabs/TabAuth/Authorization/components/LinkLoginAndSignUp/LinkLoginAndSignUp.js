import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default function LinkLoginAndSignUp({navigation, titleLink, linkPhone, linkEmail}) {
  return (
    <View>
      <Text style={stylesLinkLoginAndSignUp.textLink}>
        <Text style={stylesLinkLoginAndSignUp.link} onPress={() => navigation.navigate(linkPhone)}>{titleLink}</Text> с помощью телефона.
        <Text>{'\n'}или же{'\n'}</Text>
        <Text style={stylesLinkLoginAndSignUp.link} onPress={() => navigation.navigate(linkEmail)}>{titleLink}</Text> с помощью почты.
      </Text>
    </View>
  )
}

const stylesLinkLoginAndSignUp = StyleSheet.create({
  textLink: {
    color: "#424242",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold"
  },
  link: {
    color: "#048f9d",
  },
})