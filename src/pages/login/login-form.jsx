import './login-form.style.scss'
import appLogo from '../../assets/icons8-t-64.png';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { Form } from "react-bootstrap";



const LoginForm = () => {

   const [signIn, setSignIn] = useState({
      email: '',
      password: ''
   })

   // handle the email and password, passing the input email and password to firebase
   const handleSubmitLogin = async (e) => {
      e.preventDefault();
      const {email, password} = signIn;

      try {
         await signInWithEmailAndPassword(auth, email, password);
         setSignIn({
            email: '',
            password: '',
         })

      } catch (error) {
         console.log(error.message);
      }
   }

   const handleEmailChange = (e) => {
      const {value} = e.target;
      setSignIn({...signIn, email: value})
   }
   const handlePasswordChange = (e) => {
      const {value} = e.target;
      setSignIn({...signIn, password: value})
   }

   const {email, password} = signIn;

   return (
      <div className="registration-form min-vh-100 d-flex justify-content-center align-items-center">
         <div className="form-container d-flex flex-column rounded-1 px-5 py-4 text-center">
            <span className="logo fs-4 mb-2 d-flex justify-content-center align-items center">
               <img src={appLogo} alt='logo' /> 
               <p className='align-self-center'>TraysApp</p>
            </span>
            <span className="title fs-5">Log in</span>
            <Form onSubmit={handleSubmitLogin}>
               <FormInput 
                  controlId='formBasicEmail' 
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email Address"
               />
               <FormInput 
                  controlId='formBasicPassword' 
                  type='password'
                  name='password'
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='Password'
               />
               <CustomButton 
                  className="w-100 mt-4 my-2 py-2 rounded-1" 
                  variant="primary" 
                  type="submit"
               >
                  Sign In
               </CustomButton>
               <CustomButton 
                  className="w-100 my-2 py-2 rounded-1" 
                  variant="primary" 
                  onClick={signInWithGoogle}
                  isGoogleSignIn
               >
                  <img className='me-2' width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
                  Sign In With Google
               </CustomButton>
            </Form>
            <p className="mt-2 ">
               {`Don't have an account?`}
               <Link className='text-decoration-underline ms-1' to={'/register'}>
                  Register
               </Link>
            </p>
         </div>
      </div>
   )
}


export default LoginForm;