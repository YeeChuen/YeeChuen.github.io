import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';// ...
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Sidebar = () => {
    const closeButton = document.querySelector('.bm-cross-button');
        if (closeButton) {
          closeButton.classList.add('custom-close-button');
    }

  return (
    <>
      <Menu width={400}>
        <a style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        }} className="menu-item" href="/">
            <HomeIcon />
            <span><div style={{ marginLeft: 10, fontSize: 18 }}>Home</div></span>
        </a>  
        <a style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        }} className="menu-item" href="/about">
            <AssignmentIndIcon />
            <span><div style={{ marginLeft: 10, fontSize: 18 }}>About Me</div></span>
        </a>   
        <a style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        }} className="menu-item" href="/resume">
            <DescriptionIcon />
            <span><div style={{ marginLeft: 10, fontSize: 18 }}>Resume</div></span>
        </a>  
        <a style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        }} className="menu-item" href="/portfolio/computerscience">
            <PermMediaIcon />
            <span><div style={{ marginLeft: 10, fontSize: 18 }}>Computer Science</div></span>
        </a> 
        <a style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        }} className="menu-item" href="/portfolio/architecture">
            <PermMediaIcon />
            <span><div style={{ marginLeft: 10, fontSize: 18 }}>Architecture</div></span>
        </a> 
        <a style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        }} className="menu-item" href="/contact">
            <CallIcon />
            <span><div style={{ marginLeft: 10, fontSize: 18 }}>Contact</div></span>
        </a>  
      </Menu>
    </>
  );
};

export default Sidebar;
