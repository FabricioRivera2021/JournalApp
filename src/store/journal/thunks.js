/* eslint-disable no-unused-vars */

import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, setActiveNote, creatingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote } from "./journalSlice"
import { loadNotes } from "../../helpers/loadNotes"
import { fileUploading } from "../../helpers"


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

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        if ( !uid ) throw new Error("El Uid del user no existe")

        const notes = await loadNotes( uid );
        
        
        dispatch( setNotes(notes) )
        
    }
}

export const startSavingNote = () => {
    return async(dispatch, getState) => {

        dispatch( setSaving() );

        const {uid} = getState().auth;
        const {active: note/*alias as note*/} = getState().journal;

        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, {merge: true});

        dispatch(updateNote(note))
    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async(dispatch, /* getState */) => {
        dispatch(setSaving());

        // await fileUploading(files[0]);

        // todas las promesas quedaran en este array
        const filesUploadPromises = [];
        for (const file of files) {
            filesUploadPromises.push(fileUploading(file));
        }

        //luego de tener todas las promesas las resolvemos juntas
        const images = await Promise.all(filesUploadPromises);
        
        dispatch(setPhotosToActiveNote(images))
    }
}