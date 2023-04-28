import {initialState} from "../States/InitialStateCategoryEstates";
import {createSlice} from "@reduxjs/toolkit";

const categoryEstatesSlice = createSlice({
  name: "categoryEstates",
  initialState,
  reducers: {
    setCategoryEstates(state, action) {
      state.allCategories.push({
        id: action.payload.id,
        category_id: action.payload.category_id,
        parent_id: action.payload.parent_id,
        title: action.payload.title,
        slug: action.payload.slug,
        created_at: action.payload.created_at,
        updated_at: action.payload.updated_at,
        isActive: action.payload.isActive
      })
    },
    setMainCategoryEstates(state, action) {
      state.mainCategories = action.payload
    },
    setUnderCategoryEstates(state, action) {
      state.underCategories = action.payload
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload
    }
  }
})

export const {setCategoryEstates, setMainCategoryEstates, setUnderCategoryEstates, setActiveTab} = categoryEstatesSlice.actions;
export default categoryEstatesSlice.reducer;