
import { initializeApp } from 'firebase/app'
import { 
   getAuth, 
   GoogleAuthProvider,
   signInWithPopup,
   updateProfile,
   setPersistence,
   browserLocalPersistence
} from 'firebase/auth';
import { getFirestore, doc, setDoc, collection, getDocs, orderBy, query, getDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';



const firebaseConfig = {
   apiKey: "AIzaSyBtMnPxg7Z8EWEa7J5AbhAYIzeJ2cZey5w",
   authDomain: "traysapp-whatsapp-clone.firebaseapp.com",
   projectId: "traysapp-whatsapp-clone",
   storageBucket: "traysapp-whatsapp-clone.appspot.com",
   messagingSenderId: "383279726839",
   appId: "1:383279726839:web:9a060086fbd6377a5613f2",
   measurementId: "G-QHK1ZDJ7K9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
const storage = getStorage(app);
setPersistence(auth, browserLocalPersistence);
export const db = getFirestore();

// 
export const registerUser = async (user, profilePicture, displayName) => {

   const { email } = user;

   const storageRef = ref(storage, `ProfilePictures/${displayName}`);
   const uploadTask = uploadBytesResumable(storageRef, profilePicture);
   
   let userDocRef;

   if (user) {
      const userDocRef = doc(db, 'users', user.uid);

      uploadTask.on('state_changed',
         (snapshot) => {
            // The snapshot object contains details about the ongoing upload
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
               console.log('Upload is paused');
               break;
            case 'running':
               console.log('Upload is running');
               break;
            }
         },
         (error) => {
            console.log(error);
         },
         async () => {
            try {
               getDownloadURL(uploadTask.snapshot.ref).then( async (downloadUrl) => {
                  await updateProfile(user, {
                     displayName,
                     photoURL: downloadUrl
                  })

                  await setDoc(userDocRef, {
                     id: user.uid,
                     displayName,
                     email,
                     profilePicture: downloadUrl
                  })

                  await setDoc(doc(db, 'userChats', user.uid), {})
               })

            } catch (error) {
               console.error(error)
            }
         }
      )

   } else {
      return
   }

   return userDocRef;

}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => signInWithPopup(auth, provider);


// get users from firebase
export const getUsers = async () => {
   const usersCollection = collection(db, 'users');
   const q = query(usersCollection, orderBy('displayName'));
   const userSnapshot = await getDocs(q);
   const userList = userSnapshot.docs.map(doc => doc.data());
   return userList;
}


export const createOrOpenChat = async (combinedId, currentUser, selectedUserId, selectedUser) => {
   // check if the chat group exists in firestore. create new chat group, if not

   try {
      const chatDocRef = doc(db, 'chats', combinedId);
      const chatDoc = await getDoc(chatDocRef);

      if (!chatDoc.exists()) {
         // create a chat in chats collection
         await setDoc(chatDocRef, {messages: []})
      }

      // create user chats
      await setDoc(doc(db, 'userChats', currentUser.id), {
         [combinedId]: {
            userInfo: {
               id: selectedUserId,
               displayName: selectedUser.displayName,
               profilePicture: selectedUser.profilePicture
            },
            date: serverTimestamp()
         }
      })

      // create user chats
      await setDoc(doc(db, 'userChats', selectedUserId), {
         [combinedId]: {
            userInfo: {
               id: currentUser.id,
               displayName: currentUser.displayName,
               profilePicture: currentUser.profilePicture
            },
            date: serverTimestamp()
         }
      })
      
   } catch (error) {
      console.error(error);
   }
}