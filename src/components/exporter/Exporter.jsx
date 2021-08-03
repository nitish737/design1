import React from "react";
import "./exporter.scss";
import Navbar from "../navbar/Navbar";
import Home from "../pages/home/Home";
import Intro from "../pages/intro/Intro";
import Products from "../pages/products/Products";
import Footer from "../footer/Footer";

const Exporter = () => {
  return (
    <React.Fragment>
      <div className="exporter980">
        <div className="wrapper">
          <div className="navbar">
            <Navbar/>
          </div>
        
          <div className="pages">
            <Home />
            <Intro />
            <Products />
          </div>
        </div>
        <br /><br /><br />
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Exporter;
