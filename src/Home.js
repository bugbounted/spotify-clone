import React from "react";
import { useUserContext } from "./StateProvider";


function Home(props) {
  const [{ user }, dispatch] = useUserContext(); 

    
  return (
    <div>
      
        <div>hello </div>
      
      
    </div>
  );
}

export default Home;
