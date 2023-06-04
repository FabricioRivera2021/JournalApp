import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
// eslint-disable-next-line no-unused-vars
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"


export const JournalPage = () => {
  return (
    //Si queremos que cambide de elemento a un h1 por ejemplo le ponemos
    //variant='h1' si solo queremos que cambie la etiqueta pero se siga viendo igual
    // ponemos component
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia eligendi deserunt optio suscipit omnis sunt, ab necessitatibus impedit soluta dolorum nisi magnam ex nam officia ipsa dolores, recusandae illum!</Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.9
          },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined
          sx={{
            fontSize: 30
          }} 
        />
      </IconButton>

    </JournalLayout>
  )
}
