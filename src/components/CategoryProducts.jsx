import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { domain } from '../env'
import { Box, Grid } from '@mui/material'
import Allheadlin from '../Headlines/Allheadlin'
import AllcategoryProduct from './CategoryProductssubcomponent/AllcategoryProduct'

export default function BrandName() {
   const [getproducts,setgetproducts] = useState(null)
   useEffect(()=>{
    const getproductss=async()=>{
      try {
        const response = await axios.get(`${domain}/api/categoryproduct/`)
        console.log(response.data)
        setgetproducts(response.data)
        
      } catch (error) {
        console.error('cetegory products error',error)
        
      }
      

    }
    getproductss()


   },[])
  return (
    <Grid>
      {
        getproducts?.map((item,idx)=>(<Box key={idx} Container='div'>
          <>
           <Allheadlin title={item?.title} subtitle={'products'} />
           <AllcategoryProduct products={item?.products} catagorytitle={item?.title} catagoryid = {item?.id} />
          </> 


          </Box>))
      }
    </Grid>
  )
}
