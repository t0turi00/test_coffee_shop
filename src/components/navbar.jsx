import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom"
import DropDown_Menu from "./dropdown/dropdown-menu"
import DropDown_Meista from "./dropdown/dropdown-meista";
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from "react-i18next";


function Navbar() {
    const [t, i18n] = useTranslation("global");

    const ref = useRef(null);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };


    const [ scrollData, setScrollData ] = useState({y:0, lastY:0});

    const [ showNav, setShowNav ] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        setScrollData(previousState => {
            return {
            y: window.scrollY,
            lastY: previousState.y
            }  
        })
        }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  useEffect(() => {
    console.log(scrollData)

    if(scrollData.y === 0){
        setShowNav(false)
    }

    if(scrollData.y > 500){
        setShowNav(true);
        if(scrollData.lastY < scrollData.y){
            setShowNav(true);
        }else {
            setShowNav(false);
        }
    } else {
        setShowNav(false);
    }

  }, [scrollData])


    return(
        <div className={showNav ? "navbar hideNav" : "navbar"}>
            <div className="navbar-container">
            <button className="frontpage" onClick={scrollToTop}><Link to="/">{t("navBar.frontpage")}</Link></button>  {/*Etusivu*/}
            <DropDown_Menu />
            <DropDown_Meista />
            </div>
        </div>
    )
}

export default Navbar;