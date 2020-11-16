import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import NavList from "./NavList";
import Burger from "./Burger";

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
      <Burger />
      <NavList />
    </nav>
  );
};

export default Navbar;
