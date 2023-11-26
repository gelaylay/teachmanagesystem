import React, { useState } from 'react';
import { Box, Button, Grid, Tab, Typography,} from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import './style.css';
import { TabContext, TabList } from '@mui/lab';
import { useNavigate } from 'react-router-dom';

function App() {
  const [value, setValue] = useState('1');
  const [welcomeText, setWelcomeText] = useState('Welcome Back User!');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setWelcomeText(newValue === '2' ? 'Sign Up for Free!' : 'Welcome Back User!');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      if (value === '1') {
        const response = await fetch('http://localhost:8080/User/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: data.get('username'),
            userPass: data.get('password'),
          }),
        });
  
        if (response.ok) {
          // Redirect to the subject_area after successful login
          navigate('/subject_area');
        } else {
          // Handle error scenarios for login
          console.error('Login failed');
        }
      } else if (value === '2') {
        // Logic for sign-up, which is already in your code
        const response = await fetch('http://localhost:8080/User/CreateAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.get('emailAddress'),
          userName: data.get('username'),
          userPass: data.get('password'),
        }),
      });

      if (response.ok) {
        // Redirect to the subject_area after successful account creation
        navigate('/subject_area');
      } else {
        // Handle error scenarios
        console.error('Account creation failed');
      }
      }
    } catch (error) {
      console.error('Error during login or sign-up', error);

    }
  };
  return (
    <div
        style={{
          backgroundColor: '#359DD9',
          height: '100vh',
          position: 'relative',
        }}
      >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid item xs={7}>
            <Box 
              sx={{
                backgroundImage: `url(Images/bg_1.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'left',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <img
                  src="Images/title.png"
                  style={{
                    width: '80%',
      
                  }}
                  alt="logo"
                />
            </Box>          
          </Grid>
          <Grid item xs={5} sx={{bgcolor:'#D9D9D9', height:'100vh'}}>
            <Typography
              style={{
                fontFamily: 'Georgia',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '40px',
                marginTop: '15vh',
                marginBottom: '5vh',

              }}
            >
              {welcomeText}
            </Typography>
            <Box 
              sx={{ 
                ml:'60px',
                mt:'10px',
                bgcolor: '#D9D9D9', 
                height: '60vh', 
                width: '70vh', 
                boxShadow: '1px 1px 4px 5px rgba(128, 128, 128, 0.5)',
                borderRadius:'15px'
              }}>
              <Grid container rowSpacing={2} >
                <TabContext  value={value} 
                  sx={{ 
                    width:'70vh', 
                    marginTop:'10px',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',

                  }}>
                  <TabList onChange={handleChange}>
                    <Tab
                        sx={{
                          fontSize: '17px',
                          fontFamily: 'Vesper',
                          color: 'gray',
                          backgroundColor: 'whitesmoke',
                          width:'25vh',
                          height:'5vh',
                          paddingTop:'20px',
                          mt: '3vh',
                          ml: '7vh',
                          '&.Mui-selected': {
                            backgroundColor: '#359DD9',
                            color: 'white',
                            fontWeight:'bold' // Change the background color when selected
                          },
                        }}
                          label="Sign In"
                          value='1'
                      />
                      <Tab
                        sx={{
                          fontSize: '17px',
                          fontFamily: 'Vesper',
                          height:'5vh',
                          color: 'gray',
                          backgroundColor: 'whitesmoke',
                          width:'30vh',
                          paddingTop:'20px',
                          mt: '3vh',
                          '&.Mui-selected': {
                            backgroundColor: '#359DD9',
                            color: 'white', 
                            fontWeight:'bold'// Change the background color when selected
                          },
                        }}
                          label="Create Account"
                          value='2'
                      />
                  </TabList>
                  <TabPanel value="1">
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                      <input
                        margin="normal"
                        id="username"
                        placeholder="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        style={{
                          marginLeft:'4vh',
                          height:'35px',
                          width:'51vh',
                          marginBottom:'10px',
                          fontSize:'16px',
                          fontFamily:'Courier'
                        }}
                      />
                      <br>
                      </br>
                      <input
                        margin="normal"
                        required
                        name="password"
                        placeholder="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        style={{
                          marginLeft:'4vh',
                          height:'35px',
                          width:'51vh',
                          fontSize:'16px',
                          fontFamily:'Courier'
                        }}
                      />
                      <br>
                      </br>
                      <Button
                      type="submit"
                        sx={{ 
                          mt: 3, 
                          mb: 2 ,
                          ml:'34vh', 
                          bgcolor:'#241571', 
                          color:'white', 
                          fontSize:'22px', 
                          paddingLeft:'6vh', 
                          paddingRight:'6vh',
                          paddingTop:'0.3vh',
                          paddingBottom:'0.3vh',
                          fontFamily: 'Lateef', 
                          '&:hover': {
                            backgroundColor: '#E39ff6',
                            color: '#241571', 
                          },
                          '&.Mui-selected': {
                            backgroundColor: '#E39ff6',
                            color: '#241571', 
                          },
                        }}
                      >
                        Sign In
                      </Button>
                   
                    </Box>
                  </TabPanel>
                  <TabPanel value="2">
                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
                  <input
                        margin="normal"
                        id="emailAddress"
                        placeholder="Email Address"
                        name="emailAddress"
                        autoComplete="emailAddress"
                        autoFocus
                        style={{
                          marginLeft:'4vh',
                          height:'35px',
                          width:'51vh',
                          marginBottom:'10px',
                          fontSize:'16px',
                          fontFamily:'Courier'
                        }}
                      />
                  <input
                        margin="normal"
                        id="username"
                        placeholder="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        style={{
                          marginLeft:'4vh',
                          height:'35px',
                          width:'51vh',
                          marginBottom:'10px',
                          fontSize:'16px',
                          fontFamily:'Courier'
                        }}
                      />
                      <br>
                      </br>
                      <input
                        margin="normal"
                        required
                        name="password"
                        placeholder="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        style={{
                          marginLeft:'4vh',
                          height:'35px',
                          width:'51vh',
                          fontSize:'16px',
                          fontFamily:'Courier'
                        }}
                      />
                      <br>
                      </br>
           
                      <Button
                        type="submit"
                        sx={{ 
                          mt: 3, 
                          mb: 2 , 
                          ml:'34vh', 
                          bgcolor:'#241571', 
                          color:'white', 
                          fontSize:'22px', 
                          paddingLeft:'6vh', 
                          paddingRight:'6vh',
                          paddingTop:'0.3vh', 
                          paddingBottom:'0.3vh', 
                          fontFamily: 'Lateef',
                          '&:hover': {
                            backgroundColor: '#E39ff6',
                            color: '#241571', 
                          },
                          '&.Mui-selected': {
                            backgroundColor: '#E39ff6',
                            color: '#241571', 
                          },
                        }}
                      >
                        Sign Up
                      </Button>
                    
                    </Box>
                  </TabPanel>
                </TabContext>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
