import React from "react"
import { Link } from "gatsby"
import "./Footer.scss"

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-block">
          <h4>Site Map</h4>
          <nav class="footer-navbar">
            <Link to="#banner">Home</Link>
            <Link to="/connect">Connect</Link>
            <Link to="/features">Discord</Link>
            <Link to="/attributions">Attributions</Link>
          </nav>
        </div>
        <div class="footer-block">
          <h4>Connect</h4>
          <div class="social-icons">
            <a href="https://discord.com/invite/NVxTmH?utm_source=Discord%20Widget&utm_medium=Connect">
              <img
                src={require("../images/social/discord.png")}
                alt="discord icon"
              />
            </a>
            <a href="https://www.facebook.com/L2Feronia/">
              <img
                src={require("../images/social/facebook.png")}
                alt="facebook icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="legal">
        <p>&copy; L2 Feronia</p>
        <p>
          Page created by
          <a href="https://www.instagram.com/evan_kapantais/">
            {" "}
            Evan Kapantais
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
