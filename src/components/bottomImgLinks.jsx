import React from "react";
import "./bottomImgLinks.css"
import emp from "../assets/employee.jpg"
import user from "../assets/user.jpg"
import cup from "../assets/coffeeCup.jpg"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

function BottomImgLinks() {
    const [t, i18n] = useTranslation("global");
    return(
        <div className="bh">
        <div className="bh-container">
             <div className="left-container">
                <img src={user}></img>
                <Link to="/story"><div className="centered">{t("AU.story")}</div></Link>
             </div>
             <div className="right-container">
                <img src={emp}></img>
                <Link to="/employees"><div className="centered">{t("AU.employee")}</div></Link>
             </div>
             
            </div>
        <div className="bottom-img">
            <img src={cup}></img>
            <div className="centered bottom-text">{t("AU.welcome")}</div>
        </div>
        </div>
    );
};

export default BottomImgLinks;