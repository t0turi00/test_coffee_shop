import React from "react";
import "./story.css"
import aboutUs from "../assets/about-us-page1.jpg"
import aboutUs2 from "../assets/about-us-page2.jpg"
import { useTranslation } from "react-i18next";

function Story() {
    const [t, i18n] = useTranslation("global");
    return(
        <div className="story-container">
        <div className="story-menu-container">
            <div className="title">{t("story.our_story")}</div>
            <div className="img-container">
                <img className="story-img" src={aboutUs}></img>
                <div className="bottom-title">
                    {t("story.born")}
                    <p className="img-paragraph">Lorem ipsum COFFEE sit amet, consectetur AMAZING elit. Suspendisse vestibulum lacus mi, GOOD suscipit leo.Aliquam non dignissim augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi dignissim laoreet nulla at vulputate. Nam finibus id nulla ac tincidunt. Nam nec diam at elit bibendum volutpat. Praesent blandit, risus eget pulvinar commodo, turpis massa eleifend augue, at volutpat magna quam ut sapien. In cursus risus vitae arcu gravida, ut consectetur turpis porta. Praesent commodo, ligula a ullamcorper posuere, lorem ex viverra velit, id venenatis felis turpis interdum erat. Curabitur ligula nisi, blandit id dolor vel, feugiat lacinia mi. Aliquam nulla purus, vehicula eu eleifend at, aliquet quis arcu. Maecenas sagittis, leo vitae imperdiet congue, leo elit auctor mauris, et scelerisque ante lorem in ipsum. Mauris ultrices, metus at pretium placerat, dolor justo eleifend dui, at ornare ex est et libero. Mauris hendrerit nulla a purus posuere, quis dapibus lacus maximus.</p>
                </div>
            </div>
            <div className="img-container2">
                <div className="bottom-title2">
                    {t("story.first_shop")}
                    <p className="img-paragraph2">Lorem ipsum COFFEE sit amet, consectetur AMAZING elit. Suspendisse vestibulum lacus mi, GOOD suscipit leo.Aliquam non dignissim augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi dignissim laoreet nulla at vulputate. Nam finibus id nulla ac tincidunt. Nam nec diam at elit bibendum volutpat. Praesent blandit, risus eget pulvinar commodo, turpis massa eleifend augue, at volutpat magna quam ut sapien. In cursus risus vitae arcu gravida, ut consectetur turpis porta. Praesent commodo, ligula a ullamcorper posuere, lorem ex viverra velit, id venenatis felis turpis interdum erat. Curabitur ligula nisi, blandit id dolor vel, feugiat lacinia mi. Aliquam nulla purus, vehicula eu eleifend at, aliquet quis arcu. Maecenas sagittis, leo vitae imperdiet congue, leo elit auctor mauris, et scelerisque ante lorem in ipsum. Mauris ultrices, metus at pretium placerat, dolor justo eleifend dui, at ornare ex est et libero. Mauris hendrerit nulla a purus posuere, quis dapibus lacus maximus.</p>
                </div>
                <img className="story-img2" src={aboutUs2}></img>
            </div>
            <div className="bottom-menu">
                <div className="bottom-arrow"></div>
            </div>
        </div>    
    </div>
    );
}

export default Story;