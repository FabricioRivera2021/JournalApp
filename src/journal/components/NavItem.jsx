/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { setActiveNote } from "../../store/journal/journalSlice"

export const NavItem = ({ title = '', body, id, date, imageUrls = [], toggleSideBar}) => {

    const dispatch = useDispatch();

    // console.log(imageUrls)

    const onClick = () => {
        dispatch(setActiveNote({
            id,
            title,
            body,
            date,
            imageUrls
        }))
        toggleSideBar();
    }

    const newTitle = useMemo( () => {
        return title.length > 15
            ? title.substring(0,15) + '...'
            : title;
    }, [title])

    const newBody = useMemo( () => {
        return body.length > 17
            ? body.substring(0,17) + '...'
            : body;
    }, [body])


    return (
        <ListItem disablePadding>
            <ListItemButton
                onClick={onClick}
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid
                    container
                >
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={newBody} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
