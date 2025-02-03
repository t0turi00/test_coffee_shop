import React, { useState, useEffect}  from "react";
import "./cart.css"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
import trash from "../assets/trash.svg"

function Cart({cart, setCart, handleChange}){
    const [t, i18n] = useTranslation("global");
    const [price, setPrice] = useState(0);
    
    const handlePrice = ()=> {
        let ans = 0;
        cart.map((item)=>(
            ans +=item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.find((item) => item.id === id);
        arr.amount = 1;
        const result = cart.filter((item) => item.id !== arr.id);
        setCart(result);
    }
   
    useEffect(() => {
        handlePrice();
    })

    return (
        <div className="cart-container">
            <div className="menu-container">
                <div className="container-name">
                    <div className="arrow-left"></div>
                    <h3>{t("cart.cart")}</h3>
                    <div className="arrow-right"></div>
                </div>
            {price > 0 ? (
             <article>
                {
                cart?.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} alt="" />
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <button className="value" onClick={() => handleChange(item, -1)}>-</button>
                            <button className="num">{item.amount}</button>
                            <button className="value" onClick={() => handleChange(item, +1)}>+</button>
                        </div>
                        <div className="item-price">
                            <span >€ {item.price} EUR</span>
                            <button onClick={() =>handleRemove(item.id)}><img src={trash}></img></button>
                        </div>
                    </div>
                ))}
                <div className="total">
                    <span>{t("cart.cart_total")}</span>
                    <span>{Math.round(price * 1000)/1000} €</span>
                </div>

                <div className="cart-btn-container">
                    <Link to="/" className="cart-a"><button className="cart-btn">{t("cart.cart_continue")}</button></Link>
                    <Link to="/" className="cart-a"><button className="cart-btn-second">{t("cart.cart_buy")}</button></Link>
                </div>
                </article>
                ): (
                <div> 
                <div className="cart-empty">{t("cart.cart_empty")}</div>
                <div className="login-btn-container">
                    <Link to="/"><button className="login-btn">{t("cart.cart_continue")}</button></Link>
                    <div className="welcome">{t("cart.cart_welcome")}</div>
                </div>
                </div>
                )}

            </div>
        </div>
    );
}

export default Cart;