/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks/useCheckAuth';

export const AppRouter = () => {

  const { status } = useCheckAuth();
  
  //pantalla de checkear autenticacion
  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  console.log(status)
  return (
    <Routes>
        {
          (status === 'authenticated')
          ? <Route path='/*' element={ <JournalRoutes /> } />
          : <Route path='/auth/*' element={ <AuthRoutes /> }/>
        }

        <Route path='/*' element={ <Navigate to='/auth/login' /> } />
        {/* Login y registro */}
        {/* <Route path='/auth/*' element={ <AuthRoutes /> }/> */}


        {/* Journal App */}
        {/* <Route path='/*' element={ <JournalRoutes /> } /> */}


    </Routes>
  )
}
