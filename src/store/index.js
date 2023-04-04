import {configureStore} from "@reduxjs/toolkit";
import categoryReviewsReducer from "./Slices/categoryReviewsSlice";
import usersReducer from "./Slices/usersSlice";

export default configureStore({
  reducer: {
    categoryReviews: categoryReviewsReducer,
    users: usersReducer,
  }
})