import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './sidebar.css';// ...
import { Text } from 'rebass';

export default Sidebar => {
    const closeButton = document.querySelector('.bm-cross-button');
        if (closeButton) {
          closeButton.classList.add('custom-close-button');
    }

  return (
    <>
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/about">
        <Text>About Me</Text>
        </a>
        <a className="menu-item" href="/portfolio">
        <Text>Portfolio</Text>
        </a>
        <a className="menu-item" href="/resume">
        <Text>Resume</Text>
        </a>
        <a className="menu-item" href="/contact">
        <Text>Contact</Text>
        </a>
      </Menu>
    </>
  );
};