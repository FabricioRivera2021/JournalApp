/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSavingNote } from "../../store/journal/thunks";

export const NoteView = () => {

  const dispatch = useDispatch();

          //note es el alias de active
  const { active: note } = useSelector( state => state.journal );

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toLocaleString();
  }, [date]);
  
  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  const onSaveNote = () => {
    dispatch( startSavingNote() );
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
        <Button 
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

      <ImageGallery />
    </Grid>
  );
};
