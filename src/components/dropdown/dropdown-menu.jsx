import React, { useState, useEffect, useRef } from "react";
import "./dropdown-menu.css"
import arrowdown from "../../assets/arrowdown.svg" /* https://fonts.google.com/icons?selected=Material+Symbols+Outlined:arrow_drop_down:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=arrow+dow&icon.size=24&icon.color=%23FFFFFF */
import arrowup from "../../assets/arrowup.svg"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function DropDown_Menu() {
    const [ dropdownToggled, setDropdownToggled ] = useState(false);
    const dropdownRef = useRef(null);

    const [t, i18n] = useTranslation("global");

    const MenuItems = [
        {
            title: t("menu.coffee"),
            path: "/menu"
        },
        {
            title: t("menu.tea"),
            path: "/menu"
        },
        {
            title: t("menu.pastry"),
            path: "/menu"
        },
        {
            title: t("menu.sandwich"),
            path: "/menu"
        },
        {
            title: t("menu.icecream"),
            path: "/menu"
        },
        {
            title: t("menu.drinks"),
            path: "/menu"
        },
    
    ];
    


    useEffect(() => {
        function handler(e){
            if (dropdownRef.current){
                if(!dropdownRef.current.contains(e.target)){
                    setDropdownToggled(false)
                }
            } 
        }
        
        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("Click", handler)
        }
    });

    return(   
    <div className="dropdown2" ref={dropdownRef}>
        <button className="toggle" onClick={() => {
            setDropdownToggled(!dropdownToggled);
        }}>
            <div className="arrow">
            <span>Menu</span>
            <span >{dropdownToggled ? <img src={arrowup}></img> : <img src={arrowdown}></img>}</span>
            </div>
        </button>
        <div className={`options ${dropdownToggled ? "visible" : ""}`}>
            {MenuItems.map((option, index) => {
                return (
                    <button key={index} onClick={() => {
                        setDropdownToggled(false);
                    }}>{
                        <Link to={option.path}>{option.title}</Link>
                    }
                    </button>
                )
            })}
        </div>
    </div>
    );
}

export default DropDown_Menu;