/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { cleanMessageSaved, setActiveNote } from "../../store/journal/journalSlice";
import { startDeletingNote, startSavingNote, startUploadingFiles } from "../../store/journal/thunks";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

  const dispatch = useDispatch();

          //note es el alias de active
  const { active: note, messageSaved, isSaving } = useSelector( state => state.journal );

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toLocaleString();
  }, [date]);

  const fileInputRef = useRef();
  
  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if(messageSaved.length > 0){
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
    return () => {
      dispatch(cleanMessageSaved())
    }
  }, [messageSaved])
  
  

  const onSaveNote = () => {
    dispatch( startSavingNote() );
  }

  const onFileInputChange = ({target}) => {
    if(target.files === 0) return;
    // console.log('subiendo archivos')
    dispatch(startUploadingFiles(target.files))
  }

  const onDelete = () => {
    // console.log('startDeletingNote')
    dispatch(startDeletingNote());
  }


  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginBottom: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          { dateString }
        </Typography>
      </Grid>
      <Grid item>

        <input 
          type="file" 
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{display: 'none'}}/>

        <Button
          color="primary"
          disabled={ isSaving }
          onClick={ () => fileInputRef.current.click() }>
          <UploadOutlined />
          Subir imagen
        </Button>

        <Button 
          disabled={ isSaving }
          onClick={ onSaveNote }
          color="primary" 
          sx={{ padding: 2 }}>
          <SaveOutlined
            sx={{
              fontSize: 30,
              mr: 1,
            }}
          />
          Guardar
        </Button>


      </Grid>


      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          label="Titulo"
          name="title"
          value={title}
          onChange={onInputChange}
          autoFocus
          sx={{
            border: "none",
            mb: 1,
          }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          label="Notas"
          value={body}
          name="body"
          onChange={onInputChange}
          minRows={5}
          sx={{
            border: "none",
            mb: 1,
          }}
        />
      </Grid>

      <Grid
        container
        justifyContent='end'>
          <Button
            onClick={onDelete}
            sx={{
              mt: 2,
            }}
            color="error">
            <DeleteOutline />
            Borrar
          </Button>
      </Grid>

      <ImageGallery images={ note.imageUrls }/>
    </Grid>
  );
};
