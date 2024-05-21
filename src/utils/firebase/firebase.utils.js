import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'crwn-clothing-db-895e0.firebaseapp.com',
  projectId: 'crwn-clothing-db-895e0',
  storageBucket: 'crwn-clothing-db-895e0.appspot.com',
  messagingSenderId: '515645796457',
  appId: '1:515645796457:web:bad299f346089b8115b2f8'
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  console.log(userAuth)
}

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
