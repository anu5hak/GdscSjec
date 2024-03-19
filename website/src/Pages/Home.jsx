import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="homecontainer">
        <div className="rectangle"></div>

          <div className="bluecircle">
            <svg xmlns="http://www.w3.org/2000/svg" width="69" height="147" viewBox="0 0 69 147" fill="none">
              <path d="M1.28423 0.335314C19.1713 0.424232 36.2874 8.21791 48.8672 22.0018C61.4471 35.7857 68.4602 54.4308 68.3637 73.8353C68.2672 93.2398 61.0691 111.814 48.3529 125.472C35.6366 139.131 18.4439 146.754 0.556833 146.665L0.920529 73.5L1.28423 0.335314Z" fill="#4285F3"/>
            </svg>
          </div>

          <div className="redcircle">
            <svg xmlns="http://www.w3.org/2000/svg" width="69" height="147" viewBox="0 0 69 147" fill="none">
              <path d="M67.9205 146.666C50.0333 146.666 32.8786 138.957 20.2304 125.236C7.58221 111.515 0.476518 92.9048 0.476517 73.5001C0.476515 54.0954 7.5822 35.4854 20.2304 21.7642C32.8786 8.04298 50.0333 0.334476 67.9205 0.334473L67.9205 73.5001V146.666Z" fill="#E94335"/>
            </svg>
          </div>

          <h1 className="gdscsjec">GDSC SJEC</h1>
      </div>
    </div>  
      
  );
};

export default Home;
