import {initialState} from "../States/InitialStateUsers";
import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    removeUsers(state) {
      state.currentUser = {}
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
        gender: action.payload.gender,
        age: action.payload.age,
        avatar: action.payload.avatar,
        is_confirmed_email: action.payload.is_confirmed_email,
        is_confirmed_phone : action.payload.is_confirmed_phone,
        created_at: action.payload.created_at,
        updated_at: action.payload.updated_at
      }
    },
    removeCurrentUser(state) {
      state.currentUser = {}
    },
    setAvatarForCurrentUser(state, action) {
      state.currentUser.avatar = action.payload
    },
    setLimitSendSMS(state, action) {
      state.limitSendSMS = action.payload
    },
    setLimitMessage(state, action) {
      state.limitMessage = action.payload
    },
    setDefaultPassword(state, action) {
      state.defaultPassword = action.payload
    }
  }
})

export const {setCurrentUser, setLimitSendSMS, switchAuth, removeCurrentUser, setLimitMessage, setDefaultPassword} = usersSlice.actions;
export default usersSlice.reducer;