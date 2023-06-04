import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";



export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
        <form action="">

          <Grid container>
            {/* inputs */}
            <Grid item xs={12} sx={{marginBottom: 2}}>
              <TextField label='Correo' type='email' placeholder="Correo@correo.com" fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField label='Contraseña' type='password' fullWidth/>
            </Grid>

            {/* Buttons */}
            <Grid container
              spacing={2}
              sx={{marginTop: 1, marginBottom: 2}}>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
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
