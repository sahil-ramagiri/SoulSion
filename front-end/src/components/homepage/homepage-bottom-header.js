import React from "react";


import Help from "../help/help.js";
import Login from "../login/login.js";
import { get_inner_height } from "../utils/size_util";

/*
 * LoginBtn: Login button
 */
class LoginBtn extends React.Component{
    loginElement = null;
    constructor(props){
        super(props);
        this.state = {
            login_displayed : false
        };
        this.display_login = this.display_login.bind(this);
        this.hide_login = this.hide_login.bind(this);
    }

    componentDidMount(){
        let loginBox = <Login close={this.hide_login}/>;
        this.loginElement = loginBox;
    }
    display_login() {
        this.setState((prevState)=>{
            return {
                login_displayed:true
            }
        });
        window.scrollTo(0, get_inner_height());
        document.body.classList.add('noscroll');
    }
    
    hide_login(){
        this.setState((prevState)=>{
            return {
                login_displayed:false
            }
        });
        document.body.classList.remove('noscroll');
    }
    
    
    render(){
        const styleDiv = {
            "display":"inline-block",
            "float":"left"
        };
        return(
            <div title="Login to get exclusive services">
                <div className="app-sm app-hover app-active" style={styleDiv} onClick={this.display_login}>
                    <img src="icons/login.svg"/>
                </div>
                <div>
                    {this.state.login_displayed===true?this.loginElement:null}
                </div>
            </div>
        );
    }
}


/*
 * HelpBtn: Support button
 */
class HelpBtn extends React.Component{
    helpElement = null;
    constructor(props){
        super(props);
        this.state = {
            help_displayed : false
        };
        this.display_help = this.display_help.bind(this);
        this.hide_help = this.hide_help.bind(this);
    }

    componentDidMount(){
        let helpBox = <Help close={this.hide_help}/>;
        this.helpElement = helpBox;
    }
    display_help() {
        this.setState((prevState)=>{
            return {
                help_displayed:true
            }
        });
        window.scrollTo(0, get_inner_height());
        document.body.classList.add('noscroll');
    }

    hide_help(){
        this.setState((prevState)=>{
            return {
                help_displayed:false
            }
        });
        document.body.classList.remove('noscroll');
    }

    render(){
        const styleDiv = {
            "display":"inline-block",
            "float":"right"
        };
        return(
            <div title="Need a help?">
                <div className="app-sm app-hover app-active" style={styleDiv} onClick={this.display_help}>
                    <img src="icons/info.svg"/>
                </div>
                <div>
                    {this.state.help_displayed===true?this.helpElement:null}
                </div>
            </div>
        );
    }
}


/*
 * HomepageBottomHeader: Homepage Bottom, top portion
 */
class HomepageBottomHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const style={
            "height":"18%",
            "display":"block",
        };
        return(
            <div style={style}>
                <LoginBtn />
                <HelpBtn />
            </div>
        );
    }
}

export default HomepageBottomHeader;