import './sidebar-chat.style.scss'
import SideUserChat from "../sidebar-user-chat/sidebar-user-chat.component"

import { useState } from 'react'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { openChat } from '../../redux/chat/chatSlice'
import { useDispatch, useSelector } from 'react-redux'

import { selectSetChats, selectUserInfo } from '../../redux/chat/chat.selector'


const SidebarChats = () => {
   const dispatch = useDispatch();

   const [displaySideChats] = useState(true);

   const structuredSelector = createStructuredSelector({
      currentUser: selectCurrentUser,
      chats: selectSetChats,
      userInfo: selectUserInfo
   })
   const { chats, userInfo } = useSelector(structuredSelector);

   console.log(userInfo);


   const handleChatClick = (chatId, userInfo) => {
      dispatch(openChat({chatId: chatId, userInfo: userInfo}))
   }


   return (
      <>
         {
            displaySideChats ? (
               <div className="sidebar-chats mt-4">
                  {
                     Object.entries(chats)?.map((chat) => (
                        <SideUserChat
                           key={chat[0]}
                           handleSelectChat={() => handleChatClick(chat[0], chat[1].userInfo)}
                           chatProfilePicture={chat[1].userInfo.profilePicture} 
                           chatDisplayName={chat[1].userInfo.displayName} 
                           chatLastMessage={chat[1].userInfo.lastMessage?.text} 
                        />
                     ))
                  }

               </div>
            ) : (
               <div className='start-chat mt-4 text-center'>
                  Start a new chat
               </div>
            )
         }
      </>
   )
}

export default SidebarChats