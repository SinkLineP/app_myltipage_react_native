import React from "react";
import {useSelector} from "react-redux";


export default function useAuth() {
  return useSelector(state => state.users.isAuth);
}