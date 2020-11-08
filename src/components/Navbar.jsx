import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav id='navbar'>
      <Link to='/' id='brand-link'>
        Feronia
      </Link>
      <ul>
        <li>
          <Link to='/about' className='nav-link'>
            About
          </Link>
        </li>
        <li>
          <Link to='/connect' className='nav-link'>
            Connect
          </Link>
        </li>
        <li>
          <Link className='nav-link'>Donate</Link>
        </li>
        <li>
          <Link to='/features' className='nav-link'>
            Features
          </Link>
        </li>
        <li>
          <Link className='nav-link'>Forum</Link>
        </li>
        <li>
          <Link className='nav-link'>Rules</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
