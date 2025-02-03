import React from "react";
import list from "./data";
import "./menu.css"
import Cards from "../components/cards";


function Menu({handleClick}){
    return(
        <div className="Menu_container">
            <div className="grid_menu_container">
        {
            list.map((item) => (
                <Cards item={item} key={item.id} handleClick={handleClick}/>
            ))
        }
            </div>
        </div>
    )
}


export default Menu;