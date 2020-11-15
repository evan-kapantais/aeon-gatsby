import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <nav id='navbar'>
      {window !== undefined && window.location.pathname !== "/" && (
        <Link to='/' id='brand-link'>
          {data.site.siteMetadata.title}
        </Link>
      )}
      <div></div>
      <ul className='nav-list'>
        <li>
          <Link to='/' className='nav-link' activeClassName='nav-link-active'>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className='nav-link'
            activeClassName='nav-link-active'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='/connect'
            className='nav-link'
            activeClassName='nav-link-active'
          >
            Connect
          </Link>
        </li>
        <li>
          <Link
            to='/donate'
            className='nav-link'
            activeClassName='nav-link-active'
          >
            Donate
          </Link>
        </li>
        <li>
          <Link
            to='/features'
            className='nav-link'
            activeClassName='nav-link-active'
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to='/news'
            className='nav-link'
            activeClassName='nav-link-active'
          >
            News
          </Link>
        </li>
        <li>
          <Link
            to='/rules'
            className='nav-link'
            activeClassName='nav-link-active'
          >
            Rules
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
