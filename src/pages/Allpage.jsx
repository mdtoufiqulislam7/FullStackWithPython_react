import { Container } from '@mui/material'
import React from 'react'
import Sliders from '../components/Sliders'
import TrendingProdects from '../components/TrendingProdects'
import CategoryName from '../components/CategoryName'
import MostViewesProducts from '../components/MostViewesProducts'
import CategoryProducts from '../components/CategoryProducts'
import BrandName from '../components/BrandName'
function allpage() {
  return (
    <>
    <Sliders/>
    <Container>
        <TrendingProdects/>
        <CategoryName/>
        
        <CategoryProducts/>
        <MostViewesProducts/>
        <BrandName/>
    </Container>
    </>
    
  )
}

export default allpage