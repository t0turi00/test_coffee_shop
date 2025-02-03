import React, { useState } from "react";
import "./cards.css"

function Cards({item, handleClick, handleChange}) {
    const { title, author, price, img} = item;
    
    return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p className="title-card">{title}</p>
            <p className="author">{author}</p>
            <div className="card_styling">
                <p>Price - {price}€</p>
                <div className="sizes">
                    <p className="size">Koot</p>
                <div className="size_styling">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button> 
                </div>
                    <button className="add_to_cart" onClick={() => handleClick(item)}>Add to cart</button>
                </div>
                
            </div>
            
        </div>
    </div>
    )
}

export default Cards;