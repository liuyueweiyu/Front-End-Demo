import React from "react";
import "./Component-Banner.scss";
import Bannerlist from "./Component-Bannerlist.js";

class Banner extends React.Component{
    render(){
        return (
            <div className="banner">
                <img src={require("./banner.png")} />
                <Bannerlist />
            </div>
        );
    }
}

export default Banner;