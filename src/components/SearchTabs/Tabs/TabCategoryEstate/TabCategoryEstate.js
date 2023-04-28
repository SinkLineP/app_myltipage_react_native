import React, {useEffect, useRef, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PortalProvider} from "@gorhom/portal";
import {BottomModalWindow} from "../../../BottomModalWindow/BottomModalWindow";


const ShowSelectedCheckBoxEstates = ({estate}) => {
  console.log(estate);

  if (estate.length !== 0) {
    return (
      <View>
        <Text>{estate.title}</Text>
      </View>
    )
  } else {
    return (
      <Text style={stylesTabCategoryEstate.showSelectedCategory}>Подкатегории не выбраны!</Text>
    )
  }
}

export const TabCategoryEstate = ({mainCategory, setActiveTab, activeTab}) => {
  const modalRef = useRef(null);
  const [currentItem, setCurrentItem] = useState({});

  if (mainCategory !== []) {
    return (
      <>
        <View style={stylesTabCategoryEstate.categoryContainer}>
          <View style={stylesTabCategoryEstate.categoryContent}>
            {
              mainCategory.map((item) => {
                return (
                  <TouchableOpacity key={item.category_id} style={activeTab === item.category_id ? stylesTabCategoryEstate.activeTab : stylesTabCategoryEstate.categoryTab} onPress={() => {
                    setCurrentItem(item);
                    setActiveTab(item.category_id)
                    modalRef.current?.open()
                  }}>
                    <View>
                      <Text style={stylesTabCategoryEstate.categoryIcon}>Icon</Text>
                      <Text style={activeTab === item.category_id  ? stylesTabCategoryEstate.active : stylesTabCategoryEstate.categoryTitle}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </View>
          {/*<View style={stylesTabCategoryEstate.containerSelectedCheckBox}>*/}
          {/*  <ShowSelectedCheckBoxEstates estate={setEstate} />*/}
          {/*</View>*/}
        </View>

        <PortalProvider>
          <BottomModalWindow currentItem={currentItem} modalRef={modalRef} onClose={() => {modalRef.current?.close()}} />
        </PortalProvider>
      </>
    )
  }
}

const stylesTabCategoryEstate = StyleSheet.create({
  categoryTab: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#f4f4f4",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    height: 90,
    paddingTop: 20
  },
  activeTab: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#f4f4f4",
    borderRadius: 10,
    height: 90,
    paddingTop: 20,
    backgroundColor: "tomato"
  },
  active: {
    textAlign: "center",
    fontSize: 12,
    paddingTop: 10,
    color: "#ffffff",
    fontWeight: "bold"
  },
  categoryTitle: {
    textAlign: "center",
    fontSize: 12,
    paddingTop: 10,
    color: "#323232",
    fontWeight: "bold"
  },
  categoryIcon: {
    textAlign: "center"
  },
  categoryContent: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,

  },
  containerModal: {
    flex: 1,
    backgroundColor: "#C9D6DF",
    alignItems: "center",
    justifyContent: "center",
  },
  showSelectedCategory: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 12,
    textAlign: "center",
    fontWeight: "bold",
    color: "#323232"
  },
  categoryContainer: {
    backgroundColor: "#fff"
  },
  containerSelectedCheckBox: {
    borderTopWidth: 1,
    borderColor: "#f2f2f2"
  }
})