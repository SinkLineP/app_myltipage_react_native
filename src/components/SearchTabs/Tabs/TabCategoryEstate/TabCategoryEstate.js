import React, {useEffect, useRef, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PortalProvider} from "@gorhom/portal";
import {BottomModalWindow} from "../../../BottomModalWindow/BottomModalWindow";
import {getCategoriesSearchEstate, getUnderCategoriesSearchEstate} from "../../../../db/getData";
import {useDispatch, useSelector} from "react-redux";
import {
  setActiveTab,
  setMainCategoryEstates,
  setUnderCategoryEstates
} from "../../../../store/Slices/categoryEstatesSlice";


const saveUnderCategoryFromDBToStore = (dispatch, activeTab) => {
  getUnderCategoriesSearchEstate(activeTab).then(r => {
    dispatch(setUnderCategoryEstates(r.under_categories))
  });
}

export const TabCategoryEstate = () => {
  const modalRef = useRef(null);
  const [currentItem, setCurrentItem] = useState({});
  const activeTab = useSelector(state => state.categoryEstates.activeTab);
  const mainCategory = useSelector(state => state.categoryEstates.mainCategories);
  const allCategories = useSelector(state => state.categoryEstates.allCategories);
  const dispatch = useDispatch();

  console.log(allCategories);

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
                    dispatch(setActiveTab(item.category_id));
                    modalRef.current?.open();
                    saveUnderCategoryFromDBToStore(dispatch, activeTab);
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
          <View style={stylesTabCategoryEstate.containerSelectedCheckBox}>

          </View>
        </View>

        <PortalProvider>
          <BottomModalWindow currentItem={currentItem} modalRef={modalRef} />
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