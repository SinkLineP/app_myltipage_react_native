import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../store/Slices/usersSlice";


export default function useAuth(boolean) {
  const auth = useSelector(state => state.users);

  if (boolean !== undefined) {
    const dispatch = useDispatch();
    dispatch(setAuth(boolean))
  }

  return auth.isAuth;
}