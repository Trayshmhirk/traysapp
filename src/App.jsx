import './App.css'
import RegisterForm from './pages/register/register-form';
import LoginForm from './pages/login/login-form';
import Homepage from './pages/homepage/homepage';
import Loading from './components/loading/loading.component';

import { Route, Routes, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth, firestore } from './firebase/firebase.utils';
import { doc, onSnapshot } from 'firebase/firestore';

import { useDispatch } from 'react-redux';
import { setCurrentUser, removeCurrentUser } from './redux/user/userSlice';


function App() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(true);



   useEffect(() => {
      const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
         setIsLoading(true);

         if (userAuth) {
            const userRef = doc (firestore, 'users', userAuth.uid);

            onSnapshot(userRef, (doc) => {
               if (doc.exists()) {
                  const data = doc.data();
                  dispatch(setCurrentUser({
                     id: data.id,
                     ...data
                  }))

               } else {
                  navigate('/login');
               }

               navigate('/');
            })
            
         } else {
            dispatch(removeCurrentUser());

            // Check if the user is on the homepage or register page and navigate to the register page
            if (window.location.pathname === '/' || window.location.pathname === '/register') {
               navigate('/register');
            } else {
               navigate('/login')
            }
         }

         setTimeout(() => {
            setIsLoading(false);
         }, 1000);
      })


      return unsubscribeFromAuth;
   }, [dispatch, navigate]);

   if(isLoading) {
      return <Loading />
   }
 
   return (
      <div>
         <Routes>
            <Route path='/' element={ <Homepage /> } />
            <Route path='register' element={<RegisterForm /> }/>
            <Route path='login' element={<LoginForm /> }/>
         </Routes>
      </div>
   )
}

export default App;
