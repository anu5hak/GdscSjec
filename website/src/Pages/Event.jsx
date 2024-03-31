import React from "react";
import './Events.css';
import Eventsmain from '../Components/Eventsmain';
import image from '../Images/image.png';

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
      <div className="event2main"> 
        <Eventsmain imagesrc={image} title="android Session" />

      </div>

      <div className="event3main"> 
        <Eventsmain imagesrc={image} title="Flutter Session" />
      </div>
    </div>

    



        

    </div>
  );
};

export default Events;