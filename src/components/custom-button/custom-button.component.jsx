import './custom-button.style.scss';
import { Button } from "react-bootstrap";



const CustomButton = ({className, isGoogleSignIn, ...otherProps}) => {

   return (
      <Button 
         className={`${className} ${isGoogleSignIn ? 'isgooglesignin' : '' } `}
         {...otherProps}
      >
      </Button>
   )
}


export default CustomButton;