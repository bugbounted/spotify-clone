import React from "react";
import "./styles/Login.css";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <div className="login">
      <div className="content">
        {/* Spotify Logo */}
        <img
          src="https://1000marcas.net/wp-content/uploads/2019/12/Spotify-logo.png"
          alt="Spotify Logo"
          className="imglogo"
        />
        <div className="text">Spotify Clone - Catalina Ponce Puebla</div>
        {/* Login with Spotify button */}
        <a className="loginbtn" href={loginUrl}>
          LOGIN WITH SPOTIFY
        </a>
      </div>
    </div>
  );
}

export default Login;
