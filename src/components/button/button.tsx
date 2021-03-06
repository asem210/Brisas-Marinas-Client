import React from "react";

import "./button.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";

export const Button: React.FC<{
  placeholder: string;
  handleClick: () => void;
}> = ({ placeholder, handleClick }) => {
  return (
    <div className="app-container-button">
      <button onClick={() => handleClick()}>{placeholder}</button>
    </div>
  );
};

export const LoginWithFB: React.FC<{
  handleLoginWithFB: () => void;
  handleLoginWithGoogle: () => void;
  placeholder: string;
}> = ({ handleLoginWithFB, handleLoginWithGoogle, placeholder }) => {
  return (
    <div className="app-container-log-fb-google">
      <div className="app-container-tittle">
        <hr />
        <label>{placeholder}</label>
        <hr />
      </div>

      <div className="app-container-fb-login">
        <div className="app-container-fb-login-icon">
          <AiFillFacebook size={32} />
        </div>

        <div className="app-container-fb-login-text">
          <label>Iniciar Sesión con Facebook</label>
        </div>
      </div>

      <div className="app-container-google-login">
        <div className="app-container-google-login-icon">
          <AiFillGooglePlusCircle size={32} />
        </div>

        <div className="app-container-google-login-text">
          <label>Iniciar Sesión con Google</label>
        </div>
      </div>
    </div>
  );
};
