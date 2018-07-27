import React from "react";
import Nav from "./component/nav/Component-Nav"
import Banner from "./component/banner/Component-Banner"

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Nav />
                <Banner />
            </React.Fragment>
        );
    }
}

export default App;