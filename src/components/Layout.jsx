import React from "react";
import Navbar from "./Navbar";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div id='layout'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;