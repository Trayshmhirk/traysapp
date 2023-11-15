import './chat-foot-dropdown-items.style.scss';
import DropdownItems from '../dropdown-item/dropdown-item.component'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage, faFileLines } from '@fortawesome/free-solid-svg-icons';



const ChatFootDropdownItems = ({isChatFootDropdown}) => {

   return (
      <>
         <DropdownItems isChatFootDropdown={isChatFootDropdown}>
            <FontAwesomeIcon className='fa-image icon-style' icon={faFileImage} />
            Document
         </DropdownItems>
         <DropdownItems isChatFootDropdown={isChatFootDropdown}>
            <FontAwesomeIcon className='fa-file icon-style' icon={faFileLines} />
            Photos & Videos
         </DropdownItems>
      </>
   )
}


export default ChatFootDropdownItems;