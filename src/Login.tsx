import * as React from 'react';
import './styles.css'
import Header from './Header';
import {TextField, Button, Box, Stack} from '@mui/material'
import {ThemeProvider, createTheme} from '@mui/material/styles'

const theme = createTheme({
    palette: {
      primary: {main: '#CD3C38'},
      secondary: {main: '#FFFFFF'}
    }
  });



function Login() {

    const [emailValue, setEmailValue] = React.useState('')
    const [passwordValue, setPasswordValue] = React.useState('')

    return (
        <div>
            
            <ThemeProvider theme = {theme}>
                <Box sx={{ borderRadius: '16px' }} className='far' width = '40%'>
                    <form>
                        <Stack spacing = {2} width = '40%' className='login'>
                            <TextField variant='standard' label = 'email' color='secondary' required = {true} value = {emailValue} 
                            onChange = {e=>{
                                setEmailValue(e.target.value)
                            }}
                            />
                            <TextField variant='standard' label = 'password' color = 'secondary' required = {true} value = {passwordValue}
                            onChange = {e=>{
                                setPasswordValue(e.target.value)
                            }}
                            />
                            <Button type  = 'button' color = 'secondary'>
                                Log in
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default Login