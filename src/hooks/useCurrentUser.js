import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../store/Slices/usersSlice";


export const useCurrentUser = () => {
  return useSelector(state => state.users.currentUser);
}

// export const saveCurrentUser = async (data) => {
//   const dispatch = useDispatch();
//   await
// }