import React, { useEffect } from "react";
import "./header.css"
import kahvikuppi_logo from "../assets/kahvikuppi_logo.jpg"
import user from "../assets/user.svg"  /*https://www.svgrepo.com/author/Solar%20Icons/ */
import Cart from "../assets/cart.svg" /*https://fonts.google.com/icons?selected=Material+Symbols+Outlined:shopping_cart:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=cart&icon.size=24&icon.color=%23FFFFFF */
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
import {  useState } from 'react';

function Header({cart}) {
  const [style, setStyle] = useState(true);
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    if(lang === "fi"){
      setStyle(true);
    }else {
      setStyle(false);
    }
  } 

  /*handle cart size*/
  const [size, setSize] = useState(0);

    const handleSize= ()=> {
        let ans = 0;
        cart.map((item)=>(
            ans +=item.amount
        ))
        setSize(ans);
    }
  
  const handlePrice= ()=> {
  let ans = 0;
  cart.map((item)=>(
    ans +=item.amount * item.price
  ))
    setPrice(ans);
  }


  useEffect(() => {
    handleSize();
    handlePrice();
  })

  const [price, setPrice] = useState(0);
  
  
  
 
  
    return (
    <div className="sticky-header">
      <div className="header"> 
          <div className="container">
            <img src={kahvikuppi_logo}></img>
            <div className="button-container">
            <Link to="/account/login" className="login">
            <button className="login">  
                <img src={user} fill="white"></img>
                <div>{t("login.message")}</div> {/*Kirjaudu sisään*/}
            </button>
            </Link>
            <button className={style ? "FI ON" : "FI"} onClick={() => handleChangeLanguage("fi")}>FI</button>
            <button className={style ? "EN" : "EN ON"} onClick={() => handleChangeLanguage("en")}>EN</button>
            </div>
          </div> 
        </div>
          <div className="bottom-header">
                <Link to="/"><h1 className="bottom-header-name">Coffee Shop ©</h1></Link>
                <Link to="/cart">
                <div className="bottom-header-cart">
                    <div className="price">{Math.round(price * 1000)/1000} €</div>
                    <img src={Cart} className="cart"></img>
                    <div className={(size > 0 ? "item-amount amount-color" : "item-amount")}>{size}</div>
                </div>
                </Link>
            </div>
            <div className="bottom-shadow"></div>
        </div>
    )
};

export default Header;