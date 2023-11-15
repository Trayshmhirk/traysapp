import './user-chat.style.scss'
import chatBackground from '../../assets/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png'
import appLogo from '../../assets/icons8-t-64.png'
import NavBar from '../navbar/navbar.component'
import ChatFooter from '../chat-footer/chat-footer.component'
import ChatMessages from '../chat-messages/chat-messages.component'
import { useState } from 'react'


const Chat = () => {

   const [openChat] = useState(true);

   return (
      <div className="chat d-flex flex-column z-3">
         {
            openChat ? (
               <>
                  <div 
                     className="user-chat-bg-image"
                     style={{
                        backgroundImage: `url(${chatBackground})`
                     }}
                  />
                  <NavBar isUserChatNavbar />

                  <ChatMessages />

                  <ChatFooter />
               </>
            ) : (
               <div className='plain-bg d-flex flex-column justify-content-center align-items-center'>
                  <div className='my-auto text-center'>
                     <img className='mb-3' src={appLogo} alt='app logo' />
                     <h1>Welcome to TraysApp</h1>
                  </div>

                  <p className='mb-3'>Connect with new people on TraysApp</p>
               </div>
            )
         }

      </div>
   )
}

export default Chat