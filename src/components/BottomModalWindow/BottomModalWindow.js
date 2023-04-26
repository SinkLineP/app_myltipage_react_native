import React from "react";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";
import { Dimensions, View, StyleSheet, Text, Button } from "react-native";


const modalHeight = Dimensions.get("screen").height * 0.40;
export const BottomModalWindow = ({modalRef, onClose, categoriesArray}) => {
  return (
    <Portal>
      <Modalize ref={modalRef} adjustToContentHeight={true}>
        <View style={stylesBottomModalWindow.content}>
          <View style={stylesBottomModalWindow.modalTitle}>
            <Text style={stylesBottomModalWindow.cancel} onPress={onClose}>отмена</Text>
            <Text style={stylesBottomModalWindow.titleTypeEstate}>название категории</Text>
            <Text style={stylesBottomModalWindow.ready}>готово</Text>
          </View>
        </View>
      </Modalize>
    </Portal>
  );
}

const stylesBottomModalWindow = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
    height: modalHeight,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  text: {
    fontSize: 48,
    fontWeight: "600",
    letterSpacing: 48 * 0.02,
    alignSelf: "center",
    color: "#C9D6DF",
  },
  modalTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    verticalAlign: "bottom",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingBottom: 7
  },
  cancel: {
    color: "#c74242",
    fontSize: 16
  },
  ready: {
    color: "#1e9dff",
    fontSize: 16
  },
  titleTypeEstate: {
    color: "#323232",
    fontWeight: "bold",
    fontSize: 16
  }
})