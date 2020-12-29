import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch
  } from "react-router-dom";

import {smooth_scrollX} from "./smooth-scrolling.js";
import Chat from "./chat/chat.js";
import Contribute from "./contribute/index.js"
import Help from "./help/help.js";
import {HomepageBottom,HomepageTop} from "./homepage/homepage.js";
import Login from "./login/login.js";
import Meditate from "./meditate/meditate.js";

let lastScrollTop = 0;

function scrollXYauto(){
    const currScroll = window.pageYOffset || document.documentElement.scrollTop;
    if(currScroll > lastScrollTop){
        smooth_scrollX(window.innerHeight)
    }else{
        smooth_scrollX(-window.innerHeight)
    }
    lastScrollTop = currScroll<=0?0:currScroll

}

function defaultClickHandler(){
    window.location.href = process.env.PUBLIC_URL +"/home";
}

function init(){
    window.addEventListener('scroll',scrollXYauto)
}


function renderHome(){
    const style={
        backgroundColor:"#FFFFFF"
    }
    return(
        <div style={style}>
            <HomepageTop />
            <HomepageBottom/>
        </div>
    );
}

function renderMeditate(){
    return(
        <Meditate/>
    );
}

function renderChat(){
    return(
        <Chat/>
    );
}

function renderHelp(){
    return(
        <div>
            <HomepageTop />
            <Help  close={defaultClickHandler}/>
        </div>
    );
}

function renderLogin(){
    return (
        <div>
            <HomepageTop /> 
            <Login  close={defaultClickHandler}/>
        </div>
    );
}

function renderContribute(){
    return (
        <Contribute/>
    );
}

function App(props){
    
    
    //For Deploying on github
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const  route = urlParams.get("route")
    console.log("New Deploy 0")
    if(route === null || route === "home"){
        return renderHome();
    }else if(route === "meditate"){
        return renderMeditate();
    }else if(route === "chat"){
        return renderChat();
    }else if(route === "login"){
        return renderLogin();
    }else if(route === "help"){
        return renderHelp()
    }else if(route.indexOf("contribute") !== -1) {
        return renderContribute();
    }else{
        return renderHome();
    }
    // basename={process.env.PUBLIC_URL)
    /*
   console.log('deploy1');
   console.log(process.env.PUBLIC_URL)
    
   
    return (
        <Router basename="/SoulSion">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route exact path="/home">
                    {renderHome()}
                </Route>
                <Route exact path="/login">
                    {renderLogin()}
                </Route>
                <Route exact path="/help">
                    {renderHelp()}
                </Route>
                <Route exact path="/meditate">
                    {renderMeditate()}
                </Route>
                <Route exact path="/chat">
                    {renderChat()}
                </Route>
                <Route path="/contribute">
                    {renderContribute()}
                </Route>
                <Route path="/">
                </Route>
            </Switch>
        </Router>
    );
    */
}

export default App;