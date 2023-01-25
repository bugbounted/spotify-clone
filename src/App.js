import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { aux } from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import axios from "axios";

{
  /* https://developer.spotify.com/documentation/web-playback-sdk/guide/#prerequisites */
}

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    //useEffect se ejecuta cuando se renderiza el componente
    const _token = aux.access_token;

    if (_token) {
      //si _token es diferente de null
      setToken(aux.access_token); //actualiza el estado de token
    }
  }, []);

  return (
    <div>
      {token ? <Home token={token} /> : <Login />}
    </div>
  );
}

export default App;
