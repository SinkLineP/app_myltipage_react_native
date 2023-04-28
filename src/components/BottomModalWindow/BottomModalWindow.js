import React, {useEffect, useState} from "react";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";
import { Dimensions, View, StyleSheet, Text, Button } from "react-native";
import {CheckBoxEstate} from "../SearchTabs/CheckBox/CheckBoxEstate";


const modalHeight = Dimensions.get("screen").height * 0.20;
export const BottomModalWindow = ({modalRef, currentItem}) => {



  if (currentItem.length !== 0) {
    return (
      <Portal>
        <Modalize ref={modalRef} adjustToContentHeight={true}>
          <View style={stylesBottomModalWindow.content}>
            <View style={stylesBottomModalWindow.modalTitle}>
              <Text style={stylesBottomModalWindow.cancel} onPress={() => {
                modalRef.current?.close()
              }}>отмена</Text>
              <Text style={stylesBottomModalWindow.titleTypeEstate}>{currentItem.title}</Text>
              <Text style={stylesBottomModalWindow.ready} onPress={() => {
                modalRef.current?.close()
              }}>готово</Text>
            </View>

            {/*<View style={stylesBottomModalWindow.containerCheckBox}>*/}
            {/*  {items.map((item) => (*/}
            {/*    <View style={stylesBottomModalWindow.contentCheckBox} key={item.category_id}>*/}
            {/*      <CheckBoxEstate item={item} setEstate={setEstate} />*/}
            {/*    </View>*/}
            {/*  ))}*/}
            {/*</View>*/}
          </View>
        </Modalize>
      </Portal>
    )
  }
}

const stylesBottomModalWindow = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
    minHeight: modalHeight,
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
    // verticalAlign: "bottom",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingBottom: 15
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
  },
  containerCheckBox: {
    paddingVertical: 10,
    gap: 10
  },
  contentCheckBox: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  }
})