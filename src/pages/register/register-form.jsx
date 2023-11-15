import './register-form.style.scss'
import appLogo from '../../assets/icons8-t-64.png';
import FormInput from '../../components/form-input/form-input.component';
import FormInputFile from '../../components/form-input-file/form-input-file.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { Form } from "react-bootstrap";

import { Link } from 'react-router-dom';

import { auth, registerUser } from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useState } from 'react';



const RegisterForm = () => {

   const [userData, setUserData] = useState({
      displayName: '',
      email: '',
      password: '',
      profilePicture: null
   })

   const handleSubmitRegister = async (e) => {
      e.preventDefault();

      const {displayName, email, password, profilePicture} = userData;

      try {
         const {user} = await createUserWithEmailAndPassword(auth, email, password);

         await registerUser(user, profilePicture, displayName);
         // clear the form inputs
         setUserData({
            displayName: '',
            email: '',
            password: '',
            profilePicture: null
         })
      } catch (error) {
         console.log(error);
      }
   }


   const handleChangeDisplayName = (e) => {
      const {value} = e.target;
      setUserData({...userData, displayName: value})
   }
   const handleChangeEmail = (e) => {
      const {value} = e.target;
      setUserData({...userData, email: value})
   }
   const handleChangePassword = (e) => {
      const {value} = e.target;
      setUserData({...userData, password: value})
   }
   const handleChangeProfilePicture = (e) => {
      const fileValue = e.target.files[0];
      setUserData({...userData, profilePicture: fileValue})
   }
   

   const { displayName, email, password, profilePicture } = userData;

   return (
      <div className="registration-form min-vh-100 d-flex justify-content-center align-items-center">
         <div className="form-container d-flex flex-column rounded-1 px-5 py-4 text-center">
            <span className="logo fs-4 mb-2 d-flex justify-content-center align-items center">
               <img src={appLogo} alt='logo' /> 
               <p className='align-self-center'>TraysApp</p>
            </span>
            <span className="title fs-5">Register</span>
            <Form onSubmit={handleSubmitRegister}>
               <FormInput
                  controlId='formBasicText' 
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={handleChangeDisplayName}
                  placeholder='Display Name'
               />
               <FormInput 
                  controlId='formBasicEmail' 
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder="Email Address"
               />
               <FormInput 
                  controlId='formBasicPassword' 
                  type='password'
                  name='password'
                  value={password}
                  onChange={handleChangePassword}
                  placeholder='Password'
               />
               <FormInputFile 
                  controlId='formFile'
                  type='file'
                  name='formFile'
                  onChange={handleChangeProfilePicture}
                  profilepicture={profilePicture}
               />
               <CustomButton 
                  className="w-100 my-2 py-2 rounded-3" 
                  variant="primary" 
                  type="submit"
               >
                  Sign Up
               </CustomButton>
            </Form>

            <p className="mt-2 ">
               {` Do you have an account?`}
               <Link className='text-decoration-underline ms-1' to={'/login'}>
                  Login
               </Link>
            </p>

         </div>
      </div>
   )
}


export default RegisterForm;