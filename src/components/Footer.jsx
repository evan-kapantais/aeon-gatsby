import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-container'>
        <div className='footer-nav'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/about' className='nav-link'>
            About
          </Link>
          <Link to='/connect' className='nav-link'>
            Connect
          </Link>
          <Link to='/donate' className='nav-link'>
            Donate
          </Link>
          <Link to='/features' className='nav-link'>
            Features
          </Link>
          <Link to='/news' className='nav-link'>
            News
          </Link>
          <Link to='/rules' className='nav-link'>
            Rules
          </Link>
        </div>
        <div className='footer-social'>
          <a
            href='https://discord.com/invite/tb5jqpDme3'
            className='social-link'
          >
            <img
              src={require("../images/social/iconfinder_discord.svg")}
              alt=''
            />
          </a>
          <a href='https://www.facebook.com/AEONL2' className='social-link'>
            <img
              src={require("../images/social/iconfinder_facebook.svg")}
              alt=''
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
