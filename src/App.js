import React, { useEffect} from "react";
import "./styles/App.css";
import Login from "./Login";
import Home from "./Home";
import { getTokenFromUrl } from "./Spotify";
import {useUserContext } from "./StateProvider";
import  SpotifyWebApi  from "spotify-web-api-js";

 /* https://developer.spotify.com/documentation/web-playback-sdk/guide/#prerequisites */


function App() {
  const spotify = new SpotifyWebApi(); //spotify api
  const [{ user , token}, dispatch] = useUserContext(); 

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
      {token ? <Home spotify={spotify} /> : <Login />}
    </div>);
}

export default App;
