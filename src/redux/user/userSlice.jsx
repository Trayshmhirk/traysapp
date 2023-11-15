import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: 'userAuth',
   initialState: {
      currentUser: null,
      users: null
   },
   reducers: {
      setCurrentUser: (state, action) => {
         state.currentUser = action.payload;
      },
      removeCurrentUser: (state) => {
         state.currentUser = null;
      },
      setUsers: (state, action) => {
         state.users = action.payload;
      }
   }
})

export const {setCurrentUser, removeCurrentUser, setUsers} = userSlice.actions;

export default userSlice.reducer;