import React from "react";
import { useUserContext } from "./StateProvider";
import Sidebar from "./home_components/Sidebar";
import Body from "./home_components/Body";
import Footer from "./home_components/Footer";
import "./styles/Home.css";

function Home({ spotify }) {
  const [{ user }, dispatch] = useUserContext();

  return (
    <div className="main">
      <div className="main_body">
        <Sidebar /> {/* etiqueta siempre tiene que ir con primera letra mayuscula */}
        <Body/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
