import * as React from 'react';
import { FormControlLabel, Grid, TextField, Button, AppBar, Toolbar, Typography, Box, Stack, Fab } from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import {AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import logo from './eusync.png';
import './styles.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Header'
import Primary from './Primary'
import Login from './Login'

// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
      <div>
        <Router>
        <Header/>
          <Routes>
            <Route path = '/' element = {<Primary/>}/>
            <Route path = '/login' element = {<Login/>}/>
          </Routes>
        </Router>
      </div>
    )
}

export default App;
