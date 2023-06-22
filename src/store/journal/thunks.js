/* eslint-disable no-unused-vars */

import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, setActiveNote, creatingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from "./journalSlice"
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
            imageUrls: []
        }

        //Pide la base de datos y el path
        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
        
        //luego pide eñ path y le pasamos la nota a guardar
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ) )
        dispatch( setActiveNote( newNote ) )
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

export const startDeletingNote = () => {
    return async(dispatch, getState) => {

        //id del usuairo logueado para buscar la nota
        const {uid} = getState().auth;
        //nota activa en la pantalla
        const {active: note} = getState().journal;

        //proceso de borrado - seleccionar la nota a borrar
        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}`);

        //eliminar la nota de firebase
        await deleteDoc(docRef);

        //borrar de la data local de redux
        dispatch(deleteNoteById(note.id));
    }
}