import React from 'react'
import Allheadlin from '../Headlines/Allheadlin'
import { useEffect,useState } from 'react'
import axios from 'axios';
import { domain } from '../env';
import { Grid } from '@mui/material';
import SingelCatagory from './singelCatagory';
export default function BrandName() {
  const [catagory,setcatagory]= useState(null)
  useEffect(()=>{
    const getcatagoryname=async()=>{
        try {
            const response = await axios.get(`${domain}/api/categoryisview/`)
            
            setcatagory(response.data)
            
            
        } catch (error) {
            console.error('error this category name secton',error)
            
        }



    }
    getcatagoryname()
   
 
  },[])  
  return (
    <Grid container spacing={3}> 
    <Allheadlin title={'all'} subtitle={"category"} />
    {
      catagory?.map((item,idx)=>(<Grid key={idx} item xs={6} sm={3} md={2} lg={2} > <SingelCatagory item={item} /> </Grid>))
    }
    </Grid>
  )
}
