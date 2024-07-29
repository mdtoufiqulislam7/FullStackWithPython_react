import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Singleproducts from './singleproducts'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

export default function AllcategoryProduct({products,showall=false,catagorytitle ,catagoryid}) {
    const navigate = useNavigate()

    const gosingledetailspage=()=>{
        navigate(`/catagory/${catagorytitle}/${catagoryid}`)
    }
    
  return (
    <Grid container style={{
        marginTop: '15px'
    }} spacing={3} >
        {
            products?.map((item,idx)=>(<>
            {
                showall?(
                    <Grid key={idx} item md={2} sm={4}>
                        <Singleproducts product={item}  />
                    </Grid>
                ):
                <>
                {
                    idx<=10 && (<Grid key={idx} item md={2} sm={4}>
                        <Singleproducts product={item}  />
                    </Grid>)
                }
                </>
            }
            </>))
        }
        {
         
         !showall && products.length > 11 &&
         (<Grid item 
            md={2}
            sm={4}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
          > 
          <Button onClick={gosingledetailspage}> <Typography>see more</Typography> <ExpandMoreIcon /> </Button>
          
        </Grid>)   
        }

    </Grid>
  )
}
