import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div id="preLoader" className="preloader">
      <div className="preloader-inner">
        <div className="preloader-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
