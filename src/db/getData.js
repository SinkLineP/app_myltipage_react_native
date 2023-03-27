import {DOMAIN_SERVER, HTTP} from "../Variables/ServerConfig";
import {setArrayCategoriesReviews} from "../store/Slices/categoryReviewsSlice";
import {useDispatch} from "react-redux";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

