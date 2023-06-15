/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";


export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
      
      onAuthStateChanged(FirebaseAuth, async(user) => {
        
        //si no hay un usuario autenticado salimos
        if( !user ) return dispatch( logout() );
  
        const { uid, email, photoURL, displayName } = user;
        dispatch( login({ uid, email, photoURL, displayName }) )
      })
  
    }, [])

    return {
        status
    }
}
