import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate and Router // Correct import

export default function BrandName() {
  const navigate = useNavigate(); // Renamed from history to navigate
  
 return (
    <AppBar position='sticky'>
        <Toolbar>
            <Button onClick={()=>navigate('/')}  color='inherit' >
              <Typography>Bd Brand Shopping</Typography>
            </Button>
        </Toolbar>
    </AppBar>
  );
}
