import React from "react";
import "./contact.css"
import store from "../assets/Kahvikauppa.jpg"
import { useTranslation } from "react-i18next";

function Contact() {
    const [t, i18n] = useTranslation("global");
    return(
        <div className="contact-container">
            <div className="contact-menu-container">
                <div className="contact-img-container">
                    <img src={store} className="contact-img"></img>
                    <ul className="contact-info">
                        <p>{t("contact.contact_info")}</p>
                        <li>{t("contact.address")}</li>
                        <li>Imaginary Street 5, 12345</li>
                        <div className="spacer"></div>
                        <li>{t("contact.tel")}</li> 
                        <li>(+358) 123456789</li> 
                        <div className="spacer"></div>
                        <li>{t("contact.email")}</li>
                        <li>coffeeshop@imaginary.com</li>
                    </ul>
                </div>
                <div className="bottom-menu">
                    <div className="bottom-arrow"></div>
                </div>
            </div>    
        </div>
    );
}

export default Contact;