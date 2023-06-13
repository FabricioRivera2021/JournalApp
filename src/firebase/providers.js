/* eslint-disable no-unused-vars */

import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }
        
    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)

        return {
            ok: false,
            errorMessage
        }
    }

}

export const registerWithEmailAndPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL} = resp.user;
        // console.log(resp);

        await updateProfile(FirebaseAuth.currentUser, {displayName});
    

        return{
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}