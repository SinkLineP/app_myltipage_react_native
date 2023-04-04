import React from "react";
import {useSelector} from "react-redux";


export default function useAuth() {
  const auth = useSelector(state => state.users);
  return auth.isAuth;
}