import {configureStore} from "@reduxjs/toolkit";
import categoryReviewsReducer from "./Slices/categoryReviewsSlice";
import usersReducer from "./Slices/usersSlice";
import settingsAppReducer from "./Slices/settingsAppSlice";
import categoryEstatesReducer from "./Slices/categoryEstatesSlice";

export default configureStore({
  reducer: {
    categoryReviews: categoryReviewsReducer,
    users: usersReducer,
    settingsApp: settingsAppReducer,
    categoryEstates: categoryEstatesReducer,
  }
})