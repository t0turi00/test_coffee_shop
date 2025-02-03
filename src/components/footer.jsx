import React from "react";
import "./footer.css"
import YT from "../assets/youtube.svg" /*https://www.svgrepo.com/author/bypeople/*/
import IG from "../assets/insta.svg"    /*https://www.svgrepo.com/author/bypeople/*/
import LI from "../assets/linkedIn.svg" /*https://www.svgrepo.com/author/bypeople/*/
import kahvikuppi_logo from "../assets/kahvikuppi_logo.jpg"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

function Footer() {
    const [t, i18n] = useTranslation("global");
    const d = new Date();
    const fullYear = d.getFullYear();  

    return(
        <div className="footer-container">
            <div className="footer-line"></div>
            <div className="footer-content">
            
            <ul className="item-header">
                <p>{t("menu.products")}</p>
                <li>{t("menu.coffee")}</li>
                <li>{t("menu.tea")}</li>
                <li>{t("menu.pastry")}</li>
                <li>{t("menu.sandwich")}</li>
                <li>{t("menu.icecream")}</li>
                <li>{t("menu.drinks")}</li>
            </ul>

            <ul className="item-header">
                <p>Coffee Shop</p>
               <Link to="/story"><li>{t("AU.story")}</li></Link> 
               <Link to="/employees"><li>{t("AU.employee")}</li></Link>
                <Link to="contact"><li>{t("AU.info")}</li></Link>
            </ul>

            <ul className="item-header row">
                <p>{t("AU.follow")}</p>
                <li><img src={YT}></img></li>
                <li><img src={IG}></img></li>
                <li><img src={LI}></img></li> 
            </ul>
            </div>
            <div className="copyright-container">
            <div className="copyright">
                <img src={kahvikuppi_logo}></img>
                <div>Coffee Shop© {fullYear}</div>
            </div>
            </div>
        </div>
    );
};

export default Footer;