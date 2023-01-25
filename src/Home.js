import React from "react";
import { useUserContext } from "./SessionProvider";

function Home(props) {
  const UserContext = useUserContext();
    
  return (
    <div>
      <div>hello {UserContext.user.display_name}</div>
    </div>
  );
}

export default Home;
