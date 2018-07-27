import React from "react";
import "./Component-Bannerlist.scss";

class Bannerlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [
                    {
                        title: "游本地",
                        intro: "我的世界有多美"
                    },
                    {
                        title: "彩虹南非",
                        intro: "非去不可"
                    },
                    {
                        title: "曼谷之旅",
                        intro: "遇见虔诚"
                    },
                    {
                        title: "浪漫巴厘岛",
                        intro: "用相机定格"
                    },
                    {
                        title: "繁华",
                        intro: "探寻现代化"
                    }
                ]
        }
    }
    render(){
        return(
            <div className="bannerlist">
                {
                    this.state.list.map((value,index)=>{
                        return(
                            <div key={index}>
                                <h2>{value.title}</h2>
                                <h3>{value.intro}</h3>
                            </div>
                        );
                    })
                }
                <div>
                    <h2>更多精彩</h2>
                </div>
            </div>
        );
    }
}

export default Bannerlist;