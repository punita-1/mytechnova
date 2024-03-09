import React, { useEffect } from "react";
import { preLoaderAnim } from "./main";
import "./preLoader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <img src="public/images/technova_logo.png" alt="Logo" className="logo" />
      <div className="texts-container">
        <span>TECHNOVA,</span>
        <span>2024</span>
      </div>
    </div>
  );
};

export default PreLoader;

