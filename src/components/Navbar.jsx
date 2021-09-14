import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li id='logo'>
        <Link to='/'>Karen's</Link>
      </li>
      <li>
        <Link to='/shop'>Shop</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
      <li>
        <Link to='/cart'>Cart</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
