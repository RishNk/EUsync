import * as React from 'react';
import { FormControlLabel, Switch, Grid, TextField, Button, AppBar, Toolbar, Typography, Box, Stack, Fab, Collapse } from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import {AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import logo from './eusync.png';
import './styles.css';
import Optional from './Optional';
const altTheme = createTheme({
    palette: {
      primary: {main: '#CD3C38'},
      secondary: {main: '#FFFFFF'}
    }
  });


function MultiCity (props:any){
    var fields:any = []
    for (var i = 0; i<props.cities; i++){
      const x = i
      const handleCity = (e:any) => {
        props.setMiddle({...props.middle, [x]:e.target.value})
      }
      const handleCityReturn = (e:any) => {
        props.setReturnMiddle({...props.returnMiddle, [x]:e.target.value})
      }
      fields.push(
            <Stack spacing = {2} direction = {'row'}>
                <TextField sx = {{width:'50%'}} label = {i} value = {props.middle[i]} id="outlined-search" type = "search" className='whiteround' onChange  = {handleCity} > </TextField>
                <TextField sx = {{width:'50%'}} label = {props.cities-i-1} value = {props.returnMiddle[props.cities-i-1]} id="outlined-search" type = "search" className='whiteround' onChange  = {handleCityReturn}> </TextField>
            </Stack>
      )
    }
    return( <>
        {fields}
        </>)
  }

  function Swap(props:any){
    return(
        <Stack spacing = {1}>
                  <Fab color = 'primary' onClick = {e => {
                    props.setCities(props.cities+1)
                    props.setMiddle({...props.middle, [props.cities]:''})
                    console.log(props.middle)
                  }}>
                    add
                  </Fab>
                  <Fab color = 'primary' onClick = {e => {
                    props.setCities(Math.max(props.cities-1,0))
                  }}>
                    remove
                  </Fab>
                </Stack>
    )
  }

function Multimodal(){
    const [outValue, setOutValue] = React.useState<Dayjs | null>(dayjs());
    const [inValue, setInValue] = React.useState<Dayjs | null>(dayjs());
    const [toValue, setToValue] = React.useState('');
    const [fromValue, setFromValue] = React.useState('');
    const [toReturnValue, setToReturnValue] = React.useState('');
    const [fromReturnValue, setFromReturnValue] = React.useState('');
    const [cities, setCities] = React.useState(0)
    const [middle, setMiddle] = React.useState({})
    const [returnMiddle, setReturnMiddle] = React.useState({})
    const [checked, setChecked] = React.useState(false);
    const [page, setPage] = React.useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme = {altTheme}>
          <Stack direction={'row'} spacing = {2} className = 'space'>
            <Box sx = {{borderTopRightRadius: '16px', borderTopLeftRadius: '16px', marginLeft: '4px'}}  className = {(page === false) ? 'redround' : 'whiteround'}>
              <Button className = 'centered' variant="text" onClick = {()=>{setPage(false)}} color = {(page === false) ? 'secondary' : 'primary'}>Return</Button>
            </Box>
            <Box sx = {{borderTopRightRadius: '16px', borderTopLeftRadius: '16px'}} className = {(page === true) ? 'redround' : 'whiteround'}>
              <Button className = 'redround' variant="text" onClick = {()=>{setPage(true)}} color = {(page === true) ? 'secondary' : 'primary'}>One way</Button>
            </Box>
          </Stack>
        </ThemeProvider>
        <Box sx={{ borderRadius: '16px' }} className = 'div' width = {'60%'}>
          <Grid container spacing = {2} width = '100%'>
            <ThemeProvider theme = {altTheme}>
              <Grid item xs = {10}>
                <Stack spacing = {1} className = 'upperstack' >
                    <Stack spacing = {26} direction = {'row'}>
                        <p className='namess'>Outbound</p>
                        <p className='namess'>Inbound</p>
                    </Stack>
                <Stack spacing = {2} direction = {'row'}>
                  <TextField sx = {{width:'50%'}} id="outlined-search" label="from" type="search" className='whiteround' value={fromValue}
                onChange={e => {
                  setFromValue(e.target.value);
                }}/>

                    <TextField sx = {{width:'50%'}} id="outlined-search" label="to" type="search" className='whiteround' value={fromReturnValue}
                onChange={e => {
                  setFromReturnValue(e.target.value);
                }}/>

                </Stack>
                    
                  <MultiCity middle = {middle} setMiddle = {setMiddle} cities = {cities} returnMiddle = {returnMiddle} setReturnMiddle = {setReturnMiddle} />
                  <Stack spacing = {2} direction = {'row'}>
                    <TextField sx = {{width:'50%'}} id="outlined-search" label="to" type="search" className='whiteround' value = {toValue} 
                    onChange = {e => {
                        setToValue(e.target.value);
                    }} />
                    <TextField sx = {{width:'50%'}} id="outlined-search" label="from" type="search" className='whiteround' value = {toReturnValue} 
                    onChange = {e => {
                        setToReturnValue(e.target.value);
                    }} />
                  </Stack>
                </Stack>
              </Grid>
              
              <Grid item xs = {2}>
                <Swap fromValue = {fromValue} toValue = {toValue} setFromValue = {setFromValue} setToValue = {setToValue} cities = {cities} setCities = {setCities} middle = {middle} setMiddle = {setMiddle} />
              </Grid>
            </ThemeProvider>

            <Grid item xs = {6}>
              <Stack spacing = {1} className = {'stack'} width = {'78%'}>
                <p className='names'>Outbound</p>
                <DateTimePicker
                className='dtp'
                renderInput={(props) => <TextField {...props} sx={{
                  svg: 'green',
                  input: 'yellow',
                  label: 'pink' 
                }}/>}
                label="date"
                value={outValue}
                onChange={(newValue) => {
                  setOutValue(newValue);
                }}
              />
              </Stack>
            </Grid>
            <Optional page = {page} checked = {checked} handleChange = {handleChange} inValue = {inValue} setInValue = {setInValue} />
            </Grid>
        </Box>
      </LocalizationProvider>
    )
}

export default Multimodal