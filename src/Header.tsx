import * as React from 'react'
import {Toolbar, Stack, Fab, Typography, AppBar, Select, MenuItem} from '@mui/material'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import logo from './eusync.png';
import { useNavigate, Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
    const [language, setLanguage] = React.useState('English')

    const handleLanguage = (event: any) => {
      setLanguage(event.target.value as string);
    };

    const displayDesktop = () => {
      return (
        <ThemeProvider theme = {theme}>
          <Toolbar className = 'bar'>
            <img src = {logo} width = '40px' className = 'image'></img>
            {Logo}
            <Stack direction={'row'} spacing = {6} className = 'left'>
            <Fab color = 'primary' href = {'/'}>
              <SearchIcon/>
            </Fab>
            <Fab color = 'primary' href = {'/Multimodal'}>
              <SearchIcon/>
            </Fab>
            <Fab color = 'primary' href = {'/'}>
              <SearchIcon/>
            </Fab>
            <Fab color = 'primary' href = {'/login'}>
              <AccountCircleIcon/>
            </Fab>
              <Select
                value = {language}
                label = 'language'
                onChange = {handleLanguage}
              >
                <MenuItem value={'English'}>English</MenuItem>
                <MenuItem value={'French'}>French</MenuItem>
                <MenuItem value={'German'}>German</MenuItem>
              </Select>
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