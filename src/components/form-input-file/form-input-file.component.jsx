import './form-input-file.style.scss'
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const FormInputFile = ({controlId, onChange, profilepicture, ...otherProps }) => {
   const [selectedFile, setSelectedFile] = useState(null);

   const handleFIleChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
   }

   return(
      <FormGroup
         controlId={controlId}
         className='text-start'
      >
         <FormLabel className='my-2'>
            <FontAwesomeIcon className='me-3 ms-2 fs-5' icon={faFileImage} />
            Add an avatar
         </FormLabel>
         <FormControl 
            className='d-none' 
            onChange={(e) => {
               onChange(e);
               handleFIleChange(e);
            }} 
            {...otherProps} 
         />

         {profilepicture && (
            <div>
               Selected File: {selectedFile.name}
            </div>
         )}

      </FormGroup>
   )
}

export default FormInputFile;