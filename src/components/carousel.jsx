import React, { useEffect, useState } from "react";
import "./carousel.css"
import coffee_img from "../assets/coffee-img.jpg"
import coffee_img2 from "../assets/coffee-img2.jpg"
import coffee_img3 from "../assets/coffee-img3.jpg"
import { useTranslation } from "react-i18next";

function Carousel() {
    const [t, i18n] = useTranslation("global");
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() =>{
       timeOut = 
       autoPlay && 
       setTimeout(()=>{
            slideRight()
        }, 3500);
    })

    const slideLeft =() => {
        /*(condition) ? true : false*/ 
        setCurrent(current=== 0 ? images.length - 1 : current - 1)
    };
    const slideRight =() => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
        /*if (current === images.length - 1){
            setCurrent(0)
        }else {
            setCurrent(current+1)
        }
            above turnery operation runs the same thing
        */
        
    };

    const images = [
        {
            img: coffee_img2,
            title: t("IMG.first"),
        },
        {
            img: coffee_img,
            title: t("IMG.second"),
        },
        {
            img: coffee_img3,
            title: t("IMG.third"),
        },
    ];

    console.log(current)
    return (
        <div className="carousel" 
        onMouseEnter={() => {
                setAutoPlay(false);
                clearTimeout(timeOut)
            }} 
            onMouseLeave={() => {
                setAutoPlay(true);
                clearTimeout(timeOut)
            }}>
            <div className="carousel-wrapper">
                {images.map((image, index) => {
                    return (
                    <div key={index} className={index==current ? "carousel-card carousel-card-active" : "carousel-card"}>
                        <img className="card-image" src={image.img} alt=""></img>
                        <div className="card-overlay"> 
                            <h2 className="card-title">{image.title}</h2>
                            </div>
                    </div>
                    );
                })}
                <div className="carousel-arrow-left" onClick={slideLeft}> &#8227; </div>
                <div className="carousel-arrow-right" onClick={slideRight}> &#8227; </div>
                <div className="carousel-pagination">
                    {images.map((_,index) => {
                        return (
                            <div key={index} className={index==current ? "pagination-dot pagination-dot-active" : "pagination-dot"} onClick={() => setCurrent(index)}> </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
