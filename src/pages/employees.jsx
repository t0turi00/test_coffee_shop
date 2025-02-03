import React from "react";
import "./employees.css"
import employee1 from "../assets/employees2.jpg"
import employee2 from "../assets/employees1.jpg"
import employee3 from "../assets/employees3.jpg"
import { useTranslation } from "react-i18next";

function Employees() {
    const [t, i18n] = useTranslation("global");
    return(
        <div className="story-container">
            <div className="employee-menu-container">
            <div className="main-title">{t("employees.emps")}</div>
            <div className="employee-container2">
                    <div className="title2">
                        {t("employees.emp1")}
                        <p>Maecenas auctor quam a libero hendrerit, quis viverra ipsum molestie. Mauris ut ullamcorper turpis, nec viverra tellus. Fusce velit tortor, accumsan eget metus ac, venenatis lacinia ligula. Sed egestas diam sit amet turpis semper suscipit. Donec turpis magna, malesuada id lorem vitae, elementum euismod nisi. Sed pretium lorem a elit pharetra, lacinia tristique ipsum suscipit</p>
                    </div>
                    <img src={employee1}></img>
                </div>

                
                <div className="employee-container">
                    <img src={employee2}></img>
                    <div className="title3">
                        {t("employees.emp2")}
                        <p>Maecenas auctor quam a libero hendrerit, quis viverra ipsum molestie. Mauris ut ullamcorper turpis, nec viverra tellus. Fusce velit tortor, accumsan eget metus ac, venenatis lacinia ligula. Sed egestas diam sit amet turpis semper suscipit. Donec turpis magna, malesuada id lorem vitae, elementum euismod nisi. Sed pretium lorem a elit pharetra, lacinia tristique ipsum suscipit</p>
                    </div>
                </div>
                <div className="employee-container2">
                    <div className="title2">
                        {t("employees.emp3")}
                        <p>Maecenas auctor quam a libero hendrerit, quis viverra ipsum molestie. Mauris ut ullamcorper turpis, nec viverra tellus. Fusce velit tortor, accumsan eget metus ac, venenatis lacinia ligula. Sed egestas diam sit amet turpis semper suscipit. Donec turpis magna, malesuada id lorem vitae, elementum euismod nisi. Sed pretium lorem a elit pharetra, lacinia tristique ipsum suscipit</p>
                    </div>
                    <img src={employee3}></img>
                </div> 
                <div className="bottom-menu">
                    <div className="bottom-arrow"></div>
                </div>  
            </div>    
        </div>
    );
}

export default Employees;