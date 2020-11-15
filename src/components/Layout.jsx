import React from "react";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div id='layout'>
      <Navbar />
      {children}
      {window !== undefined && window.location.pathname !== "/" && <Footer />}
    </div>
  );
};

export default Layout;
