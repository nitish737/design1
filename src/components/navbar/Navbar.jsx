import React from "react";
import logo from "./../../img/logo.PNG";
import "./navbar.scss";
import { HomeOutlined } from "@material-ui/icons";
import { MailOutlineOutlined } from "@material-ui/icons";
import { Shuffle } from "@material-ui/icons";
import { FormatAlignRight } from "@material-ui/icons";

const Navbar = () => {
  const navLinks = [
    {
      name: "Services",
      link: "",
    },
    {
      name: "Product",
      link: "",
    },
    {
      name: "Technology",
      link: "",
    },
    {
      name: "About",
      link: "",
    },
    {
      name: "Client",
      link: "",
    },
    {
      name: "Partner",
      link: "",
    },
  ];
  return (
    <React.Fragment>
      <div className="navbar702">
        <div className="wrapper">
          <nav>
            <div className="left">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="right">
              <div className="links">
                {navLinks.map((obj, index) => {
                  return (
                    <React.Fragment key="index">
                      <div className="each-link">
                        <a href="">{obj.name}</a>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="icons">
                <div className="icon">
                  <HomeOutlined/>
                </div>
                <div className="icon">
                  <MailOutlineOutlined/>
                </div>
                <div className="icon">
                  <Shuffle/>
                </div>
              </div>
            </div>
            <div className="hamburger">
              <FormatAlignRight/>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
