import React, { useEffect } from "react";
import { preLoaderAnim } from "../Animations";
import "./preLoader.css";

function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Abdullah </span>
        <span> Gamal.</span>
      </div>
    </div>
  );
}

export default PreLoader;
