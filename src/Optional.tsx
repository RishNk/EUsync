import * as React from 'react';
import { FormControlLabel, Switch, Grid, TextField, Button, AppBar, Toolbar, Typography, Box, Stack, Fab,Collapse } from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import {AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import logo from './eusync.png';
import './styles.css';

function Optional (props: any){
    if (true) {
      return (
        <>
          <Grid item xs = {5}>
                  <Stack spacing = {1} className = {'stack'} width = {'80%'}>
                    <Collapse in = {!props.page}>
                    <p className='names'>Return</p>
                    <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="date"
                    disabled = {props.checked}
                    value={props.inValue}
                    onChange={(newValue) => {
                      props.setInValue(newValue);
                    }}
                  />
                  
                    </Collapse>
                    
                  </Stack>
                
                    <Collapse in = {!props.page}>
                    <FormControlLabel control={<Switch checked = {props.checked} onChange = {props.handleChange} />} className = 'text' label="Open Return" />
                    </Collapse>
                  
                </Grid>
        </>
      )
    }
    else {
      return(<>
        <Grid item xs = {12}>
          <p></p>
        </Grid>
        <Grid item xs = {12}>
          <p></p>
        </Grid>
      </>)
    }
  }

  export default Optional