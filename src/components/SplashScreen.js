import React from "react";
import BapuLogo from "../assets/bapu_logo.svg";


const SplashScreen = () => {
  return (
    <div className="splash">
      <img className="splashlogo" src={BapuLogo} />
    </div>
  );
};

export default SplashScreen;