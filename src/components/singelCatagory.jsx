import { Box, Card, CardActionArea, Typography  } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SingelCatagory(props) {
    const navigate = useNavigate()

    const gosingledetailspage=()=>{
        navigate(`/catagory/${item?.title}/${item?.id}`)
    }
    const {item}= props
    
  return (
   
    <CardActionArea onClick={gosingledetailspage}>
        <Card style={{
            width: '100%',
            height: '100px',
            backgroundColor: '#6275A3',
            backgroundImage: `url(${item?.image})`,
            backgroundSize: '100% 100%',
            padding: '5px',
            color: 'white',
            
        }}>
           <Box>
            <Typography variant='h4'>
                {
                    item?.title
                }
              
            </Typography>

           </Box>
        </Card>
    </CardActionArea>
  )
}
