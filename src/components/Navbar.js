import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Bottom nav, allows users to navigate between food categories quickly

const Navbar = () => {
  return(
    <Stack spacing={0.5} direction="row" id="nav">
      <Button variant="contained" onClick="document.getElementById('Appetizers').scrollIntoView();">Appetizers</Button>

      <Button variant="contained" onClick="document.getElementById('Entrees').scrollIntoView();">Entrees</Button>

      <Button variant="contained" onClick="document.getElementById('Soup').scrollIntoView();">Soup</Button>

      <Button variant="contained" onClick="document.getElementById('Sides').scrollIntoView();">Sides</Button>
    </Stack>
    
  )
  
};

export default Navbar;
