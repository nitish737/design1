import React from "react";
import "./products.scss";
import ic1 from "./../../../img/ic1.PNG";
import ic2 from "./../../../img/ic2.PNG";
import ic3 from "./../../../img/ic3.PNG";

const Products = () => {
  const details = [
    {
      name: "Our Product",
      content:
        "Our product is made on the base of our team;s careful research and analyses, ranging from internet based application.",
      button: "Read More",
      img: ic1,
    },
    {
      name: "Our Services",
      content:
        "DSI's shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sector",
      button: "Read More",
      img: ic2,
    },
    {
      name: "Our Technology",
      content:
        "First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.",
      button: "Read More",
      img: ic3,
    },
  ];
  return (
    <React.Fragment>
      <div className="products793">
        <div className="wrapper">
          <div className="head">
            <h2>Product and Services</h2>
          </div>
          <div className="content">
            {details.map((obj, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="each-card">
                      <div className="con">
                    <div className="img-con">
                      <img src={obj.img} alt="" />
                    </div>
                    <div className="heading">{obj.name}</div>
                    <div className="details">{obj.content}</div>
                    <div className="btn">
                      <button>{obj.button}</button>
                    </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
