import * as React from 'react';
import { FormControlLabel, Switch, Grid, TextField, Button, AppBar, Toolbar, Typography, Box, Stack, Fab,Collapse } from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import {AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import logo from './eusync.png';
import './styles.css';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers';

function Optional (props: any){
    if (true) {
      return (
        <Collapse in = {!props.page} className = 'inbound'>
        ${!props.page && (<div className='width'>
                    <Stack spacing = {1} direction = 'row'>
                    <p className='header'>Return</p>
                    <FormControlLabel control={<Switch checked = {props.checked} onChange = {props.handleChange} />} className = 'text' label="Open Return" />
                    </Stack>
                    <DesktopDatePicker
                className='dtp'
                renderInput={(props) => <TextField {...props} sx={{ ml: 2 }} style = {{fontSize:10}}/>}
                label="date"
                disabled = {props.checked}
                value={props.inValue}
                onChange={(newValue) => {
                  props.setInValue(newValue);
                }}
                
              />
              <TimePicker
                className='dtp'
                renderInput={(props) => <TextField {...props} sx={{ ml: 2 }} label = 'date'/>}
                label="time"
                disabled = {props.checked}
                value={props.inValue}
                onChange={(newValue) => {
                  props.setInValue(newValue);
                }}
              />
                  
                    
                    
                
                    
                    
                  
                
        </div>)}
        </Collapse>
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