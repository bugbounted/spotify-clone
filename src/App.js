import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { getTokenFromUrl } from "./Spotify";
import {useUserContext } from "./StateProvider";
import  SpotifyWebApi  from "spotify-web-api-js";

 /* https://developer.spotify.com/documentation/web-playback-sdk/guide/#prerequisites */


function App() {
  const [token, setToken] = useState(null);
  const spotify = new SpotifyWebApi(); //spotify api
  const [{ user }, dispatch] = useUserContext(); 

  useEffect(() => {
    //useEffect se ejecuta cuando se renderiza el componente
    const _token = getTokenFromUrl.access_token;
       // reducer hook 
    
    if (_token) {
      //si _token es diferente de null
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      setToken(_token); //actualiza el estado de token
      spotify.setAccessToken(_token); //actualiza el estado de spotify  
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);

  console.log({user})
  console.log("token", token);

  return (
    <div className="app">
      {token ? <Home token={token} /> : <Login />}
    </div>);
}

export default App;
