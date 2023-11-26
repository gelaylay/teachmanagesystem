import React from 'react';
import { Box, AppBar,Toolbar,IconButton,Typography,Grid, Button, Paper, Dialog, DialogContent,  DialogActions, Chip, Avatar} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';


import './style.css';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.50),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <div
        style={{
          backgroundColor: 'white',
          height: '100vh',
          position: 'relative',
        }}
      >
        <Grid container spacing={0.4}>
          <Grid item xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="small"
                    sx={{ mr: 1, }}
                  >
                    <img
                      src="Images/logo.png"
                      height="55px"
                      alt="logo"
                    />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: 'Bauhus', fontWeight:'bold'}}>
                      TeachManage
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1.3 }} style={{fontFamily:'Poppins'}}>
                      Manage Subject Area
                  </Typography>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Toolbar>
              </AppBar>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper elevation={2} sx={{bgcolor:'rgba(53, 157, 217, 0.4)', height:'8.6vh',width:'160vh', borderRadius:'1vh',display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'3px'}}>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                  <Button 
                    sx={{
                      bgcolor:'rgba(82, 178, 191, 0.8)',
                      color:'white',
                      fontSize:'2vh',
                      fontFamily:'Poppins', 
                      border:'solid 1px black', 
                      ml:'6vh',
                      paddingLeft:'7vh', 
                      paddingRight:'7vh',
                      borderRadius:'3vh',
                      textTransform: 'none',
                      '&:hover': {
                        color: 'black', 
                      },
                      '&.Mui-selected': {
                        color: 'black', 
                      },
                      }} >
                      View History
                  </Button>
              </Grid>
              <Grid item xs={3}>
                <Button 
                  sx={{
                    bgcolor:'rgba(82, 178, 191, 0.8)',
                    color:'white',
                    fontSize:'2vh',
                    fontFamily:'Poppins', 
                    border:'solid 1px black',
                    paddingLeft:'4vh', 
                    paddingRight:'4vh',
                    borderRadius:'3vh',
                    textTransform: 'none',
                    '&:hover': {
                      color: 'black', 
                    },
                    '&.Mui-selected': {
                      color: 'black', 
                    },
                  }} onClick={handleClickOpen}
                  
                >
                    Add New Subject
                </Button>
                  
                  <Dialog open={open} onClose={handleClose}>
                  <DialogContent sx={{ bgcolor: 'rgba(82, 178, 191, 0.7)',}}>
                  <Stack direction="row" spacing={2} sx={{mt:'10px',display:'center',justifyContent:'center',mb:'12px'}}>
                      <Chip icon={<FolderIcon />} label="Add New Subject" sx={{padding:'20px', fontSize:'14px', bgcolor:'#359DD9'}} />
                  </Stack>
                      <input  
                        variant="outlined" 
                        placeholder='Subject Code'
                        style={{
                          marginBottom: '12px',
                          fontSize: '14px', 
                          width: '210px',
                          height:'34px',
                        }}
                      /> <br>
                      </br>
                      <input  
                        variant="outlined" 
                        placeholder='Subject Name'
                        style={{
                          marginBottom: '12px',
                          fontSize: '14px', 
                          width: '210px',
                          height:'34px' 
                        }}/>
                    
                    <DialogActions>
                      <Button variant='contained' color='success' onClick={handleClose} sx={{width:'20px'}}>Add</Button>
                      <Button variant='contained' color="error" onClick={handleClose}>Cancel</Button>
                      
                    </DialogActions>
                    </DialogContent>
                  </Dialog>
              </Grid>
              <Grid item xs={5.5}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search here..."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              </Grid>
            </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper elevation={8} sx={{bgcolor:'rgba(53, 157, 217, 0.4)',height:'79vh',width:'160vh', display:'center',justifyContent:'center',alignItems:'center', borderRadius:'1vh'}}>
            {/* for folders  */}
            </Paper>
          </Grid>
        </Grid>

    </div>
  );
}

export default App;
