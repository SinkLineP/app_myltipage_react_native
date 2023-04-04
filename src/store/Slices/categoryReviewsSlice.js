import {initialState} from "../States/InitialStateCategoryReviews";
import {createSlice} from "@reduxjs/toolkit";

const categoryReviewsSlice = createSlice({
  name: "categoryReviews",
  initialState,
  reducers: {
    setCategoryReviews(state, action) {
      state.reviews.push({
        id: action.payload.id,
        title: action.payload.title,
        image_url: action.payload.image_url,
        transfer: action.payload.transfer,
      })
    },
    removeCategoryReviews(state) {
      state.reviews = []
    },
    setArrayCategoriesReviews(state, action) {
      state.reviews = action.payload
    }
  }
})

export const {setCategoryReviews, removeCategoryReviews, setArrayCategoriesReviews} = categoryReviewsSlice.actions;
export default categoryReviewsSlice.reducer;