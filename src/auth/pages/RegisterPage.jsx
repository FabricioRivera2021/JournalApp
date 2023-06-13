/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks";


const formData = {
  email: '',
  password: '',
  confirmPass: '',
  displayName: ''
}

/*Validaciones personalizadas, se le pasa como parametro a el useForm, como segundo parametro */
const formValidation = {
  email: [ (value) => value.includes('@'), 'El correo debe contener un signo de @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener mas de 6 caracteres'],
  confirmPass: [ (value) => value.length >= 6, 'El password debe de tener mas de 6 caracteres'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formState, displayName, email, password, confirmPass, onInputChange, 
          isFormValid, displayNameValid, emailValid, passwordValid, confirmPassValid
        } = useForm(formData, formValidation);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;

    // console.log(formState);
    dispatch(startCreatingUserWithEmailAndPassword(formState))
  }

  return (
  <AuthLayout title="Register">
    <form onSubmit={onSubmit}>

      <Grid container>
        {/* inputs */}
        <Grid item xs={12} sx={{marginBottom: 2}}>
          <TextField label='Nombre completo' 
                     type='text' 
                     placeholder="..." 
                     fullWidth name="displayName" 
                     value={displayName} 
                     onChange={onInputChange}
                     error={ !!displayNameValid && formSubmitted }//se usa doble negacion para q no tire el error de q es un string el chinguenguecncha
                     helperText={ displayNameValid }              // el form submitted es para q solo se evalue luego de q se mande algo la 1era vez
          />
        </Grid>
        <Grid item xs={12} sx={{marginBottom: 2}}>
          <TextField label='Mail' 
                     type='mail' 
                     placeholder="correo@correo.com" 
                     fullWidth 
                     name="email" 
                     value={email} 
                     onChange={onInputChange}
                     error={ !!emailValid && formSubmitted }
                     helperText={ emailValid }
          />
        </Grid>
        <Grid item xs={12} sx={{marginBottom: 2}}>
          <TextField label='Contraseña' 
                     type='password' 
                     fullWidth 
                     name="password" 
                     value={password} 
                     onChange={onInputChange}
                     error={ !!passwordValid && formSubmitted }
                     helperText={ passwordValid }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label='Confirmar contraseña' 
                     type='password' 
                     fullWidth 
                     name="confirmPass" 
                     value={confirmPass} 
                     onChange={onInputChange}
                     error={ !!confirmPassValid && formSubmitted }
                     helperText={ confirmPassValid }
          />
        </Grid>

        {/* Buttons */}
        <Grid container
          spacing={2}
          sx={{marginTop: 1, marginBottom: 2}}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit">
                Registrarme
              </Button>
            </Grid>
        </Grid>

          {/* Link de login */}
         <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>¿Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Ingresar
              </Link>
          </Grid>
        
      </Grid>

    </form>
  </AuthLayout>
  )
}
