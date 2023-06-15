import { CircularProgress, Grid } from "@mui/material"



export const CheckingAuth = () => {
  return (

    <Grid 
        container 
        spacing={0} 
        direction='column' 
        alignItems='center' 
        justifyContent='center' 
        sx={{
            minHeight: '100vh',
            backgroundColor: 'primary.main',
            padding: 4
            }}>
        <Grid 
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            backgroundColor='white'
            border='2px'
            sx={{width: {sm: 450},
                 height: {sm: 200},
                 borderRadius: 3,
                 opacity: 0.7}}>
                <CircularProgress
                  sx={{opacity: 1}} 
                  color="warning" />
        </Grid>

    </Grid>

  )
}
