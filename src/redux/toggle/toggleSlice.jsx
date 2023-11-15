import { createSlice } from "@reduxjs/toolkit";


export const toggleSlice = createSlice({
   name: 'toggle',
   initialState: {
      hidden: false,
      displayUsers: false
   }, 
   reducers: {
      toggleHidden: (state) => {
         state.hidden = !state.hidden;
      },
      toggleDisplayUsers: (state) => {
         state.displayUsers = !state.displayUsers;
      }
   }
})

export const {toggleHidden, toggleDisplayUsers} =  toggleSlice.actions;

export default toggleSlice.reducer;
