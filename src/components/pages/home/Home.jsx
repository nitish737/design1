import React from 'react' ;
import "./home.scss";
import img from './../../../img/img1.PNG' ;


const Home = () => {
    return(
        <React.Fragment>
            <div className="home920">
                <div className="wrapper">
                    <div className="right small">
                        <img src={img} alt="" />
                    </div>
                    <div className="left">
                        <div className="con">
                        <p className="heading">
                            Making the most of the <br />ever-growing <br />
                            <span>Information Technology. </span>
                        </p>
                        <p className="elaborate">
                            Managed by a team of professional experts with extensive experience and imppressive track records
                        </p>
                        <button className="read-more">
                            Read More
                        </button>
                        </div>
                    </div>
                    <div className="right">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}








export default Home ;