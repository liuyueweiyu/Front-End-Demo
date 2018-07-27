import React from "react";
import "./Component-Nav.scss";
import Navlist from "./Component-Navlist";

class Nav extends React.Component{

    render(){
        return(
            <nav className="nav">
                <h1>Travel</h1>
                <Navlist />
            </nav>
        )
    }
}

export default Nav;