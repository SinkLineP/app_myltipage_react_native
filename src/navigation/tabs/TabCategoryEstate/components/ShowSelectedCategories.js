import React from "react";
import {useDispatch} from "react-redux";
import {Text, TouchableWithoutFeedback, View, StyleSheet} from "react-native";
import {editCategory} from "../../../../store/Slices/categoryEstatesSlice";
import {Feather} from "@expo/vector-icons";


export const ShowSelectedCategories = ({allCategories}) => {
  const dispatch = useDispatch();


  if (allCategories.filter(category => category.isActive === true).length > 0) {
    return allCategories.map((category) => {
      if (category.isActive === true) {
        return (
          <Text key={category.id}>
            <View style={{paddingHorizontal: 1.5, paddingVertical:1.5}}>
              <View style={{flexDirection: "row", width: "auto", backgroundColor: "#f2f2f2", borderRadius: 50, paddingHorizontal: 10, paddingVertical:3, borderColor: "#bcbcbc", borderWidth: 0.5}}>
                <View>
                  <Text style={stylesShowSelectedCategories.checkedEstatesTitle}>{category.title}</Text>
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
                }} style={stylesShowSelectedCategories.checkedEstatesDeleteIcon}>
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
      <Text style={stylesShowSelectedCategories.categoriesEstateNotSelected}>Подкатегории не выбраны.</Text>
    )
  }
}

const stylesShowSelectedCategories = StyleSheet.create({
  categoriesEstateNotSelected: {
    color: "#323232",
    fontWeight: "bold",
    paddingLeft: 75
  },
  checkedEstatesDeleteIcon: {
    marginTop: 2
  },
  checkedEstatesTitle: {
    paddingRight: 6
  },
})