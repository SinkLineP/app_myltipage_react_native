import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ContactsPage = () => {
  return (
    <View style={stylesContacts.center}>
      <Text>This is the contact screen</Text>
    </View>
  );
};

const stylesContacts = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default ContactsPage;