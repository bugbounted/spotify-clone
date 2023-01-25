import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { getTokenFromUrl } from "./Spotify";
import { spotify } from "./SessionProvider";
import { SessionProvider } from "./SessionProvider";

{
  /* https://developer.spotify.com/documentation/web-playback-sdk/guide/#prerequisites */
}


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    //useEffect se ejecuta cuando se renderiza el componente
    const _token = getTokenFromUrl.access_token;

    if (_token) {
      //si _token es diferente de null
      setToken(_token); //actualiza el estado de token
      console.log('guarda token')
      spotify.setAccessToken(_token); //actualiza el estado de spotify
      console.log('ingresa token a spotify')
      
    }
  }, []);

  return (
    <SessionProvider>
    <div className="app">
      {token ? <Home token={token} /> : <Login />}
    </div>
    </SessionProvider>);
}

export default App;
