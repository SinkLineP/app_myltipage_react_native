import {initialState} from "../States/InitialStateUsers";
import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    removeUsers(state) {
      state.users = []
    },
    switchAuth(state) {
      state.isAuth = !state.isAuth
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
        created_at: action.payload.created_at,
        updated_at: action.payload.updated_at
      }
    },
    removeCurrentUser(state) {
      state.currentUser = {}
    }
  }
})

export const {setCurrentUser, removeUsers, switchAuth, removeCurrentUser} = usersSlice.actions;
export default usersSlice.reducer;