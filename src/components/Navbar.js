import React from "react"

export const Navbar = () => {
  return (
    <nav class="navbar display-grid position-relative dark">
      <a class="current-nav-link" href="connect.html">
        Connect
      </a>
      <a id="brand" href="/">
        <h1>Feronia</h1>
      </a>
      <div class="menu">
        <a class="nav-link" href="/">
          Home
        </a>
        <a class="nav-link" href="/connect.html">
          Connect
        </a>
        <a class="nav-link" href="/features.html">
          Features
        </a>
        <a class="nav-link" href="/forum">
          Forum
        </a>
      </div>
    </nav>
  )
}
