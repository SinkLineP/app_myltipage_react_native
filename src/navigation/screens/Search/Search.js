import React, {useEffect, useRef, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Button, Dimensions} from "react-native";
import { Entypo } from '@expo/vector-icons';
import CustomSwitch from "../../../components/CustomSwitch/CustomSwitch";
import {getCategoriesSearchEstate} from "../../../db/getData";
import {BottomModalWindow} from "../../../components/BottomModalWindow/BottomModalWindow";
import {PortalProvider} from "@gorhom/portal";


const TabWithIcon = ({title, iconName, iconSize, iconColor}) => {
  return (
    <View style={stylesSearch.tab}>
      <Entypo style={stylesSearch.tabIcon} name={iconName} size={iconSize} color={iconColor} />
      <Text style={stylesSearch.tabTitle}>{title}</Text>
    </View>
  )
}

const TabSwitch = ({setSelectedSwitch, option1, option2, selectedColor}) => {
  return (
    <View style={stylesSearch.tab}>
      <View style={stylesSearch.placeholderForSwitch}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={option1}
          option2={option2}
          onSelectSwitch={setSelectedSwitch}
          selectionColor={selectedColor}
        />
      </View>
    </View>
  )
}

const TabCategoryEstate = ({categories, styles, modalRef}) => {
  const [activeTab, setActiveTab] = useState("");


  return (
    <View style={styles.categoryContent}>
      {
        categories.map((item) => {
          if (item.parent_id === null) {
            return (
              <TouchableOpacity key={item.id} style={activeTab === item.id ? [styles.categoryTab, styles.activeTab] : stylesSearch.categoryTab} onPress={() => {
                setActiveTab(item.id)
                modalRef.current?.open()
              }}>
                <View>
                  <Text style={styles.categoryIcon}>Icon</Text>
                  <Text style={activeTab === item.id ? styles.active : styles.categoryTitle}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )
          }
        })
      }
    </View>
  )
}

export default function Search() {
  const [selectedSwitch, setSelectedSwitch] = useState("");
  const [categories, setCategories] = useState([]);
  const modalRef = useRef(null);


  useEffect(() => {
    getCategoriesSearchEstate().then(r => setCategories(r.categories));
  }, [])

  const onOpen = () => {
    modalRef.current?.open();
  };

  const onClose = () => {
    modalRef.current?.close();
  };


  return (
    <View style={stylesSearch.container}>
      <TabWithIcon title={"location"} iconColor={"tomato"} iconName={"location"} iconSize={24} />
      <TabSwitch option1={"Купить"} option2={"Снять"} setSelectedSwitch={setSelectedSwitch} selectedColor={"tomato"} />
      <TabCategoryEstate categories={categories} styles={stylesSearch} modalRef={modalRef} />

      <PortalProvider>
        <BottomModalWindow modalRef={modalRef} onClose={onClose} />
      </PortalProvider>
    </View>
  )
}

const stylesSearch = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    height: "100%"
  },
  tab: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5
  },
  tabTitle: {
    width: "80%",
    verticalAlign: "middle",
    fontWeight: "bold",
    fontSize: 18,
    color: "#323232"
  },
  tabIcon: {
    width: "20%",
    textAlign: "center"
  },
  placeholderForSwitch: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 2,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 20,
  },
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