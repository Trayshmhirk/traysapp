import './form-input.style.scss';
import { FormGroup, FormControl } from 'react-bootstrap';


const FormInput = ({controlId, onChange, ...otherProps}) => {


   return(
      <FormGroup
         controlId={controlId}
         className='my-2 input-group'
      >
         <FormControl onChange={onChange} {...otherProps}></FormControl>

      </FormGroup>
   )
}

export default FormInput;