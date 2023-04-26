import React, {useRef, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PortalProvider} from "@gorhom/portal";
import {BottomModalWindow} from "../../../BottomModalWindow/BottomModalWindow";


export const TabCategoryEstate = ({categories, styles}) => {
  const [activeTab, setActiveTab] = useState("");
  const modalRef = useRef(null);
  const [currentItem, setCurrentItem] = useState({});
  const items = [];



  return (
    <>
      <View style={stylesTabCategoryEstate.categoryContent}>
        {
          categories.map((item) => {
            if (item.parent_id === null) {
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
            } else {
              if (activeTab === item.parent_id && item.slug !== "kottedj") {
                items.push(item);
              }
            }
          })
        }
      </View>

      <PortalProvider>
        <BottomModalWindow modalRef={modalRef} currentItem={currentItem} items={items} onClose={() => {modalRef.current?.close()}} />
      </PortalProvider>
    </>
  )
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
  }
})