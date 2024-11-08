import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const EmpDashboard = () => {
    const [data,setData]= useState([])

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{

        // console.log(res.data);
        setData(res.data);
    }).catch((err)=>{
console.log(err);
    })

    
},[]);

  return (
    <div>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , backgroundColor:'#f0f4f8'}} aria-label="simple table">
        <TableHead>
          <TableRow >

            <TableCell align="right" styles={{color:'white'}}>ID</TableCell>
            <TableCell align="right" styles={{color:'white'}}>Name</TableCell>
            <TableCell align="right" styles={{color:'white'}}>Email</TableCell>
  
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor:'#f0f4f8'}}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
          
              <TableCell align="right" >{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>
  )
}

export default EmpDashboard
