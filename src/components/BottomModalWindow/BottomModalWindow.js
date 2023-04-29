import React, {useEffect, useState} from "react";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";
import {Dimensions, View, StyleSheet, Text} from "react-native";
import {CheckBoxEstate} from "../SearchTabs/CheckBox/CheckBoxEstate";
import {useDispatch, useSelector} from "react-redux";
import { Switch } from 'react-native-switch';
import {setDefaultActiveForHomeCategory} from "../../store/Slices/categoryEstatesSlice";


const modalHeight = Dimensions.get("screen").height * 0.20;

const IsСottageVillage = ({currentItem, isCottage}) => {
  const allCategories = useSelector(state => state.categoryEstates.allCategories);
  const activeTab = useSelector(state => state.categoryEstates.activeTab);


  if (isCottage === true && currentItem.category_id === 1) {
    return allCategories.filter(element => element.parent_id === activeTab && element.slug === "kottedj").map((item) => (
      <View style={stylesBottomModalWindow.contentCheckBox} key={item.category_id}>
        <CheckBoxEstate item={item} />
      </View>
    ))
  } else if (isCottage === false && currentItem.category_id === 1) {
    return allCategories.filter(element => element.parent_id === activeTab && element.slug !== "kottedj").map((item) => (
      <View style={stylesBottomModalWindow.contentCheckBox} key={item.category_id}>
        <CheckBoxEstate item={item} />
      </View>
    ))
  } else {
    return allCategories.filter(element => element.parent_id === activeTab).map((item) => (
      <View style={stylesBottomModalWindow.contentCheckBox} key={item.category_id}>
        <CheckBoxEstate item={item} />
      </View>
    ))
  }
}

export const BottomModalWindow = ({currentItem, modalRef}) => {
  const [isCottage, setIsCottage] = useState(false);
  const dispatch = useDispatch();


  if (currentItem.length !== 0) {
    return (
      <Portal>
        <Modalize ref={modalRef} adjustToContentHeight={true}>
          <View style={stylesBottomModalWindow.content}>
            <View style={stylesBottomModalWindow.modalTitle}>
              <Text style={stylesBottomModalWindow.titleTypeEstate}>{currentItem.title}</Text>
            </View>

            {currentItem.category_id === 1 ? (
              <View style={stylesBottomModalWindow.cottageSwitchContainer}>
                <Text style={stylesBottomModalWindow.cottageSwitchLabel}>Коттеджный посёлок</Text>
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

            <View style={stylesBottomModalWindow.containerCheckBox}>
              <IsСottageVillage
                currentItem={currentItem}
                isCottage={isCottage}
              />
            </View>
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
    fontSize: 16,
    textAlign: "center",
    width: "100%"
  },
  containerCheckBox: {
    paddingVertical: 10,
    gap: 10
  },
  contentCheckBox: {
    // flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "lightgray",
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
    // marginTop: 8
  }
})