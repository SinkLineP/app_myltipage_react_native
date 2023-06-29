import {configureStore} from "@reduxjs/toolkit";
import categoryReviewsReducer from "./Slices/categoryReviewsSlice";
import usersReducer from "./Slices/usersSlice";
import settingsAppReducer from "./Slices/settingsAppSlice";
import categoryEstatesReducer from "./Slices/categoryEstatesSlice";
import searchMapReducer from "./Slices/searchMapSlice";
import searchAddressReducer from "./Slices/searchAddressSlice";
import estatesReducer from "./Slices/estatesSlice";

export default configureStore({
  reducer: {
    categoryReviews: categoryReviewsReducer,
    users: usersReducer,
    settingsApp: settingsAppReducer,
    categoryEstates: categoryEstatesReducer,
    searchMap: searchMapReducer,
    searchAddress: searchAddressReducer,
    estates: estatesReducer
  }
})