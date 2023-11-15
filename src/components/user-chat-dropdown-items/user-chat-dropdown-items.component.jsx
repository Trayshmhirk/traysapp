import './user-chat-dropdown-items.style.scss';
import DropdownItems from '../dropdown-item/dropdown-item.component'

const UserChatDropdownItems = () => {

   return (
      <>
         <DropdownItems>User Profile</DropdownItems>
         <DropdownItems>Close chat</DropdownItems>
         <DropdownItems>Clear Chat</DropdownItems>
         <DropdownItems>Delete Chat</DropdownItems>
      </>
   )
}


export default UserChatDropdownItems;