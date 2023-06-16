/* eslint-disable no-unused-vars */

import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, setActiveNote, creatingNewNote } from "./journalSlice"


export const startNewNote = () => {

    return async(dispatch, getState) => {

        dispatch( creatingNewNote() )
        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        //Pide la base de datos y el path
        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
        
        //luego pide eñ path y le pasamos la nota a guardar
        /*const resp =*/ await setDoc( newDoc, newNote );     
        // console.log({newDoc, resp})

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ) )
        dispatch( setActiveNote( newNote ) )
        //dispatch (activeNote)
    }

}