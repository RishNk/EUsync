import * as React from 'react';
import { FormControlLabel, Switch, Grid, TextField, Button, AppBar, Toolbar, Typography, Box, Stack, Fab, Autocomplete, Collapse } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import logo from './eusync.png';
import './styles.css';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Optional from './Optional';


const altTheme = createTheme({
  palette: {
    primary: { main: '#CD3C38' },
    secondary: { main: '#FFFFFF' }
  }
});

const StyledTextField = styled(TextField)`
  input[type = 'string']::-webkit-clear-button {
    {
    display: none;
  }
`;

// interface OptionalProps {
//   page: number,
//   checked: boolean,
//   inValue: string,
// }



function MultiCity(props: any) {
  var fields: any = []
  for (var i = 0; i < props.cities; i++) {
    const x = i
    const handleCity = (e: any) => {
      props.setMiddle({ ...props.middle, [x]: e.target.value })
    }
    fields.push(
      <TextField key={i} label={i} value={props.middle[i]} id="outlined-search" type="search" className='whiteround' onChange={handleCity}> </TextField>
    )
  }
  return (<>
    {fields}
  </>)
}


function Swap(props: any) {
  if (props.page === 0 || props.page === 1) {
    return (
      <Fab color='primary' onClick={e => {
        let temp = props.fromValue
        props.setFromValue(props.toValue)
        props.setToValue(temp)
      }}>
        swap
      </Fab>
    )
  }
  else {
    return (
      <>
        <Stack spacing={1}>
          <Fab color='primary' onClick={e => {
            props.setCities(props.cities + 1)
            props.setMiddle({ ...props.middle, [props.cities]: '' })
            console.log(props.middle)
          }}>
            add
          </Fab>
          <Fab color='primary' onClick={e => {
            props.setCities(Math.max(props.cities - 1, 0))
          }}>
            remove
          </Fab>
        </Stack>
      </>
    )
  }
}

function Primary() {
  const [outValue, setOutValue] = React.useState<Dayjs | null>(dayjs());
  const [inValue, setInValue] = React.useState<Dayjs | null>(dayjs());
  const [toValue, setToValue] = React.useState('');
  const [fromValue, setFromValue] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [page, setPage] = React.useState(0)
  const [cities, setCities] = React.useState(0)
  const [middle, setMiddle] = React.useState({})
  const [disabled, setDisabled] = React.useState(false)
  const [bike, setBike] = React.useState(false)
  const [autoOutValue, setAutoOutValue] = React.useState('')
  const [moreOptions, setMoreOptions] = React.useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const locations = [
    { label: "London" },
    { label: "Cheltenham" },
    { label: "" }
  ]

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={altTheme}>
        <Stack direction={'row'} spacing={2} className='space'>
          <Box sx={{ borderTopRightRadius: '16px', borderTopLeftRadius: '16px', marginLeft: '4px' }} className={(page === 0) ? 'redround' : 'whiteround'}>
            <Button className='centered' variant="text" onClick={() => { setPage(0); setCities(0) }} color={(page === 0) ? 'secondary' : 'primary'}>Return</Button>
          </Box>
          <Box sx={{ borderTopRightRadius: '16px', borderTopLeftRadius: '16px' }} className={(page === 1) ? 'redround' : 'whiteround'}>
            <Button className='redround' variant="text" onClick={() => { setPage(1); setCities(0) }} color={(page === 1) ? 'secondary' : 'primary'}>One way</Button>
          </Box>
        </Stack>
      </ThemeProvider>
      <Box sx={{ borderRadius: '16px' }} className='div' width={'60%'}>
        <Grid container spacing={2} width='100%'>
          <ThemeProvider theme={altTheme}>
            <Grid item xs={10}>
              <Stack spacing={1} className='upperstack' width='90%'>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={locations}
                  onChange={(e, value) => {
                    setFromValue(value['label'])
                  }}
                  value={fromValue}

                  isOptionEqualToValue={(option, value) => option.label === value.label}
                  renderInput={(params) => <StyledTextField {...params} id="outlined-search" label="from" type="search" className='whiteround'
                  />}
                />

                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  onChange={(e, value) => {
                    setToValue(value['label'])
                  }}
                  isOptionEqualToValue={(option, value) => option.label === value.label}
                  value={toValue}
                  options={locations}
                  renderInput={(params) => <StyledTextField {...params} id="outlined-search" label="to" type="search" className='whiteround' />}
                />
              </Stack>
            </Grid>

            <Grid item xs={2}>
              <Swap page={page} fromValue={fromValue} toValue={toValue} setFromValue={setFromValue} setToValue={setToValue} cities={cities} setCities={setCities} middle={middle} setMiddle={setMiddle} />
            </Grid>
          </ThemeProvider>

          <Grid item xs={5}>
            <Stack spacing={1} className={'stack'}>
              <p className='names'>Outbound</p>
              <DateTimePicker
                className='dtp'
                renderInput={(props) => <TextField {...props} sx={{
                  svg: 'green',
                  input: 'yellow',
                  label: 'pink'
                }} />}
                label="date"
                value={outValue}
                onChange={(newValue) => {
                  setOutValue(newValue);
                }}
              />
            </Stack>

          </Grid>
          <Optional page={page} checked={checked} handleChange={handleChange} inValue={inValue} setInValue={setInValue} />
          <Grid item xs = {12}>
          <FormControlLabel control={<Switch checked={moreOptions} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setMoreOptions(event.target.checked);
              }} />} className='text' label="More Options" />
          </Grid>
          <Grid item xs={10}>
          <Collapse in = {moreOptions}>
          
            <Stack direction={'row'} spacing={1}>
              <FormControlLabel control={<Switch checked={disabled} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDisabled(event.target.checked);
              }} />} className='text' label="Disabled Access" />
              <FormControlLabel control={<Switch checked={bike} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setBike(event.target.checked);
              }} />} className='text' label="Bikes" />

            </Stack>

          
          </Collapse>
          </Grid>
          <ThemeProvider theme={altTheme}>
                <Fab color='primary' className='left' onClick={e => {
                  console.log(fromValue)
                  console.log(toValue)
                }}>
                  Submit
                </Fab>
              </ThemeProvider>
        </Grid>
      </Box>
    </LocalizationProvider>
  )
}

export default Primary;
