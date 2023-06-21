/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar} from "../components";

const drawerWidth = 240;

// eslint-disable-next-line react/prop-types
export const JournalLayout = ({children}) => {

  const [sideBar, setSideBar] = useState(false);
  
  const toggleSideBar = () => {
    if(sideBar === true){
      setSideBar(false)
    }else{
      setSideBar(true)
    }
    // console.log(sideBar)
  }

  return (
    <Box sx={{display: 'flex'}}
         className="animate__animated animate__fadeIn animate__faster"
    >

        <NavBar sideBar={sideBar} toggleSideBar={toggleSideBar} drawerWidth={ drawerWidth } />

        <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} drawerWidth={ drawerWidth } />

        <Box
            component='main'
            sx={{ flexGrow: 1, padding: 3 }}
        >
            <Toolbar  />
            {children}
        </Box>
    </Box>
  )
}
