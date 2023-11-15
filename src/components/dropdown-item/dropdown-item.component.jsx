import './dropdown-item.style.scss'
import { NavDropdown } from 'react-bootstrap';

const DropdownItems = ({ children, onClick, isChatFootDropdown }) => {
   
   return (
      <>
         <NavDropdown.Item 
            className={ `d-flex ${ isChatFootDropdown ? 'dropdown-padding' : '' }` }
            onClick={onClick}
         >
            {children}
         </NavDropdown.Item>
      </>
   )
}

export default DropdownItems;