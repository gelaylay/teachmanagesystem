import React, { useState, } from 'react';
import { Box, Button, Grid, Tab, Typography,} from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import './style.css';
import { TabContext, TabList } from '@mui/lab';
import { useNavigate } from 'react-router-dom';

function App() {
  const [value, setValue] = useState('2');
  const [welcomeText, setWelcomeText] = useState('Sign Up for Free!');
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();
  const [isUsernameUnique,setIsUsernameUnique] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [isUsernameAndPasswordCorrect, setIsUsernameAndPasswordCorrect] = useState(true);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setWelcomeText(newValue === '2' ? 'Sign Up for Free!' : 'Welcome Back User!');
  
    // Clear input fields when switching tabs
    const nUsernameElement = document.getElementById("nUsername");
    const nPasswordElement = document.getElementById("nPassword");
    const emailAddressElement = document.getElementById("emailAddress");
  
    if (nUsernameElement && nPasswordElement && emailAddressElement) {
      nUsernameElement.value = '';
      nPasswordElement.value = '';
      emailAddressElement.value = '';
    }
  

    setIsUsernameUnique(true); // Reset the isUsernameUnique state
    setPasswordValid(true);
    setIsUsernameAndPasswordCorrect(true);
  };
  const validatePassword = (password) => {
    // Password should consist of lowercase and uppercase letters,
    // contain at least one digit, and no special characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/;
    return passwordRegex.test(password);
  };

async function createNewUser(event) {
  event.preventDefault(); // Prevent default form submission behavior

  setIsLoading(true);
  const newUsername = document.getElementById("nUsername").value;
  const newPassword = document.getElementById("nPassword").value;
  const email = document.getElementById("emailAddress").value;

    console.log('newUsername:', newUsername);
    console.log('newPassword:', newPassword);
    console.log('email:', email);


  if (newUsername && newPassword && email) {
    try {
      const isUsernameUnique = await checkUsernameUniqueness(newUsername);
      console.log('isUsernameUnique:', isUsernameUnique);

      setIsUsernameUnique(isUsernameUnique);

      if (isUsernameUnique) {
        if(validatePassword(newPassword)){
        const response = await fetch('http://localhost:8080/api/user/createAccount', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uname: newUsername, //si uname,pword,email kay sa akong server(eclipse gkan), si newUsername dri sa java
            pword: newPassword,
            email: email,
          }),
        });

        if (response.ok) {
          // Redirect to the subject_area after successful account creation
          navigate(`/subject_area/${newUsername}`);
        } else {
          // Handle error scenarios
          console.error('Account creation failed');
        }
      }else{
        setPasswordValid(validatePassword(newPassword));
      }
    }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setIsLoading(false);
    }
  } else {
    alert('Please enter your Email Address, username, and password.');
    setIsLoading(false);
  }
}

