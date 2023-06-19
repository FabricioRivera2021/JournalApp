/* eslint-disable no-unused-vars */
import { loginWithEmailAndPassword, logoutFirebase, registerWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {

        dispatch(checkingCredentials())

    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {

        dispatch(checkingCredentials())
        
        const result = await signInWithGoogle();
        // console.log(result)
        
        if( !result.ok ) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) => {
    return async(dispatch) => {

        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerWithEmailAndPassword({email, password, displayName});

        if(!ok) return dispatch(logout( {errorMessage} ));
        // console.log(resp)

        dispatch(login({uid, displayName, email, photoURL}));
    }
}

export const startLoginWithEmailAndPassword = ({email, password}) => {
    return async(dispatch) => {

        dispatch(checkingCredentials())

        const {ok, uid, displayName, photoURL, errorMessage} = await loginWithEmailAndPassword({email, password});
        // console.log(resp)

        if(!ok) return dispatch( logout( {errorMessage} ) );

        dispatch( login({ uid, displayName, email, photoURL }) )
    }
}

export const logoutFromFirebase = () => {
    return async(dispatch) => {

        await logoutFirebase();

        dispatch(logout());

    }
}