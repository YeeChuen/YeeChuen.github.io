import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Sidebar from './Sidebar';
import { Image } from 'rebass';

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
                <Image style={{ marginRight: 10 }} width={20} src={require('./tiger.png')}/>
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
