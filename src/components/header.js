import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./Header.scss"

const Header = ({ siteTitle, title }) => (
  <header>
    <nav class="navbar display-grid position-relative dark">
      <Link class="current-nav-link" href="connect.html">
        {title}
      </Link>
      <a id="brand" href="/">
        <h1>{siteTitle}</h1>
      </a>
      <div class="menu">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/connect">
          Connect
        </Link>
        <Link className="nav-link" to="/features">
          Features
        </Link>
        <Link className="nav-link" to="/forum">
          Forum
        </Link>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
