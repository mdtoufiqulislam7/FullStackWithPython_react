import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { domain } from '../env'
import { Grid } from '@mui/material'
import Allheadlin from '../Headlines/Allheadlin'
import Singleproducts from './CategoryProductssubcomponent/singleproducts'

export default function BrandName() {
  const [product,setproduct]=useState(null)
  useEffect(()=>{
    const trandingPro=async()=>{
      try {
        const response = await axios.get(`${domain}/api/trandingproduct/`)
        console.log('tranding product',response.data)
        setproduct(response.data)
        
      } catch (error) {
        console.error('this tranding data fatch',error)
        
      }

    }
    trandingPro()

  },[])
  return (
    <Grid container spacing={2} >
      <Allheadlin title={'Tranding'} subtitle={'Product'} />
      {product?.map((item, idx) => (
        <Grid key={idx} md={2} sm={4} item> 
          <Singleproducts product={item?.product}/>
        </Grid>
      ))}
    </Grid>
  )
}
