import React from "react";

import MetaTag from "../meta-tag/meta-tag.js";

class LoginService extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const styleIconSpan = {
            position:"absolute",
            left:"0px",
            borderRadius : "4px 0px 0px 4px",
            width: "45px",
            height: "42px",
            backgroundColor: this.props.attributes["innerBackground"]
        };

        const styleCname = {
            width:"100%",
            textAlign:"center"
        };

        const bgOuter = {
            backgroundColor: this.props.attributes["outerBackground"]
        };

        return(
            <div className="login" style={bgOuter}>
                <span style={styleIconSpan}>
                    {this.props.attributes["logo"]}
                </span>
                <span style={styleCname}>
                    {this.props.attributes["name"]}
                </span>
            </div>
        );
    }
}

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayed: true,
            titleText:"Sign In"
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    getLoginServices(){
       const loginMethods = [
            {
                "name":"Google",
                "outerBackground":"#0073B1",
                "innerBackground":"#FFFFFF",
                "logo":<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" ><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"></path><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"></path><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"></path><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"></path></svg>
            },
            {
                "name":"LinkedIn",
                "outerBackground":"#252525",
                "innerBackground":"#FFFFFF",
                "logo":<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 512 512" ><path fill="#0073B1" d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683 C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615 c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915 s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/></svg>
            },
            {
                "name":"Instagram",
                "outerBackground":"#0073B1",
                "innerBackground":"#FFFFFF",
                "logo":<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551.034 551.034"><path fill="#E6475E" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"/><path fill="#E6475E" d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"/><circle fill="#000" cx="418.306" cy="134.072" r="34.149"/></svg>
            },
            {
                "name":"Facebook",
                "outerBackground":"#252525",
                "innerBackground":"#FFFFFF",
                "logo":<svg xmlns="http://www.w3.org/2000/svg" viewBox="50 67 400 368"><path d="M432.5 250c0-100.8-81.7-182.5-182.5-182.5S67.5 149.2 67.5 250c0 91.1 66.7 166.6 154 180.3V302.8h-46.3V250h46.3v-40.2c0-45.7 27.2-71 68.9-71 20 0 40.9 3.6 40.9 3.6v44.9h-23c-22.7 0-29.7 14.1-29.7 28.5V250h50.6l-8.1 52.8h-42.5v127.5c87.2-13.7 153.9-89.2 153.9-180.3z" fill="#fff"></path><path d="M321 302.8l8.1-52.8h-50.6v-34.2c0-14.4 7.1-28.5 29.7-28.5h23v-44.9s-20.9-3.6-40.9-3.6c-41.7 0-68.9 25.3-68.9 71V250h-46.3v52.8h46.3v127.5c9.3 1.5 18.8 2.2 28.5 2.2s19.2-.8 28.5-2.2V302.8H321z" fill="#0073B1"></path></svg>
            }
        ];
        let all_elements = [];
        loginMethods.forEach(element => {
            all_elements.push(<LoginService attributes={
                element
            }/>);
        });
        return all_elements;
    }

    show(){
        this.setState((prevState)=>{
            return {
                displayed:true
            }
        });
    }

    hide(){
        this.setState((prevState)=>{
            return {
                displayed:false
            }
        });
    }

    render() {
        const login_services = this.getLoginServices();
        const styleOuter = {
            display: "table-cell",
            verticalAlign: "middle",
        };

        const styleDiv = {
            position: "relative",
            width: "350px",
            padding : "15px",
            border : "1px solid black",
            borderRadius : "10px",
            backgroundColor: "#FFF",
            marginLeft: "auto",
            marginRight:"auto"
        };

        const styleHeader = {
            fontFamily : "monospace",
            fontSize: "25px",
            fontWeight:"900"
        };

        const styleClose = {
            float : "right",
            padding : "0px"
        };

        const styleText = {
            width : "100%",
            textAlign : "center",
            marginTop : "20px",
            marginBottom : "30px",
            fontFamily: "serif",
            color: "gray",
            fontSize: "18px"
        };
        
        return (
            <div className={`black-background-static ${this.state.displayed === false ? "hidden" : ""}`}>
                <MetaTag 
                    title="SoulSion - Login" 
                />
                <div style={styleOuter}>
                    <div>
                        <div style={styleDiv}>
                            <div>
                                <span style={styleHeader}>
                                    {this.state["titleText"]}
                                </span>
                                <span style={styleClose} onClick={this.props.close === null ? null : this.props.close} className="login-close">
                                   
                                </span>
                            </div>
                            <div style={styleText}>
                                Get exclusive services by logging in
                            </div>
                            <div>
                                {login_services}
                            </div>
                            <div className="blank">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;