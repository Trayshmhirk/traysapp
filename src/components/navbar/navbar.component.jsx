import './navbar.style.scss'
import appLogo from '../../assets/icons8-t-64.png'
import NavBarDropdown from '../navbar-dropdown/navbar-dropdown.component';

import {  useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { toggleHidden } from '../../redux/toggle/toggleSlice';
import { selectUserInfo } from '../../redux/chat/chat.selector';

import { 
   Container, 
   Navbar, 
   NavbarBrand,
} from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';



const NavBar = ({ isSidebarNavbar, isUserChatNavbar }) => {
   const dispatch = useDispatch();

   const structuredSelector = createStructuredSelector({
      currentUser: selectCurrentUser,
      userInfo: selectUserInfo,
   })
   const {currentUser, userInfo} = useSelector(structuredSelector);
   
   const { displayName, profilePicture: userPicture } = userInfo ? userInfo : [];

   const { profilePicture } = currentUser || {};

   const handleProfileOpen = () => {
      dispatch(toggleHidden())
   }
   

   return (
      <Navbar className="p-0">
         <Container className="m-0 px-3 d-flex justify-content-between align-items-center">

            {isSidebarNavbar && (
               <>
                  <div className='d-flex align-items-center'>
                     <img className="me-1" width="35" height="35" src={appLogo} alt="" />
                     <NavbarBrand className="m-0 p-0">TraysApp</NavbarBrand>
                  </div>

                  <div onClick={handleProfileOpen} className="image-container ms-auto me-2 rounded-circle d-flex justify-content-center align-items-center">
                     {
                        profilePicture && <img className="image-content" src={profilePicture} alt="" />
                     }
                  </div>
               </>
            )}

            {isUserChatNavbar && (
               <>
                  <div className='d-flex'>
                     <div className="image-container me-3 rounded-circle d-flex justify-content-center align-items-center">
                        <img className="image-content" src={userPicture} alt="" />
                     </div>
                     <NavbarBrand >
                        <span>{displayName}</span>
                     </NavbarBrand>
                  </div>

                  <div className='phone d-flex align-items-center ms-auto pe-3'>
                     <FontAwesomeIcon style={{fontSize: '18px'}} icon={faPhone} />
                  </div>
               </>
            )}

            <NavBarDropdown 
               isSidebarDropdown={isSidebarNavbar}
               isUserChatDropdown={isUserChatNavbar}
            />
            
         </Container>
      </Navbar>
   )
}

export default NavBar

