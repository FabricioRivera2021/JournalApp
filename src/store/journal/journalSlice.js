/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
                                              
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 123456222,
        //     imageUrls: [], // https://ejemplo1.jpg, https://ejemplo1.jpg
        // }

    },
    reducers: {
        creatingNewNote: (state, action) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            // console.log(action.payload.id)
            //el anterior con push tenia el problema de duplicar
            //las notas este metodo no
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            /**------------------------------------------ */
            state.notes = state.notes.map(
                note => {
                    if(note.id === action.payload.id){
                        return action.payload;
                    }
                    return note;//imprtante este return
                }
            )
            /**------------------------------------------ */
        },
        deleteNoteById: (state, action) => {

        }
    }
})

export const {
    creatingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    } = journalSlice.actions