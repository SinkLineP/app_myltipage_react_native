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
    },
    editCategory(state, action) {
      const editCategory = state.allCategories.find(item => item.id === action.payload.id);

      editCategory.title = action.payload.title;
      editCategory.id = action.payload.id;
      editCategory.category_id = action.payload.category_id;
      editCategory.parent_id = action.payload.parent_id;
      editCategory.title = action.payload.title;
      editCategory.slug = action.payload.slug;
      editCategory.created_at = action.payload.created_at;
      editCategory.updated_at = action.payload.updated_at;
      editCategory.isActive = action.payload.isActive;
    },
    setDefaultActiveForHomeCategory(state, action) {
      state.allCategories.filter(category => category.isActive === true && category.parent_id === 1).map(item => {
        return item.isActive = false;
      });
    }
  }
})

export const {
  setCategoryEstates,
  setMainCategoryEstates,
  setUnderCategoryEstates,
  setActiveTab,
  editCategory,
  setDefaultActiveForHomeCategory
} = categoryEstatesSlice.actions;
export default categoryEstatesSlice.reducer;