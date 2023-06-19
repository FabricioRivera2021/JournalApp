/* eslint-disable no-unused-vars */
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { logoutFromFirebase } from "../../store/auth";


// eslint-disable-next-line react/prop-types
export const NavBar = ({ drawerWidth }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutFromFirebase());
  }

  return (
    <AppBar position="fixed"
            sx={{ 
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml: {sm: `${drawerWidth}px`}
             }}>

        <Toolbar>
            <IconButton
                color='inherit'
                edge='start'
                sx={{mr: 2, display: { sm: 'none' }}}
                //Este es el boton que tiene q activar el navbar
            >
                <MenuOutlined />
            </IconButton>
            <Grid
             container
             direction='row'
             justifyContent='space-between'
             alignItems='center'
            >
                <Typography variant="h6" noWrap component='div'>Journal App</Typography>
                <IconButton 
                    color='error'
                    onClick={onLogout}>
                    <LogoutOutlined/>
                </IconButton>

            </Grid>
        </Toolbar>

    </AppBar>
  )
}
