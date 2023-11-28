import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
   name: 'chat',
   initialState: {
      chatId: null,
      userInfo: {},
      // chats: []
   },
   reducers: {
      setCurrentChat: (state, action) => {
         state.chatId = action.payload.chatId;
         state.userInfo = action.payload.userInfo;
      },
      // setChats: (state, action) => {
      //    state.chats = action.payload;
      // }
   }
})

export const {setCurrentChat} = chatSlice.actions;

export default chatSlice.reducer;