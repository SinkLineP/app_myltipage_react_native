import React, {useState} from "react";
import {Dimensions, StyleSheet, View, Text} from "react-native";
import {useDispatch} from "react-redux";
import {setDefaultActiveForHomeCategory} from "../../../../../store/Slices/categoryEstatesSlice";
import {IsСottageVillage} from "../IsCottageVillage/IsCottageVillage";
import { Switch } from 'react-native-switch';


const modalHeight = Dimensions.get("screen").height * 0.20;


export default function CategoriesContent({currentItem}) {
  const [isCottage, setIsCottage] = useState(false);
  const dispatch = useDispatch();


  return (
    <View style={stylesCategoriesContent.content}>
      <View style={stylesCategoriesContent.modalTitle}>
        <Text style={stylesCategoriesContent.titleTypeEstate}>{currentItem.title}</Text>
      </View>

      {currentItem.category_id === 1 ? (
        <View style={stylesCategoriesContent.cottageSwitchContainer}>
          <Text style={stylesCategoriesContent.cottageSwitchLabel}>Коттеджный посёлок</Text>
          <Switch
            value={isCottage}
            onValueChange={() => {
              if (isCottage === true) {
                dispatch(setDefaultActiveForHomeCategory(isCottage))
              } else {
                dispatch(setDefaultActiveForHomeCategory(isCottage))
              }

              setIsCottage(!isCottage)
            }}
            disabled={false}
            renderActiveText={false}
            renderInActiveText={false} barHeight={20} circleSize={20}
          />
        </View>
      ) : ("")}

      <View style={stylesCategoriesContent.containerCheckBox}>
        <IsСottageVillage
          currentItem={currentItem}
          isCottage={isCottage}
        />
      </View>
    </View>
  )
}

const stylesCategoriesContent = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
    minHeight: modalHeight,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  modalTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingBottom: 15
  },
  titleTypeEstate: {
    color: "#323232",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    width: "100%"
  },
  containerCheckBox: {
    paddingVertical: 10,
    gap: 10
  },
  cottageSwitchContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderBottomWidth: 0.5,
    borderColor: "#bcbcbc",
    justifyContent: "space-between"
  },
  cottageSwitchLabel: {
    fontSize: 14,
  }
})