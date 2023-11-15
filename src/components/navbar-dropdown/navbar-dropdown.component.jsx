import './navbar-dropdown.style.scss'
import SidebarDropdownItems from '../sidebar-dropdown-items/sidebar-dropdown-items.component'
import ChatFootDropdownItems from '../chat-foot-dropdown-items/chat-foot-dropdown-items.component'
import UserChatDropdownItems from '../user-chat-dropdown-items/user-chat-dropdown-items.component'

import { NavDropdown } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons"



const DropdownIcon = ({isChatFootDropdown}) => {
   return(
      isChatFootDropdown ? (
         <FontAwesomeIcon icon={faPlus} className='menu-icon py-2' />
      ) : (
         <FontAwesomeIcon className="menu-icon py-2" icon={faEllipsisVertical} />
      )
   )
}

const NavBarDropdown = ({ isSidebarDropdown, isUserChatDropdown, isChatFootDropdown}) => {

   return (
      <NavDropdown
         title={
            <DropdownIcon isChatFootDropdown={isChatFootDropdown} />
         }
         id="basic-nav-dropdown"
         className={`text-center d-flex align-items-center justify-content-center ${isChatFootDropdown ? 'foot-dropdown mx-2' : '' }`}
      >

         { isSidebarDropdown && <SidebarDropdownItems /> }
         {
            isChatFootDropdown &&
            <ChatFootDropdownItems isChatFootDropdown={isChatFootDropdown}/>
         }
         {
            isUserChatDropdown && <UserChatDropdownItems />
         }

      </NavDropdown>
   )
}

export default NavBarDropdown;