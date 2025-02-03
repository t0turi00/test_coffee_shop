import React from "react";
import "./home.css"
import Carousel from "../components/carousel";
import Menu from "../components/menu";
import BottomImgLinks from "../components/bottomImgLinks";




function Home() {
    return(
        <div className="content">
        <div className="bg-content">
        <Carousel/>
        <Menu />
        </div>
         <BottomImgLinks />
      </div>
    );
}

export default Home;