import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {editCategory} from "../../../../../store/Slices/categoryEstatesSlice";
import {ShowSelectedCategories} from "./ShowSelectedCategories";


export const UpdatedShowSelectedCategories = ({allCategories, dispatch}) => {
  const filteredCategory = allCategories.filter(category => category.isActive === true);

  if (filteredCategory.length > 0) {
    return (
      <>
        <View style={stylesUpdatedShowSelectedCategories.buttonClearCategories}>
          <Text style={stylesUpdatedShowSelectedCategories.buttonClearCategoriesTitle} onPress={() => {
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

const stylesUpdatedShowSelectedCategories = StyleSheet.create({
  buttonClearCategories: {
    width: "100%",
    borderColor: "#f2f2f2",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  buttonClearCategoriesTitle: {
    textAlign: "right",
    fontWeight: "bold",
    color: "#c74242",
    fontSize: 16,
    textTransform: "uppercase",
  }
})