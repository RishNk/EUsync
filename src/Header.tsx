import * as React from 'react'
import {Toolbar, Stack, Fab, Typography, AppBar} from '@mui/material'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import logo from './eusync.png';
import { useNavigate, Link } from 'react-router-dom';



const theme = createTheme({
    palette: {
      primary: {main: '#CD3C38'},
      secondary: {main: '#cd7771'}
    }
  });

  function Fabs(props: any) {
    return(
      <Stack>
        <Fab color = 'primary' href = {props.href}></Fab>
        <p className='hori'>{props.text}</p>
      </Stack>
    )
  }

function Header() {
    const displayDesktop = () => {
      return (
        <ThemeProvider theme = {theme}>
          <Toolbar className = 'bar'>
            <img src = {logo} width = '40px' className = 'image'></img>
            {Logo}
            <Stack direction={'row'} spacing = {6} className = 'left'>
              <Fabs text = 'Search' href = '/' />
              <Fabs text = 'MultiModal' href = '/Multimodal'/>
              <Fabs text = '.'/>
              <Fabs text = 'login' href = '/login' />
            </Stack>
          </Toolbar>
        </ThemeProvider>
      )
    };
    let navigate = useNavigate();
    // const redirectRoute = routePath => {
    //   navigate(routePath);
    // };
  
    const Logo = (
      <Typography variant="h6" component="h1" letterSpacing={'20px'}>
        EUSYNC
      </Typography>
    );
    return (
      <header>
        <AppBar>{displayDesktop()}</AppBar>
      </header>
    );
  }

  export default Header