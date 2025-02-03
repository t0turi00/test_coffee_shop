import React from "react";
import "./menu.css"
import kahvi from "../assets/Kahvi.jpg"
import tee from "../assets/Tee.jpg"
import leivos from "../assets/Leivos.jpg"
import voileipa from "../assets/Voileipä.jpg"
import gelato from "../assets/Gelato.jpg"
import jaatee from "../assets/Jäätee.jpg"
import { useTranslation } from "react-i18next";


function Menu() {
     const [t, i18n] = useTranslation("global");

    return (
        <div className="menu-container">
                <div className="container-name">
                <div className="arrow-left"></div>
                <h3>Menu</h3>
                <div className="arrow-right"></div>
                </div>

                {/* Kuumat Juomat*/}

                <div className="item-name">{t("menu.hot_drinks")}</div>
                <div className="flex-container">
                <div className="grid-text-left">{t("menu.coffee")}</div>
                <div className="grid-text-right">{t("menu.tea")}</div>
                </div>
                <div className="grid-container">
                    <div className="grid-item"> <img src={kahvi} alt="Kahvi"/></div>
                    <div className="grid-item"><img src={tee} alt="Tee"/></div>
                </div>

                {/* Leivonnaiset*/}

                <div className="item-name">{t("menu.pastries")}</div>
                <div className="flex-container">
                <div className="grid-text-left">{t("menu.pastry")}</div>
                <div className="grid-text-right">{t("menu.sandwich")}</div>
                </div>
                <div className="grid-container">
                    <div className="grid-item"><img src={leivos} alt="Leivos"/></div>
                    <div className="grid-item"><img src={voileipa} alt="Voileipä"/></div>
                </div>

                {/* Virkistävät */}

                <div className="item-name">{t("menu.refreshing")}</div>
                <div className="flex-container">
                <div className="grid-text-left">{t("menu.icecream")}</div>
                <div className="grid-text-right">{t("menu.drinks")}</div>
                </div>
                <div className="grid-container">
                    <div className="grid-item"><img src={gelato} alt="Gelato"/></div>
                    <div className="grid-item"><img src={jaatee} alt="Jäätee"/></div>
                </div>

                <div className="bottom-menu">
                    <div className="bottom-arrow"></div>
                </div>
        </div>
    )
};

export default Menu;