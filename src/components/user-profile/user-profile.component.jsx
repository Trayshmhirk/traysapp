import './user-profile.style.scss';
import Header from '../header/header.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import { toggleHidden } from '../../redux/toggle/toggleSlice';
import { selectHidden } from '../../redux/toggle/toggle.selector';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

const UserProfile = () => {
   const dispatch = useDispatch()

   const structuredSelector = createStructuredSelector({
      currentUser: selectCurrentUser,
      hidden: selectHidden
   })
   const {currentUser, hidden} = useSelector(structuredSelector);

   const {profilePicture, displayName} = currentUser || {};

   const handleProfileClose = () => {
      dispatch(toggleHidden())
   }

   return (
      <div className={`user-profile ${hidden ? 'position-in' : 'position-out'}`}>
         <Header onClick={handleProfileClose} heading='Profile'/>

         <div className='user-info'>
            <div className='profile-image my-4 d-flex justify-content-center align-items-center'>
               <img className='rounded-circle' width='200' height='200' src={profilePicture} alt='user-profile' />
            </div>

            <div className='user-name py-3'>
               <span className='name'>Your Name</span>
               <div className='edit-username d-flex justify-content-between mt-3'>
                  <span>{displayName}</span>
                  <div>
                     <FontAwesomeIcon icon={faPen} />
                  </div>
               </div>
            </div>

            <div className='text mt-3 mb-4'>
               This is not your email or pin. This name will be visible to TraysApp users.
            </div>

         </div>
      </div>
   )
}

export default UserProfile;