import React from "react";
import "./Component-Navlist.scss";

class Navlist extends React.Component{

    constructor(props){
        console.log("test");
        
        super(props);
        this.state = {
            navlist : ["首页","去哪儿","美食","主题","评论","组团游"]
        }
        // console.log(this.state)
    }
    render(){
        return(
            <div className="navlist">
                {this.state.navlist.map((v,i)=>{
                    return (<a href="#" key={i.toString()}>{v}</a>);
                })}
            </div>
        );
    }

}

export default Navlist;