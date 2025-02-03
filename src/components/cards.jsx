import React, { useState } from "react";
import "./cards.css"
import { useTranslation } from "react-i18next";

function Cards({item, handleClick, handleChange}) {
    const { title, author, price, img} = item;
    const [t, i18n] = useTranslation("global");
    
    return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p className="title-card">{title}</p>
            <p className="author">{author}</p>
            <div className="card_styling">
                <p>{t("products.price")} - {price}€</p>
                <div className="sizes">
                    <p className="size">{t("products.size")}</p>
                <div className="size_styling">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button> 
                </div>
                    <button className="add_to_cart" onClick={() => handleClick(item)}>{t("products.addToCart")}</button>
                </div>
                
            </div>
            
        </div>
    </div>
    )
}

export default Cards;