/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Box, Drawer, Grid, IconButton, List, Toolbar, Typography, useMediaQuery } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { logoutFromFirebase } from "../../store/auth";
import { NavItem } from "./NavItem";

// eslint-disable-next-line react/prop-types
export const NavBar = ({ drawerWidth, toggleSideBar, sideBar }) => {

  const { displayName } = useSelector(state => state.auth)
  const { notes } = useSelector(state => state.journal)

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutFromFirebase());
  }

  const onClickDrawer = () => {
    toggleSideBar();
    // console.log(sideBar)
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
              onClick={onClickDrawer}
              >
              <MenuOutlined />
          </IconButton>
          <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'>
              <Typography variant="h6" noWrap component='div'>
                Journal App
              </Typography>
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
