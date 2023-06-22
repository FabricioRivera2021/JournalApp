/* eslint-disable no-unused-vars */
import { ArrowBackIos } from "@mui/icons-material"
import { Box, Drawer, IconButton, List, Toolbar, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { useSelector } from "react-redux"
import { NavItem } from "./"

// eslint-disable-next-line react/prop-types
export const SideBar = ({drawerWidth, sideBar, toggleSideBar}) => {

    const theme = useTheme();
    const { breakpoint } = theme;

    const { displayName } = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)

    // console.log(notes)

    return (
    <Box
        component='nav'
        sx={{
             width: { sm: drawerWidth },
             flexShrink: { sm: 0 }
            }}
            color='dod'
    >

        {/* --------------------------------------------- */}
        {useMediaQuery(theme.breakpoints.up('sm')) 
            ?
                <Drawer
                    variant="permanent" //permanent - temorary
                    open={!!sideBar} //open - closed
                    sx={{
                        display: { sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                    >

                    <Toolbar
                        sx={{display: 'flex',
                        justifyContent: 'space-between'}}>
                        <Typography variant="h6" noWrap component='div'>
                            {displayName}
                        </Typography>
                        <IconButton
                        color='inherit'
                        edge='start'
                        sx={{mr: 2, display: { sm: 'none' }}}
                        onClick={toggleSideBar}
                        >
                        <ArrowBackIos />
                    </IconButton>
                    </Toolbar>

                    <List>
                        {
                            notes.map( note => (
                                <NavItem key={note.id} {...note} sideBar={sideBar} toggleSideBar={toggleSideBar} />
                            ))
                        }
                    </List>
                </Drawer>
            :
                <Drawer
                variant="temporary" //permanent - temorary
                open={!!sideBar} //open - closed
                sx={{
                    display: { sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth
                    }
                }}
                >

                <Toolbar
                    sx={{display: 'flex',
                    justifyContent: 'space-between'}}>
                    <Typography variant="h6" noWrap component='div'>
                        {displayName}
                    </Typography>
                    <IconButton
                    color='inherit'
                    edge='start'
                    sx={{mr: 2, display: { sm: 'none' }}}
                    onClick={toggleSideBar}
                    >
                    <ArrowBackIos />
                </IconButton>
                </Toolbar>

                <List>
                    {
                        notes.map( note => (
                            <NavItem key={note.id} {...note} sideBar={sideBar} toggleSideBar={toggleSideBar} />
                        ))
                    }
                </List>
                </Drawer>
        }
        {/* --------------------------------------------- */}
    
    </Box>
  )
}
