import './header.style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Header = ({onClick, heading}) => {

   return (
      <header className='d-flex flex-column justify-content-end'>
         <div className='d-flex align-items-center'>
            <span className='p-2' onClick={onClick}>
               <FontAwesomeIcon className='mt-2' icon={faArrowLeft} style={{fontSize: '17px'}}/>
            </span>
            <h5 className='mb-0 ms-4'>{heading}</h5>
         </div>
      </header>
   )
}

export default Header