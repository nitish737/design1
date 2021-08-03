import React from "react";
import "./footer.scss";
import logo from "./../../img/logo.PNG";
import clients from "./../../img/clients.PNG";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer707">
        <div className="wrapper">
          <div className="left">
            <div className="img">
              <img src={logo} alt="" />
            </div>
            <div className="address">
              <p className="heading">PT Dwidasa Samsara Indonesia</p>
              <p className="details">
                Ruko Jalur Sutera 29A No.53 <br />
                Alam Sutera Serpong, Tangerang 15323
              </p>
            </div>
          </div>
          <div className="middle">
            <p className="heading">Contact</p>
            <p className="details">
              Phone : +62.21.5314.1135 <br />
              Fax : +62.21.5314.1135 <br />
              Email : community@dwidasa.com
            </p>
          </div>
          <div className="right">
            <div className="img">
              <img src={clients} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
