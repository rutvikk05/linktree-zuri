import React from 'react';
import '../styles/Header.css';

const Header = ({ name, title, img }) => {
  return (
    <header class='content'>
      <nav class='logo'>
        <img src={img.src} alt={img.alt} />
        <h1>{name}</h1>
        <p>{title}</p>
      </nav>
    </header>
  );
};

export default Header;
