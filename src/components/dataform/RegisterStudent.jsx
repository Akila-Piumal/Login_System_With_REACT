import { Avatar, Button, FormControl, Grid, Paper, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField'
import './RegisterStudent.css'
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DataFormCommon from '../common/DataFormCommon';
import {Gender} from '../../data/Gender'
import {Courses} from '../../data/Courses'

// Get data from local storage
const collectDataFromLocalStorage = () => {
    const data = localStorage.getItem('formDetails');
    if(data){
        return JSON.parse(data);
    } else {
        return [];
    }
}

const RegisterStudent = () => {

    // state Management
    const [stuId,setStuId] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [address,setAddress] = useState("");
    const [email,setEmail] = useState("");
    const [gender,setGender] = useState("");
    const [course,setCourse] = useState("");

    // set form details
    const [formDetails,setFormDetails] = useState(collectDataFromLocalStorage());

    const handleonsubmit = (e) =>{
        e.preventDefault();

        const formData = {
            stuId,
            firstName,
            lastName,
            address,
            email,
            gender,
            course
        }

        console.log(formData);

        setFormDetails([...formDetails,formData])

        setStuId("");
        setFirstName("");
        setLastName("");
        setAddress("");
        setEmail("");
        setGender("");
        setCourse("");
    }


    //Save data in local storage
    useEffect(()=>{
        localStorage.setItem('formDetails',JSON.stringify(formDetails));
    },[formDetails]);

  const paperStyle={padding: 20, height:'110vh', width:'60vw', margin:'80px auto'}

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

                  <DataFormCommon
                        className="forminput-age"
                        label="Student Id"
                        variant="outlined"
                        type='number'
                        required='required'
                        value={stuId}
                        onChange={setStuId}
                  />

                  <DataFormCommon
                        className='forminput'
                        label="First Name"
                        variant="outlined"
                        type='text'
                        required='required'
                        value={firstName}
                        onChange={setFirstName}
                  />

                  <DataFormCommon
                        className='forminput'
                        label="Last Name"
                        variant="outlined"
                        type='text'
                        required='required'
                        value={lastName}
                        onChange={setLastName}
                  />

                  <DataFormCommon
                        className='forminput'
                        label="Address"
                        variant="outlined"
                        type='text'
                        required='required'
                        value={address}
                        onChange={setAddress}
                  />

                  <DataFormCommon
                        className='forminput'
                        label="Email"
                        variant="outlined"
                        type='email'
                        required='required'
                        value={email}
                        onChange={setEmail}
                  />

                  <FormControl>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className='input-data'
                            label="Gender"
                            required
                            value={gender}
                            onChange={e=>setGender(e.target.value)}
                        >
                            <MenuItem value="Gender"><em>None</em></MenuItem>
                            <MenuItem value={Gender.Gender1}>Male</MenuItem>
                            <MenuItem value={Gender.Gender2}>Female</MenuItem>
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
                            value={course}
                            onChange={e=>setCourse(e.target.value)}
                        >
                            <MenuItem value="Course"><em>None</em></MenuItem>
                            <MenuItem value={Courses.Course1}>CMJD</MenuItem>
                            <MenuItem value={Courses.Course2}>GDSE</MenuItem>
                            <MenuItem value={Courses.Course3}>DEP</MenuItem>
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