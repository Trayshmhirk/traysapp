import './sidebar-dropdown-items.style.scss';
import DropdownItems from '../dropdown-item/dropdown-item.component'

import { NavDropdown } from 'react-bootstrap';

import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';

import { toggleHidden } from '../../redux/toggle/toggleSlice';
import { useDispatch } from 'react-redux';


const SidebarDropdownItems = () => {
   const dispatch = useDispatch()

   const handleLogOut = () => {
      signOut(auth)
   } 

   const handleProfileDisplay = () => {
      dispatch(toggleHidden());
   }

   return (
      <>
         <DropdownItems onClick={handleProfileDisplay}>My Profile</DropdownItems>
         
         
         <DropdownItems>Settings</DropdownItems>

         <DropdownItems onClick={handleLogOut}> Log Out </DropdownItems>

         <NavDropdown.Divider />

         <NavDropdown.Item >TraysApp</NavDropdown.Item>

      </>
   )
}


export default SidebarDropdownItems;