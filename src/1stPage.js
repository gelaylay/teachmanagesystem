import React, { useState } from 'react';
import { Box, Fab,Grid} from '@mui/material';
import { Link, Link as RouterLink } from 'react-router-dom';

import Aboutus from './aboutus';

import './style.css';

function App() {
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleAboutUsClick = () => {
    setShowAboutUs(true);
  };
  const handleCloseAboutUs = () => {
    setShowAboutUs(false);
  };

  return (
    <div
        style={{
          backgroundColor: '#359DD9',
          height: '100vh',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(Images/bg.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        >
      <Aboutus open={showAboutUs} handleClose={handleCloseAboutUs} />
      <Grid container spacing={0}>
        <Grid item xs={12}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'right',
          marginBottom:'20vh'
        }}>
          <Fab variant="extended" color="#d9d9d9" sx={{ fontSize: '1rem', marginRight: '10px', marginTop: '10px', fontFamily: 'Roboto' }} onClick={handleAboutUsClick}>
            About Us
          </Fab>

          <Link component={RouterLink} to="/signin_signup" underline="none">
          <Fab variant="extended" color="#d9d9d9" sx={{ fontSize: '1rem', marginTop: '10px', marginRight: '10px', fontFamily: 'Roboto' }}>
            Get Started
          </Fab>
          </Link>
        </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',ml:'30px' }}>
            <img
              src="Images/title.png"
              style={{ width: '50%' }}
              alt="Title"
            />
          </Box>

        </Grid>

      </Grid>
          </Box>
        

    </div>
  );
}

export default App;
