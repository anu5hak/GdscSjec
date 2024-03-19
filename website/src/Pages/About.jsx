import React from "react";
import download from "../Images/download.png";
import sideimage from "../Images/sideimage.png"
import './About.css';

const About = () => {
    const handleClick = () => {
        window.location.href = "https://developers.google.com/community/gdsc?utm_source=devtools";
      };
    return (

    <div className="about">
        <h1 className="aboutus"> 
            About GDSC
        </h1>

        <h1 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h1>

        <div className="image">
            <img className="anish" src={download}/>
        </div>

        <div className="sideimage">
            <img className="circle" src={sideimage}/>
        </div>

        <div className="buttoncontainer">
          <button id="book-now-button" onClick={handleClick}>
            Learn More
          </button>
        </div>
        

    </div>
  );
};

export default About;