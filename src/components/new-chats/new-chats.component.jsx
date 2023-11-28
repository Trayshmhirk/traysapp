import './new-chats.style.scss';
import Header from '../header/header.component';
import SearchUser from '../search-bar/searchbar.component';
import SideUserChat from '../sidebar-user-chat/sidebar-user-chat.component';

import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setUsers } from '../../redux/user/userSlice';
import { selectCurrentUser, selectUsers } from '../../redux/user/user.selector';
import { selectDisplayUsers } from '../../redux/toggle/toggle.selector';
import { toggleDisplayUsers } from '../../redux/toggle/toggleSlice';
// import { setCurrentChat } from '../../redux/chat/chatSlice';

import { useEffect, useState } from 'react';

import { createOrOpenChat, getUsers } from '../../firebase/firebase.utils';



const NewChats = ({chats}) => {
   const dispatch = useDispatch();

   const [searchInput, setSearchInput] = useState('');
   const [currentChats, setCurrentChats] = useState([]);

   const structuredSelector = createStructuredSelector({
      displayUsers: selectDisplayUsers,
      users: selectUsers,
      currentUser: selectCurrentUser,
   })
   const {displayUsers, users, currentUser} = useSelector(structuredSelector);

   // 
   const handleUsersClose = () => {
      dispatch(toggleDisplayUsers())
   }

   // 
   const handleSearchChange = (e) => {
      setSearchInput(e.target.value)
   }


   // 
   useEffect(() => {
      const fetchUsers = async () => {
         const usersFromFirestore = await getUsers();
         dispatch(setUsers(usersFromFirestore));
      }
      fetchUsers();
   }, [dispatch]);

   //
   useEffect(() => {
      if (Object.entries(chats).length > 0) {
         setCurrentChats(chats);
         console.log(chats);
      }
   }, [chats]);


   // return a filtered array that matches the search input
   const filteredUsers = users ? users.filter(user => user.displayName.toLowerCase().includes(searchInput.toLowerCase())) : [];
   

   const handleSelect = async (selectedUserId, selectedUser) => {
      setSearchInput('');
      
      dispatch(toggleDisplayUsers());
      
      const combinedId = 
      currentUser.id > selectedUserId ? 
      currentUser.id + selectedUserId :
      selectedUserId + currentUser.id;

      console.log(currentChats);
      
      // dispatch(setCurrentChat({chatId: combinedId, userInfo: userInfo}))
      
      await createOrOpenChat(combinedId, currentUser, selectedUserId, selectedUser);
      
   }



   return (
      <div className={`users d-flex flex-column ${displayUsers ? 'position-in' : 'position-out'}`}>
         <Header onClick={handleUsersClose} heading='New Chat'/>

         <SearchUser placeholder='Search name or number' handleChange={handleSearchChange} value={searchInput}/>

         <div className='header py-3 px-4 mb-1'>
            <span>USERS ON TRAYSAPP</span>
         </div>
         
         <div className='app-users'>
            {  
               filteredUsers.length ? (
                  filteredUsers.map((user) => (
                     <SideUserChat
                        handleOpenNewChat={() => {handleSelect(user.id, user)}}
                        key={user.id} 
                        isNewChats
                        {...user}
                        currentUserId={currentUser.id}
                     />
                  ))
               ) : (
                  <div className='no-results text-center mt-2 mx-4'>No results found for {`"${searchInput.toLowerCase()}"`}</div>
               )
            }
         </div>
      </div>
   )
}


export default NewChats;