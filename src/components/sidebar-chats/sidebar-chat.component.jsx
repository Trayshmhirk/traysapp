import './sidebar-chat.style.scss'
import SideUserChat from "../sidebar-user-chat/sidebar-user-chat.component"

import { useState } from 'react'

// import { createStructuredSelector } from 'reselect'
import { setCurrentChat } from '../../redux/chat/chatSlice'
import { useDispatch } from 'react-redux'
// import { selectSetChats } from '../../redux/chat/chat.selector'


const SidebarChats = ({chats}) => {
   const dispatch = useDispatch();

   const [displaySideChats] = useState(true);

   // const structuredSelector = createStructuredSelector({
   //    chats: selectSetChats,
   // })
   // const { chats } = useSelector(structuredSelector);


   const handleChatSelect = (chatId, userInfo) => {
      dispatch(setCurrentChat({chatId: chatId, userInfo: userInfo}))
   }


   return (
      <>
         {
            displaySideChats ? (
               <div className="sidebar-chats mt-4">
                  {
                     Object.entries(chats)?.map(([chatId, chat]) => (
                        <SideUserChat
                           key={chatId}
                           handleSelectChat={() => handleChatSelect(chatId, chat.userInfo)}
                           chatProfilePicture={chat.userInfo.profilePicture} 
                           chatDisplayName={chat.userInfo.displayName} 
                           chatLastMessage={chat.userInfo.lastMessage?.text} 
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