import React from 'react';
import logo from './logo-almundo.svg';

const Header = () => (
  <header style={{
    backgroundColor: '#164586',
    padding: '1%',
    marginBottom: '1%'
  }}>
    <img src={logo} alt='logo_almundo' />
  </header>
);

export default Header;