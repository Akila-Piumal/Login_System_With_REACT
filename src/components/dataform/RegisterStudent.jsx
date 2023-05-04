import { Avatar, Button, FormControl, Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField'
import './RegisterStudent.css'
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const RegisterStudent = () => {

  const paperStyle={padding: 20, height:'110vh', width:'60vw', margin:'80px auto'}

  const handleonsubmit = (e) =>{
    alert("Ok")
  }

  return (
      <Grid className='main-outer'>
          <form onSubmit={handleonsubmit}>
              <Paper
                  elevation={10}
                  style={paperStyle}
                  className='stu-detail-form'
              >

                  <h1>Please fill all the fields.</h1>
                  <div>
                      <Avatar><AccountCircleIcon/></Avatar>
                  </div>

                  <TextField 
                      className='forminput-age'
                      label="Student Id"
                      variant="outlined"
                      type='number'
                      required='required'
                  />

                  <TextField 
                      className='forminput'
                      label="First Name"
                      variant="outlined"
                      type='text'
                      required='required'
                  />

                  <TextField 
                      className='forminput'
                      label="Last Name"
                      variant="outlined"
                      type='text'
                      required='required'
                  />

                  <TextField 
                      className='forminput'
                      label="Address"
                      variant="outlined"
                      type='text'
                      required='required'
                  />

                  <TextField 
                      className='forminput'
                      label="Email"
                      variant="outlined"
                      type='email'
                      required='required'
                  />

                  <FormControl>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className='input-data'
                            label="Gender"
                            required
                        >
                            <MenuItem value="Gender"><em>None</em></MenuItem>
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                        </Select>
                  </FormControl>

                  <FormControl>
                        <InputLabel id="demo-simple-select-label">Course</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className='input-data'
                            label="Course"
                            required
                        >
                            <MenuItem value="Course"><em>None</em></MenuItem>
                            <MenuItem value="cmjd">CMJD</MenuItem>
                            <MenuItem value="gdse">GDSE</MenuItem>
                            <MenuItem value="dep">DEP</MenuItem>
                        </Select>
                  </FormControl>

                  <Stack direction="row" spacing={2}>
                    <Button variant='outlined' color='success' type='submit'>
                        Save
                    </Button>

                    <Button variant='outlined' color='error' type='reset'>
                        Reset
                    </Button>
                  </Stack>
                  
              </Paper>
          </form>
      </Grid>
  )
}

export default RegisterStudent