import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="fixed" color='transparent' elevation={0}>
        <Sidebar/>
        <Toolbar>
          <div className='Title'>
          <div
            px={2}
            color='black'
            alignItems='center'
          >
            
            <a className={'TitleLink'} href='/'>
              <Typography
                component="h1"
                variant="h5"
                color="black"
                className="imageTitle"
                fontWeight="bold"
              >
                YEE
              </Typography>
            </a>
          </div>
        </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
