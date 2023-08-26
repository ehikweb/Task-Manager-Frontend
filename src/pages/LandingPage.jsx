import React from "react";
import lorem from "../assets/Icons/loremp.png";
import component from "../assets/Icons/component 2.png";
import button from '../assets/Icons/Go to my task button.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container vh-100 d-flex justify-content-between gap-4 w-100 my-5" >
      <div className="task-start w-50 my-5 py-3">
        <div className="d-flex justify-content-between gap-3 ">
          <h1>Manage Your Tasks On TasksDuty</h1>
          <img src="../assets/Icons/loremp.png" alt="" />
          <img src={lorem} alt="" />
          
          <div className="container d-flex justify-content-between">
          <Link>
          <img src="../assets/Icons/Go to my task button.png" alt="" />
          <img src={button} alt="" />
          </Link>
          </div>
          
          <div className="container d-flex align-content-center gap-4">
          <img src="../assets/Icons/component 2.png" alt="" />
          <img src={component} alt="" />
          </div>
        </div>

        
          
        </div>
      </div> 
  );
};

export default LandingPage;
