import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { domain } from '../env'
import { Container, Grid, Typography } from '@mui/material'
import AllcategoryProduct from '../components/CategoryProductssubcomponent/AllcategoryProduct'

export default function Singelcatagorydetails() {
  const [catagorydetailsdata,setcatagorydetailsdata] = useState(null)
  useEffect(()=>{
    const catagorydetails = async()=>{
      const response = await axios.get(`${domain}/api/catagorydetails/${id}/`)
      // console.log(response.data)
      setcatagorydetailsdata(response.data[0])

    }
    catagorydetails()

  },[])
    
    const {id}=useParams()
  return (
    <Container>
      <Grid container direction={'column'} alignContent={'center'}> 
      <Typography variant='h2'> {catagorydetailsdata?.title} </Typography>
      <Typography variant='h6'> {catagorydetailsdata?.details} </Typography>
      <AllcategoryProduct products={catagorydetailsdata?.products} showall={'true'} />
      </Grid>
    </Container>
  )
}
