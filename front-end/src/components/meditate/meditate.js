import React from "react"

import Player from "./player.js"
import Header from "../header/header.js"
import MetaTag from "../meta-tag/meta-tag.js"

class Meditate extends React.Component{
    constructor(props){
        super(props);
    }    

    render(){
        const styleOuter = {
            margin:0,
            position: "relative",
            display: "table",
            
        };
        const styleInner = {
            display: "block",
            verticalAlign: "middle",
        };
        return(
            <div className="fill" style={styleOuter}>
                <MetaTag 
                    title="SoulSion - Meditate" 
                />
                <Header/>
                <Player />
            </div>
        );
    }
}

export default Meditate;