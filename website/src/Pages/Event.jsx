import React from "react";
import './Events.css';
import Eventsmain from '../Components/Eventsmain';
import image from '../Images/image.png';
import sjec from '../Images/sjec.jpg';

const Events = () => {
    return(
    <div className="events">

    <h1 className="eventstitle">
        For a comprehensive list of all events scheduled by GDSC
    </h1>

    <div className="buttonevent">
          <button id="seeallevents">
          View all events
          </button>
    </div>

    <div className="eventimagecontainer">
      <div className="event1main"> 
        <Eventsmain imagesrc={image} title="Flutter Session" />

      </div>
      <div className="eventmain2" >
              <img src={sjec} className="event2" alt="Events" />
              <div className="eventtitle2">
                <h1>Unlocking Opportunities</h1>
              </div>
              <div className="knowmore2">
                <h1>Know More</h1>
              </div>
        </div>

      <div className="event3main"> 
        <Eventsmain imagesrc={image} title="Flutter Session" />
      </div>
    </div>

    



        

    </div>
  );
};

export default Events;