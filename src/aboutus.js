// Create a new file for your modal, e.g., AboutUsModal.js

import React from 'react';
import { Avatar, Box, Dialog,Grid, Paper, Typography } from '@mui/material';

const AboutUsModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Paper elevation={5} sx={{bgcolor: 'lightblue'}}>
            <Typography style={{fontFamily: 'PlayfairDisplay',display: 'flex',marginLeft:'48vh', fontSize:'38px',marginTop:'5vh'}}>
            About TeachManage
            </Typography>
            <hr style={{ margin: '12px 0', border:'3px solid #359DD9' }} />

            <Box sx={{ flexGrow: 1 }}>
                
            <Grid container spacing={2}>
                <Grid item xs={5} sx={{ml:'70px',mt:'15px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src="Images/logo.png"
                    style={{ width: '80%' }}
                    alt="logo"
                />
                </Grid>
                <Grid item xs={6}>
                <Box sx={{mt:'75px',mr:'15px',bgcolor: 'rgba(115, 231, 226, 0)', padding:'6px',textAlign: 'justify', fontFamily:'Poppins', fontSize:'15px',}}>
                    <p>At TeachManage, we're on a mission to revolutionize the way teachers manage resources and collaborate in the educational landscape. Our system is a testament to our passion for enhancing the teaching experience and fostering effective collaboration among educators.</p>
                </Box>
                </Grid>
                <Grid item xs={6} sx={{ml:'50px'}}>
                <Box sx={{bgcolor: 'rgba(115, 231, 226, 0)', padding:'6px',textAlign: 'justify', fontFamily:'Poppins', fontSize:'15px'}}>
                    <p>TeachManage is more than just a resource management system; its a dynamic platform designed for educators. Our system empowers teachers to seamlessly organize, collaborate, and innovate in their teaching journey. From subject folder management to real-time collaboration on worksheets, TeachManage simplifies the complexities of education resource management.</p>
                </Box>
                </Grid>
                <Grid item xs={4} sx={{ml:'30px', mt:'74px'}}>
                <Typography style={{mr:'30px',fontFamily: 'PlayfairDisplay',display: 'flex', justifyContent: 'center', alignItems: 'center', mt:'25px', fontSize:'38px', fontWeight:'bolder', textShadow:'40px' }}>
                    Our System
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography style={{mr:'30px',fontFamily: 'PlayfairDisplay',display: 'flex', justifyContent: 'center', alignItems: 'center', mt:'25px', fontSize:'38px', fontWeight:'bolder', textShadow:'40px' }}>
                    Meet Our Team
                </Typography>
                </Grid>
                {/* for the pictures of our teams, description of every members. */}
                <Grid item xs={3}>

                    <Paper elevation={4} sx={{height:'35vh',width:'30vh', bgcolor:'lightyellow',display: 'flex', ml:'8vh',marginBottom:'3vh'}} >
                        <Grid container spacing={0}>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center'}}>
                                <Avatar alt="Angela" src="Images/Angela.jpg" sx={{mt:'3vh', width: '15vh', height: '15vh' }}/>
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center', fontFamily:'Quicksand', fontSize:'16px', fontWeight:'bold'}}>
                                Angela Madaya
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center', fontFamily:'Quicksand',fontSize:'14px', fontStyle:'Italic'}}>
                                UI Designer
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center',textAlign: 'center',fontFamily:'Quicksand', fontSize:'14px', fontStyle:'Italic'}}>
                                Full Stack Developer
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={4} sx={{height:'35vh',width:'30vh', bgcolor:'lightyellow',display: 'flex',marginLeft:'4vh',marginBottom:'3vh'}} >
                    <Grid container spacing={0}>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center'}}>
                                <Avatar alt="Anne" src="Images/Anne.png" sx={{mt:'3vh', width: '15vh', height: '15vh' }}/>
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center', fontFamily:'Quicksand', fontSize:'16px', fontWeight:'bold'}}>
                                Anne Jenel Ilosorio
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center', fontFamily:'Quicksand',fontSize:'14px', fontStyle:'Italic'}}>
                                UI Designer
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center',textAlign: 'center',fontFamily:'Quicksand', fontSize:'14px', fontStyle:'Italic'}}>
                                Full Stack Developer
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={2} >
                    <Paper elevation={4} sx={{height:'35vh',width:'30vh', bgcolor:'lightyellow',display: 'flex',marginBottom:'7vh'}} >
                    <Grid container spacing={0}>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center'}}>
                                <Avatar alt="Julianna" src="Images/Julliana.png" sx={{mt:'3vh', width: '15vh', height: '15vh' }}/>
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center', fontFamily:'Quicksand', fontSize:'16px', fontWeight:'bold'}}>
                                Julianna Belle Tabo
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center', fontFamily:'Quicksand',fontSize:'14px', fontStyle:'Italic'}}>
                                UI Designer
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center',textAlign: 'center',fontFamily:'Quicksand', fontSize:'14px', fontStyle:'Italic'}}>
                                Backend Developer
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3} >
                    <Paper elevation={4} sx={{height:'35vh',width:'30vh', bgcolor:'lightyellow',display: 'flex',marginLeft:'8vh',marginBottom:'7vh'}} >
                    <Grid container spacing={0}>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center'}}>
                                <Avatar alt="Mark" src="Images/Mark.png" sx={{mt:'3vh', width: '15vh', height: '15vh' }}/>
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center', fontFamily:'Quicksand', fontSize:'16px', fontWeight:'bold'}}>
                                Mark Angelo Bagiuon
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center', fontFamily:'Quicksand',fontSize:'14px', fontStyle:'Italic'}}>
                                UI Designer
                            </Grid>
                            <Grid item xs={12} sx={{display:'center', justifyContent:'center',alignContent:'center',textAlign: 'center',fontFamily:'Quicksand', fontSize:'14px', fontStyle:'Italic'}}>
                                Backend Developer
                            </Grid>
                        </Grid>
                    </Paper>
                    
                </Grid>
            </Grid>
            </Box> 
        </Paper>

    </Dialog>
  );
};

export default AboutUsModal;
