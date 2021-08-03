import React from "react";
import img from "./../../../img/img2.PNG";
import "./intro.scss" ;

const Intro = () => {
  return (
    <React.Fragment>
      <div className="intro967">
        <div className="wrapper">
          <div className="left">
            <img src={img} alt="" />
          </div>
          <div className="right">
            <div className="con">
              <div className="heading">
                Welcome to <span>Dwidasa Samsara Indonesia (DSI)</span>
              </div>
              <div className="elaborate">
                <p>
                  Dwidasa Samsara Indonesia (DSI) was firstly established in
                  2010 by the founders, who each of them has a common end
                  objective to innovate new creations by making the most of the
                  ever-growing Information technology through <span>DSI</span>'s distinct
                  front-end based application concept.
                </p>
                <p>
                    Managed by a team of professional experts with extensive experience and impressive track records, <span>DSI</span> believes that continuous improvements and innovations assure tyour business to run effectively and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
