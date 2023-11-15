import './sidebar-dropdown-items.style.scss';
import DropdownItems from '../dropdown-item/dropdown-items.component'

import { NavDropdown } from 'react-bootstrap';



const SidebarDropdownItems = ({isSideBarDropdown}) => {

   return (
      <>
         <DropdownItems isSideBarDropdown={isSideBarDropdown}>My Profile</DropdownItems>
         <DropdownItems isSideBarDropdown={isSideBarDropdown}>Settings</DropdownItems>
         <DropdownItems isSideBarDropdown={isSideBarDropdown}>Log Out</DropdownItems>

         <NavDropdown.Divider />

         <NavDropdown.Item >TraysApp</NavDropdown.Item>

      </>
   )
}


export default SidebarDropdownItems;