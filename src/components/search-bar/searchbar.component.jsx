import './searchbar.style.scss'

import { FormControl, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const SearchUser = ({placeholder, handleChange, value}) => {
   return(
      <div className="search-user">
         <div className="search-bar rounded-2 m-2">
            <Button variant="outline-success">
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
            <FormControl type="text" placeholder={placeholder} onChange={handleChange} value={value}/>
         </div>

      </div>
   )
}

export default SearchUser