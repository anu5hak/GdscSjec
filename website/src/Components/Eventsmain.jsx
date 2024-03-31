import React from "react";
import './Eventsmain.css';

const Eventsmain = (props) => {
    
        return (
            <div className="eventmaincard" >
              <img src={props.imagesrc} className="event1" alt="Events" />
              <div className="eventtitle">
                <h1>{props.title}</h1>
              </div>
              <div className="knowmore">
                <h1>Know More</h1>
              </div>
            </div>
          );
}

export default Eventsmain;