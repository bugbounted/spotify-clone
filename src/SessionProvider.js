import React, { useState , useContext, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const userContext = React.createContext();
export const spotify = new SpotifyWebApi();

export function useUserContext() {
  return useContext(userContext);
}

export function SessionProvider({ children }) {
    console.log('context inicio')
    const [user, setUser] = useState({});

    useEffect(() => {
        console.log('useeffect provider')
        spotify.getMe().then((_user) => {
            console.log("👱", _user);
            setUser(_user);
            console.log('fin getme')
          });
    }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
