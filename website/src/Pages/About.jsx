import React from "react";
import about from "../Images/about.png";
import sideimage from "../Images/sideimage.svg"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h1>

         <div className="buttoncontainer" onClick={handleClick}>
          <button id="book-now-button" onClick={handleClick}>
            Learn More
          </button>
        </div>

        {/* <div className="sideimage">
            <img className="circle" src={sideimage}/>
        </div> */}


        <div className="image">
            <img className="anish" src={about}/>
        </div>

        
       
        

    </div>
  );
};

export default About;