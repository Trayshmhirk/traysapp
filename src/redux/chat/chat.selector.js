import { createSelector } from "reselect";


const selectChat = state => state.chat;

export const selectUserInfo = createSelector(
   [selectChat],
   (chat) => chat.userInfo
)

// export const selectSetChats = createSelector(
//    [selectChat],
//    (chat) => chat.chats
// )