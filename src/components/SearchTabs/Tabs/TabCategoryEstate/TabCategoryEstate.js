import React, {useRef, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {PortalProvider} from "@gorhom/portal";
import {BottomModalWindow} from "../../../BottomModalWindow/BottomModalWindow";
import {useDispatch, useSelector} from "react-redux";
import {
  editCategory,
  setActiveTab,
} from "../../../../store/Slices/categoryEstatesSlice";
import {Feather} from "@expo/vector-icons";
import {all} from "axios";


const ShowSelectedCategories = ({allCategories}) => {
  const dispatch = useDispatch();


  if (allCategories.filter(category => category.isActive === true).length > 0) {
    return allCategories.map((category) => {
      if (category.isActive === true) {
        return (
          <Text key={category.id}>
            <View style={{paddingHorizontal: 1.5, paddingVertical:1.5}}>
             <View style={{flexDirection: "row", width: "auto", backgroundColor: "#f2f2f2", borderRadius: 50, paddingHorizontal: 10, paddingVertical:3, borderColor: "#bcbcbc", borderWidth: 0.5}}>
               <View>
                 <Text style={stylesTabCategoryEstate.checkedEstatesTitle}>{category.title}</Text>
               </View>
               <TouchableWithoutFeedback onPress={() => {
                 dispatch(editCategory({
                   id: category.id,
                   category_id: category.category_id,
                   parent_id: category.parent_id,
                   title: category.title,
                   slug: category.slug,
                   created_at: category.created_at,
                   updated_at: category.updated_at,
                   isActive: false
                 }))
               }} style={stylesTabCategoryEstate.checkedEstatesDeleteIcon}>
                 <Feather name="delete" size={22} color="#c74242" />
               </TouchableWithoutFeedback>
             </View>
            </View>
          </Text>
        )
      }
    })
  } else {
    return (
      <Text style={stylesTabCategoryEstate.categoriesEstateNotSelected}>Подкатегории не выбраны.</Text>
    )
  }
}

const UpdatedShowSelectedCategories = ({allCategories, dispatch}) => {
  const filteredCategory = allCategories.filter(category => category.isActive === true);

  if (filteredCategory.length > 0) {
    return (
      <>
        <View style={stylesTabCategoryEstate.buttonClearCategories}>
          <Text style={stylesTabCategoryEstate.buttonClearCategoriesTitle} onPress={() => {
            filteredCategory.map(category => {
              dispatch(editCategory({
                id: category.id,
                category_id: category.category_id,
                parent_id: category.parent_id,
                title: category.title,
                slug: category.slug,
                created_at: category.created_at,
                updated_at: category.updated_at,
                isActive: false
              }))
            })
          }}>Очистить</Text>
        </View>
        <ShowSelectedCategories allCategories={allCategories} />
      </>
    )
  } else {
    return (
      <ShowSelectedCategories allCategories={allCategories} />
    )
  }
}

export const TabCategoryEstate = ({modalRef, setCurrentItem}) => {
  const activeTab = useSelector(state => state.categoryEstates.activeTab);
  const mainCategory = useSelector(state => state.categoryEstates.mainCategories);
  const allCategories = useSelector(state => state.categoryEstates.allCategories);
  const dispatch = useDispatch();

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
            <UpdatedShowSelectedCategories dispatch={dispatch} allCategories={allCategories} />
          </View>
        </View>
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
    backgroundColor: "#fff",
    marginTop: 6
  },
  containerSelectedCheckBox: {
    borderTopWidth: 1,
    borderColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 12,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  checkedEstatesContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
    // paddingHorizontal: 10,
    // paddingVertical: 6,
    marginRight: 5,
    marginVertical: 3,
    flexDirection: "row"
  },
  checkedEstatesTitle: {
    paddingRight: 6
  },
  checkedEstatesDeleteIcon: {
    marginTop: 2
  },
  categoriesEstateNotSelected: {
    color: "#323232",
    fontWeight: "bold",
    paddingLeft: 75
  },
  buttonClearCategories: {
    width: "100%",
    borderColor: "#f2f2f2",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  buttonClearCategoriesTitle: {
    textAlign: "right",
    fontWeight: "bold",
    color: "#c74242",
    fontSize: 16,
    textTransform: "uppercase"
  }
})