import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { domain } from '../env'
import Carousel from 'react-material-ui-carousel'
import SliderItem from './CategoryProductssubcomponent/Slideritem'
export default function BrandName() {
  const [slider,setslider] = useState(null)
  useEffect(()=>{
    const sliderprod = async()=>{
      try {
        const response = await axios.get(`${domain}/api/slider/`)
        console.log('this is slider data',response.data)
        setslider(response.data)
      } catch (error) {
        console.log('this is sliderdata error',error)
        
      }

    }
    sliderprod()
    
  },[])
  return (
    <Carousel interval= '2000'
    stopAutoPlayOnHover = 'true'>
      {
        slider?.map((item,idx)=>(<SliderItem item={item} />))
      }

    
    </Carousel>
  )
}
