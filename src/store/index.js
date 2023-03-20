import {configureStore} from "@reduxjs/toolkit";
import categoryReviewReducer from "./Slices/CategoriesReview";

export default configureStore({
  reducer: {
    categoriesReview: categoryReviewReducer,
  }
})