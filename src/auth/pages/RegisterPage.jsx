import { Link as RouterLink } from "react-router-dom";
import { Button, Link, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";


export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
    <form action="">

      <Grid container>
        {/* inputs */}
        <Grid item xs={12} sx={{marginBottom: 2}}>
          <TextField label='Nombre completo' type='text' placeholder="..." fullWidth/>
        </Grid>
        <Grid item xs={12} sx={{marginBottom: 2}}>
          <TextField label='Mail' type='mail' placeholder="correo@correo.com" fullWidth/>
        </Grid>
        <Grid item xs={12} sx={{marginBottom: 2}}>
          <TextField label='Contraseña' type='password' fullWidth/>
        </Grid>
        <Grid item xs={12}>
          <TextField label='Confirmar contraseña' type='password' fullWidth/>
        </Grid>

        {/* Buttons */}
        <Grid container
          spacing={2}
          sx={{marginTop: 1, marginBottom: 2}}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
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
