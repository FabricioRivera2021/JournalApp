import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    //Si queremos que cambide de elemento a un h1 por ejemplo le ponemos
    //variant='h1' si solo queremos que cambie la etiqueta pero se siga viendo igual
    // ponemos component
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia eligendi deserunt optio suscipit omnis sunt, ab necessitatibus impedit soluta dolorum nisi magnam ex nam officia ipsa dolores, recusandae illum!</Typography> */}

      {/* <NothingSelectedView /> */}
      
      <NoteView />
    </JournalLayout>
  )
}
