/* eslint-disable no-unused-vars */
import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"


export const loadNotes = async( uid = '' ) => {
    if (!uid) throw new Error('El Uid del user no existe')//por las dudas valida

    const collectionRef = collection( FirebaseDB, `${uid}/journal/notes` );
    const docs = await getDocs(collectionRef);

    const notes = []
    docs.forEach( doc => {
        notes.push({ 
            id: doc.id,
            ...doc.data() 
        })
    });

    // console.log(notes)
    return notes;
}