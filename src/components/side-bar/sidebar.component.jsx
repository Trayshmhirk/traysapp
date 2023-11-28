import './sidebar.style.scss';
import NavBar from "../navbar/navbar.component"
import SearchUser from "../search-bar/searchbar.component"
import SidebarChats from "../sidebar-chats/sidebar-chat.component"
import UserProfile from '../user-profile/user-profile.component'

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { toggleDisplayUsers } from '../../redux/toggle/toggleSlice';
import NewChats from '../new-chats/new-chats.component';
// import { setChats } from '../../redux/chat/chatSlice';

import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase.utils';


const Sidebar = () => {
   const dispatch = useDispatch();

   const [chats, setChats] = useState([]);

   const structuredSelector = createStructuredSelector({
      currentUser: selectCurrentUser,
   })
   const { currentUser } = useSelector(structuredSelector);


   const handleDisplayUsers = () => {
      dispatch(toggleDisplayUsers());
   }

   // 
   useEffect(() => {
      const getChats = () => {
         const unsub = onSnapshot(doc(db, 'userChats', currentUser.id), (doc) => {
            setChats(doc.data());
         })

         return unsub;
      }
      
      currentUser.id && getChats();
   }, [currentUser.id, dispatch])
   
   
   return (
      <div className="sidebar d-flex flex-column">
         <NavBar 
            isSidebarNavbar
         />
         <SearchUser placeholder='Search or start new chat'/>
         
         <SidebarChats chats={chats}/>

         <UserProfile />

         <NewChats chats={chats} />

         <div onClick={handleDisplayUsers} className='new-chat-icon mx-2 d-flex justify-content-center align-items-center'>
            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5.16667 3.75C3.69391 3.75 2.5 4.94391 2.5 6.41667V17.5833C2.5 19.0561 3.69391 20.25 5.16667 20.25H18.8333C20.3061 20.25 21.5 19.0561 21.5 17.5833V8.75L23.7458 5.29499C24.1782 4.62974 23.7008 3.75 22.9073 3.75H5.16667ZM14.9672 12.9911H12.9914V14.9671C12.9914 15.3999 12.7366 15.8175 12.3238 15.9488C11.6391 16.1661 11.009 15.6613 11.009 15.009V12.9911H9.03279C8.59949 12.9911 8.1819 12.7358 8.05099 12.3226C7.83412 11.6381 8.33942 11.0089 8.99134 11.0089H11.009V9.03332C11.009 8.60007 11.2639 8.18252 11.6767 8.05119C12.3609 7.83391 12.9914 8.33872 12.9914 8.991V11.0089H15.0091C15.6606 11.0089 16.1659 11.6381 15.949 12.3226C15.8185 12.7358 15.4005 12.9911 14.9672 12.9911Z" fill="currentColor"></path></svg>
         </div>
      </div>
   )
}

export default Sidebar
