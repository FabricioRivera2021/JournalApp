import { AppRouter } from "./router/AppRouter"
import { BrowserRouter } from "react-router-dom"



export const JournalApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
