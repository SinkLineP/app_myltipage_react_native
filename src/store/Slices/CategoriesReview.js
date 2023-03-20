import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "../States/InitialStateCategories.js";

const categoriesReviewSlice = createSlice({
  name: "categoriesReview",
  initialState,
  reducers: {
    addCategory(state, action) {
      state.categoriesReview.reviewCategories.push({
        title: action.payload.title,
        image_url: action.payload.image_url,
        transfer: action.payload.transfer,
      })
    }
    // ,
    // deleteCategory(state, action) {},
    // toggleCategoryComplete(state, action) {}
  }
})

export const {addCategory} = categoriesReviewSlice.actions;
export default categoriesReviewSlice.reducer;