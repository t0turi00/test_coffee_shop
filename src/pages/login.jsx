import React from "react";
import "./login.css"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

function Login(){
    const [t, i18n] = useTranslation("global");
    return (
        <div className="login-container">
            <div className="menu-container">
                <div className="container-name">
                    <div className="arrow-left"></div>
                    <h3>{t("login.message")}</h3>
                    <div className="arrow-right"></div>
                </div>
                <div className="form">
                    <form>
                        <p className="email-text">{t("login.email")}:</p>
                        <input type="email" placeholder={t("login.email")} className="email"></input>

                        <p className="pass-text">{t("login.password")}:</p>
                        <input type="password" placeholder={t("login.password")} className="password"></input>

                        <div className="checkbox-container">
                        <input type="checkbox" className="checkbox"></input>
                        <p>{t("login.stay_loggedIn")}</p>
                        </div>

                        <div className="login-btn-container">
                            <button className="login-btn">{t("login.message")}</button>
                            <div className="register"><Link  to="/account/register">{t("login.make_user")}</Link></div>
                        </div>
                    </form>
                </div>
                {/*
                    <div className="bottom-menu">
                        <div className="bottom-arrow"></div>
                    </div>
                */}
            </div>
        </div>
    
    );
}

export default Login;