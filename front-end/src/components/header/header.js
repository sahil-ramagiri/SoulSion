import React from "react";


class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const outerStyle ={
            height:"60px",
            padding:"5px",
            width:"100%",
            width:"100vw",
            boxShadow:"0px 1px 5px 0px #ccc",
            borderBottom:"1px solid #ccc",
            marginBottom:"20px"
        }
        return(
            <div style={outerStyle}>
                <div>
                    <a href="/SoulSion">
                        <img height="40px" src="icons/logo-40.png"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;