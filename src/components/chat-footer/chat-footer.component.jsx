import './chat-footer.style.scss'

import EmojiPickerReact from '../emoji-picker/emoji-picker.component'
import NavBarDropdown from '../navbar-dropdown/navbar-dropdown.component'

import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinHearts, faMicrophone } from '@fortawesome/free-solid-svg-icons'

import { FormControl } from 'react-bootstrap'


const ChatFooter = () => {

   const [emojiPickerState, setEmojiPickerState] = useState(false);

   const triggerEmojiPicker = (e) => {
      e.preventDefault();
      setEmojiPickerState(!emojiPickerState);
   }


   return (
      <div className='z-3 footer-wrapper'>
         {
            emojiPickerState && <EmojiPickerReact />
         }
         <footer className='chat-foot d-flex align-items-center px-4 z-3'>
            <FontAwesomeIcon
               onClick={triggerEmojiPicker} 
               className='px-1 py-2' 
               style={{fontSize: '25px', cursor: 'pointer'}} 
               icon={faFaceGrinHearts} 
            />

            <NavBarDropdown 
               isChatFootDropdown
            />
            <FormControl 
               className='rounded-3 px-3 py-2' 
               type='text'
               placeholder="Type a message" 
            />
            <FontAwesomeIcon 
               className='ps-4' 
               style={{fontSize: '25px'}} 
               icon={faMicrophone}
            />
         </footer>
      </div>
   )
}


export default ChatFooter;

