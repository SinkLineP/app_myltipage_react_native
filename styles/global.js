import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerNoFlex: {
    padding: 20,
  },
  titleText: {
    fontFamily: "shell-sans-light",
    fontSize: 18,
    color: "#333"
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  }
})