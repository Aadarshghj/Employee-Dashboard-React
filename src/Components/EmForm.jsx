import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid2';
import React, { useState } from 'react'

const EmForm = () => {
const [val,setval] = useState({
    name:"",
    designation:"",
    location:"",
    salary:""
})

const inputHandler = (e)=>{
setval({...val,[e.target.name] : e.target.value})
console.log(val);

}

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Form submitted with values:', val);

  


    setval({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });


};



  return (
    <div>
        <form onSubmit={handleSubmit}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{marginTop:'2%'}}>
        <Grid size={12}>
        <TextField id="outlined-basic" name='name' label="Name"  variant="outlined"  value={val.name} onChange={inputHandler} />
        </Grid>
        <Grid size={12}>
        <TextField id="outlined-basic" name='designation' label="Designation" variant="outlined"    value={val.designation} onChange={inputHandler} />
        </Grid>
        <Grid size={12}>
        <TextField id="outlined-basic" name='location' label="Location" variant="outlined"  value={val.location}  onChange={inputHandler} />
        </Grid>
        <Grid size={12}>
        <TextField id="outlined-basic" name='salary'  label="Salary" variant="outlined"  value={val.salary} onChange={inputHandler} />
        </Grid>
        <Grid size={12}>
      <button type='submit'  variant="contained" color="primary" >Submit</button>
        </Grid>
      </Grid>
    </Box>
    </form>

    
      
    </div>
  )
}

export default EmForm
