import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";

import HomepageBottomHeader from "./homepage-bottom-header.js";
import HomepageBottomBody from "./homepage-bottom-body.js";
import HomepageTopHeader from "./homepage-top-header.js";
import MetaTag from "../meta-tag/meta-tag.js"


/*
 * Homepage is a two page design
 * First page (HomepageTop) contains logo and some quote
 * Second page (HomepageBottom) contains services
 */



/*
 * HomepageTop : First Page
 */
class HomepageTop extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        
        //const bgimgLocation = "videos/background1.gif";
        const bgimgLocation = "photos/background-1.jpg";
        const background_img_style={
            margin:0,
            backgroundImage:`url(${bgimgLocation})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundAttachment: "fixed",
            position: "relative",
            display: "table",
            backgroundColor:"#F3F3F3"
        };
        
       const video_style={
           position:"fixed",
           right:0,
           bottom:0,
           minWidth:"100%",
           minHeight:"100%"
       };
        return(
            <header className="fill" style={background_img_style}>
                <MetaTag 
                    title="SoulSion" 
                />
                {/*<video autoPlay muted loop style={video_style}>
                    <source src="videos/background1.mp4" type="video/mp4"/>
                </video>*/}
                <HomepageTopHeader/>
            </header>
        );
    }
}




/*
 * HomepageBottom : Second Page
 */
class HomepageBottom extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }

    render(){
        const styleDiv={
            backgroundColor:"#FFFFFF",
            margin:0
        };
        return(
            <div className="fill homapage-section" style={styleDiv}>
                <HomepageBottomHeader />
                <HomepageBottomBody />
            </div>
        );
    }
}


export {HomepageTop,HomepageBottom};
