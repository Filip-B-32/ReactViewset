import React from "react";
import "./auth-page.css";

const AuthPage = ({
  leftContent,
  leftBgColor = "#E5989B",
  rightBgColor = "#FFCDB2",
  rightImage,
}) => {
  return (
    <div className="auth-page">
      <div
        className="left-side-wrapper-auth"
        style={{ backgroundColor: leftBgColor }}
      >
        {leftContent}
      </div>
      <div
        className="right-side-wrapper-auth"
        style={{
          backgroundColor: rightImage ? "transparent" : rightBgColor,
          backgroundImage: rightImage ? `url(${rightImage})` : "none",
        }}
      ></div>
    </div>
  );
};

export default AuthPage;
