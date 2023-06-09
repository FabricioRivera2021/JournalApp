import { useMemo } from "react";
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'
import { useDispatch, useSelector } from "react-redux";



export const LoginPage = () => {

  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "fabricio.rivera2012@gmail.com",
    password: "12345"
  })

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = (e)=>{
    e.preventDefault();

    dispatch(checkingAuthentication());
    console.log({email, password});
  }

  const onGoogleSignIn = ()=> {
    dispatch(startGoogleSignIn());
    console.log('google sign in')
  }

  return (
    <AuthLayout title="Login">
        <form onSubmit={onSubmit}>

          <Grid container>
            {/* inputs */}
            <Grid item xs={12} sx={{marginBottom: 2}}>
              <TextField label='Correo' type='email' placeholder="Correo@correo.com" name="email" value={ email } onChange={onInputChange} fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField label='Contraseña' type='password' name="password" value={password} onChange={onInputChange} fullWidth/>
            </Grid>

            {/* Buttons */}
            <Grid container
              spacing={2}
              sx={{marginTop: 1, marginBottom: 2}}>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating} /*si esta checkeando el login se deshabilita el boton*/ >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>                                       {/*si esta checkeando el login se deshabilita el boton*/}
                  <Button variant="contained" fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}>
                    <Google />
                    <Typography sx={{marginLeft: 1}}>Google</Typography>
                  </Button>
                </Grid>
            </Grid>

            {/* Link de registro */}
            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>

        </form>
    </AuthLayout>
  )
}
