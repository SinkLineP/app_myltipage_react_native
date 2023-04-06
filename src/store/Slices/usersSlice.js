import {initialState} from "../States/InitialStateUsers";
import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    removeUsers(state) {
      state.users = []
    },
    setAuth(state, action) {
      state.isAuth = action.auth
    },
    setCurrentUser(state, action) {
      state.currentUser = {
        id: action.payload.id,
        username: action.payload.username,
        mail: action.payload.mail,
        phone: action.payload.phone,
        lastname: action.payload.lastname,
        firstname: action.payload.firstname,
        surname: action.payload.surname,
        password: action.payload.password,
        age: action.payload.age,
        avatar: action.payload.avatar,
      }
    }
  }
})

export const {setCurrentUser, removeUsers, setAuth} = usersSlice.actions;
export default usersSlice.reducer;