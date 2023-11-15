import './sidebar-user-chat.style.scss'

// import { useDispatch } from 'react-redux'
// import { toggleOpenUserChat } from '../../redux/toggle/toggleSlice'

const SideUserChat = ({id, displayName, profilePicture, isNewChats, handleOpenNewChat, handleSelectChat, currentUserId, chatProfilePicture, chatDisplayName, chatLastMessage}) => {

   // const dispatch = useDispatch()

   // const handleOpenUserChat = () => {
   //    dispatch(toggleOpenUserChat())
   // }

   return (
      <div className="user d-flex align-items-center" onClick={isNewChats ? handleOpenNewChat : handleSelectChat}>
         <div className='user-image d-flex align-items-center mx-3'>
            {
               isNewChats ? 
                  profilePicture && <img src={profilePicture} alt="" width="50" height="50" className='rounded-circle'/>
                : (
                  <img src={chatProfilePicture} alt="" width="50" height="50" className='rounded-circle'/>
               )
            }
         </div>

         <div className="user-info border-top d-flex flex-column justify-content-center">
            {
               isNewChats ? (
                  <>
                     <span>
                        {
                           currentUserId === id ? `${displayName} (Me)` : displayName
                        }
                     </span>
                     {/* <p className='about'>
                           Heyyyyyy!
                     </p> */}
                  </>
               ) : (
                  <>
                     <span>{chatDisplayName}</span>
                     <p>
                        {chatLastMessage}
                        Heyyyyyy!
                     </p>
                  </>
               )
            }
         </div>
      </div>
   )
}

export default SideUserChat