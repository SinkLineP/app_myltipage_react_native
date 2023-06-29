import React from "react";
import CategoriesContent from "../../../navigation/screens/Search/components/CategoriesContent/CategoriesContent";


export default function ModalCategories({ currentItem }) {
  if (currentItem.length !== 0) {
    return <CategoriesContent currentItem={currentItem} />;
  }
}