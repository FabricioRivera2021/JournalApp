import { TurnedInNot } from "@mui/icons-material"
import { Box, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"



// eslint-disable-next-line react/prop-types
export const SideBar = ({drawerWidth}) => {
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
                    Hola mundo
                </Typography>
            </Toolbar>

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid
                                    container
                                >
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={ 'Lorem ipsun sit amen y la puta que te pario' } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ) )
                }
            </List>

        </Drawer>


    </Box>
  )
}