async function checkUsernameUniqueness(username) {
  try {
    const response = await fetch(`http://localhost:8080/api/user/checkUsername?username=${username}`);

    if (response.ok) {
      const data = await response.json();
      return data.isUnique !== undefined ? data.isUnique: false;
    } else {
      console.error('Error checking username uniqueness');
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}

async function signIn(event) {
  event.preventDefault();

  setIsLoading(true);
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    try {
      // Assuming you have an endpoint for user authentication
      const response = await fetch('http://localhost:8080/api/user/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uname: username,
          pword: password,
        }),
      });

      if (response.ok) {
        // Redirect to the subject_area after successful sign-in
        navigate(`/subject_area/${username}`);
      } else {
        setIsUsernameAndPasswordCorrect(false);
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setIsLoading(false);
    }
  } else {
    alert('Please enter your username and password.');
    setIsLoading(false);
  }
}


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
                fontFamily: 'PlayfairDisplay',
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
                          fontFamily: 'Poppins',
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
                            // Change the background color when selected
                          },
                        }}
                          label="Sign In"
                          value='1'
                      />

                      <Tab
                        sx={{
                          fontSize: '17px',
                          fontFamily: 'Poppins',
                          height:'5vh',
                          color: 'gray',
                          backgroundColor: 'whitesmoke',
                          width:'30vh',
                          paddingTop:'20px',
                          mt: '3vh',
                          '&.Mui-selected': {
                            backgroundColor: '#359DD9',
                            color: 'white', 
                           // Change the background color when selected
                          },
                        }}
                          label="Create Account"
                          value='2'
                      />
                  </TabList>
                  <TabPanel value="1">
                    <Box 
                      component="form" 
                       onSubmit={signIn} 
                      noValidate 
                      sx={{ mt: 1 }}>
                      <input
                        margin="normal"
                        id="username"
                        placeholder="Username"
                         name="username" // para sa link mo appear ni
                        autoComplete="username"
                        autoFocus
                        style={{
                          marginLeft:'4vh',
                          height:'35px',
                          width:'51vh',
                          marginBottom:'10px',
                          fontSize:'16px',
                          fontFamily:'Arimo',
                          borderColor: isUsernameAndPasswordCorrect ? '' : 'red'
                        }}
                      />
                      <br>
                      </br>
                      <input
                        margin="normal"
                        required
                        name="password" // para sa link mo appear ni
                        placeholder="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        style={{
                          marginLeft:'4vh',
                          height:'35px',
                          width:'51vh',
                          fontSize:'16px',
                          fontFamily:'Arimo',
                          borderColor: isUsernameAndPasswordCorrect ? '' : 'red'

                        }}
                      />
                      <br>
                      </br>
                      {!isUsernameAndPasswordCorrect && (
                        <Typography style={{ color: 'red', marginLeft: '4vh', fontSize: '14px', fontStyle:'italic', mt:'5px' }}>
                          Incorrect username or password. Please try again.
                        </Typography>
                      )}
                      <Button
                        type="submit"
                        sx={{ 
                          mt: 3, 
                          mb: 2 ,
                          ml:'36vh', 
                          bgcolor:'#241571', 
                          color:'white', 
                          fontSize:'19px', 
                          paddingLeft:'4.5vh', 
                          paddingRight:'4.5vh',
                          paddingTop:'0.3vh',
                          paddingBottom:'0.3vh',
                          fontFamily: 'Poppins', 
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
                  <Box component="form" 
                     onSubmit={createNewUser}
                    noValidate sx={{ mt: 1}}>
                  <input
                        margin="normal"
                        id="emailAddress"
                        placeholder="Email Address"
                      //name="emailAddress"  // para sa link mo appear ni
                        autoComplete="emailAddress"
                        autoFocus
                        style={{
                          marginLeft:'4vh',
                          height:'35px',
                          width:'51vh',
                          marginBottom:'10px',
                          fontSize:'16px',
                          fontFamily:'Arimo'
                        }}
                      />

                  {!isUsernameUnique && (
                    <Typography style={{ color: 'red', marginLeft: '4vh', fontSize: '14px', fontStyle:'italic',mt:'10px' }}>
                      Username already exists. Please try another one.
                    </Typography>
                  )}
                  <input
                        margin="normal"
                        id="nUsername"
                        placeholder="Username"
                        name="username" // para sa link mo appear ni
                        autoComplete="username"
                        autoFocus
                        style={{
                          marginLeft:'4vh',
                          height:'35px',
                          width:'51vh',
                          marginBottom:'10px',
                          fontSize:'16px',
                          fontFamily:'Arimo',
                          borderColor:isUsernameUnique ? '': 'red',
                        }}
                      />
                      <br>
                      </br>

                      <input
                        margin="normal"
                        required
                        // name="password"  // para sa link mo appear ni
                        placeholder="Password"
                        type="password"
                        id="nPassword"
                        autoComplete="current-password"
                        style={{
                          marginLeft:'4vh',
                          margineTop:'10px',
                          height:'35px',
                          width:'51vh',
                          fontSize:'16px',
                          fontFamily:'Arimo',
                          borderColor: passwordValid ? '' : 'red',
                        }}
                      />
                      {passwordValid ? null : (
                        <Typography style={{ color: 'red', marginLeft: '4vh', fontSize: '14px', fontStyle: 'italic',  }}>
                          Password should consist of lowercase and uppercase letters, contain at least one digit
                        </Typography>
                      )}
                      <br>
                      </br>
           
                      <Button 
                        type="submit"
                        sx={{ 
                          mt:1,
                          mb: 2 , 
                          ml:'35vh', 
                          display:'block',
                          bgcolor:'#241571', 
                          color:'white', 
                          fontSize:'19px', 
                          paddingLeft:'4.5vh', 
                          paddingRight:'4.5vh',
                          paddingTop:'0.3vh', 
                          paddingBottom:'0.3vh', 
                          fontFamily: 'Poppins',
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
