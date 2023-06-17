/* eslint-disable no-unused-vars */
import { TurnedInNot } from "@mui/icons-material"
import { Box, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { NavItem } from "./"

// eslint-disable-next-line react/prop-types
export const SideBar = ({drawerWidth}) => {

    const { displayName } = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)

    return (
    <Box
        component='nav'
        sx={{
             width: { sm: drawerWidth },
             flexShrink: { sm: 0 }
            }}
    >
        <Drawer
            variant="permanent" //permanent - temorary
            open //open - closed
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth
                }
            }}
        >

            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>

            <List>
                {
                    notes.map( note => (
                        <NavItem key={note.id} {...note} />
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
