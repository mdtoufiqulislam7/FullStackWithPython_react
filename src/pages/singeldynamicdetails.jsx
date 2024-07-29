import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { domain } from './../env';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Card, Container, Grid, IconButton, TextField, Typography } from  '@mui/material'
import SingeReview from '../components/CategoryProductssubcomponent/SingeReview'
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Singeldynamicdetails() {
  const [dynamicdata,setdynamicdata]=useState(null)

  const {id} = useParams()
  useEffect(()=>{
    const dynamicdetails=async()=>{
      try {
        const response = await axios.get(`${domain}/api/catagorydynamic/${id}/`)
        
        setdynamicdata(response.data[0])
        
      } catch (error) {
        console.error('this dynamic error component',error)
        
      }

    }
    dynamicdetails()

  },[id])
  useEffect(()=>{
    const addviewdata=async()=>{
        try {
            const response = await axios.post(`${domain}/api/addview/`,{
                id:id
            })
            console.log(response.data)
            
        } catch (error) {
            console.error('errer this dataview page',error)
            
        }

    }
    addviewdata()

  },[])
  return (
    <Container style={{
      paddingTop:'10px'
  }} >
  <Card>
  <Grid container >
      <Grid item xs={12} sm={12} md={5} lg={5} >
          <img style={{
              width:'100%',
              height:'auto'
          }} src={dynamicdata?.image} alt={dynamicdata?.title}/>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7} >
          <Grid container style={{marginLeft:'10px'}}>
              <Grid item xs={12} md={6} lg={6} >
                  <Typography variant='h4' >{dynamicdata?.title}</Typography>
                  <Box>
                      {

                          dynamicdata?.category?.map((item,i)=><Button key={i}>{item?.title}</Button>)
                      }
                  </Box>
              
                      <Box>
                          {
                              dynamicdata?.brand && 
                      <Button variant='outlined' >{dynamicdata?.brand?.title}</Button>
                          }
                      </Box>
               
                  <Box>
                      {
                          dynamicdata?.discount > 0 && <Box style={{
                              fontSize:'40px'
                          }} >{dynamicdata?.discount}% OFF</Box>
                      }
                  </Box>
                  <Box>
                      {
                          dynamicdata?.oldprice && <Box style={{
                              fontSize:'40px',
                              color:'red',
                              textDecoration: 'line-through',
                              marginRight:'10px'
                          }} component='span' >{ dynamicdata?.oldprice} TK</Box>
                      }
                       <Box style={{
                             fontSize:'40px',
                              color: 'black'
                       }} component='span' >{ dynamicdata?.price} TK</Box>
                       <Box style={{margin:'10px 0px'}}>

                       <Button size='large' variant='outlined' >Add To Cart</Button>
                       </Box>
                  </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6} >
                  <Card style={{
                      padding:'10px',
                      margin:'15px 0px',
                      display:'flex',
                      justifyContent:'center'
                  }} >
                      <Button
                      endIcon={
                          <VisibilityIcon />
                      }
                      color='primary' size="large" >{dynamicdata?.view}</Button>
                  </Card>
              </Grid>
              <Typography>{dynamicdata?.details}</Typography>
           
          </Grid>
              <Typography variant='h3' align='center' >Review</Typography>
              <Box p={3}>
                  <TextField
                      label='Add Review..'
                      style={{width:'100%'}}
                      variant='outlined'
                      InputProps={{
                          endAdornment:(
                              <IconButton>
                                  <SendIcon />
                              </IconButton>
                          )
                      }}
                  />
                  {
                      dynamicdata?.review?.map((item,i)=><SingeReview key={i} item={item} />)
                  }
              </Box>
      </Grid>
  </Grid>
  </Card>
</Container>
  )
}
