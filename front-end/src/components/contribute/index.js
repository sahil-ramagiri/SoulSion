import axios from "axios";
import React from "react";
import ReactMarkdownWithHtml  from 'react-markdown'


class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const outerStyle ={
            height:"70px",
            padding:"6px",
            width:"100%",
            width:"100vw",
            boxShadow:"0px 1px 5px 0px #ccc",
            borderBottom:"1px solid #ccc",
            marginBottom:"20px",
            maxWidth:"100%"
        };
        const styleTitle = {
            fontSize:"40px",
            fontWeight:"light",
            color:"#4B8368"
        };
        const styleGithub = {
            float:"right"
        };
        const stylegithubIcon = {
            height:"50px"
        };
        return (
            <div style={outerStyle}>
                <span>
                    <a href="https://soulsion.com" style={styleTitle}><img src="icons/logo-40.png" /></a>
                    
                </span>
                <span style={styleGithub} title="Start your journey here">
                    <a href="https://github.com/sauravshah31/SoulSion" target="_blank" rel="noopener noreferrer">
                        <img src="icons/github-64.png" style={stylegithubIcon}/>
                    </a>
                </span>
            </div>
        );
    }
}


const helloWrapper = ["Hello","Hola","नमस्ते","Bonjour","Olá"," Dzień dobry","Zdravstvuyte","Ciao"];
let prevToggleState = 0;


function fadeHello(element,opacity,currToggleState){
    opacity -= 0.02;
    setTimeout(()=>{
        if(opacity <=0.2 || currToggleState !== prevToggleState)
            return;
        
        element.style.opacity = opacity;
        fadeHello(element,opacity,currToggleState);
    },10);
}

function displayHello(element,i){
    element.style.opacity = 1;
    element.textContent = helloWrapper[i];
    let timer;
    setTimeout(()=>{
        let opacity = 1;  
        timer = setInterval(function () {
            if (opacity <= 0.2){
                clearInterval(timer);
            }
            element.style.opacity = opacity;
            element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
            opacity -=  0.01;
        }, 10);
        
        //fadeHello(element,1,i);
    },1200);
    setTimeout(()=>{
        i = (i+1)%helloWrapper.length;
        prevToggleState = i;
        clearInterval(timer);
        displayHello(element,i);
    },1700);
}

function HelloWrapper(){
    const element = document.createElement('div');
    element.style.height = "100px";
    element.style.width = "100%";
    element.style.padding = "10px";
    element.style.textAlign = "center";
    element.style.fontSize = "40px";
    document.getElementById('main').prepend(element);
    displayHello(element,0);
}

class MarkdownContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "markdown":""
        };
    }

    componentDidMount(){
        const filePath = this.props.filePath;
        axios({
            method : 'get',
            url : filePath
        })
        .then((response) => {
            const items = response.data.items;
            this.setState(
                prevState => {
                    return{
                        "markdown":response.data
                    }
                }
            );
        } ,(error) => {
        });
    }

    render(){
        return (
            <ReactMarkdownWithHtml allowDangerousHtml children={this.state["markdown"]} />
        );
    }
}

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "name":"",
            "email":"",
            "title":"",
            "message":"",
            "error":{  
                "name":"",
                "email":"",
                "title":"",
                "message":"",
            },
            "response":"",
            "errorResponse":"",
            "sending":false

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
        const {name,value} = event.target ;
        let error = "";
        switch(name){
            case 'name':
                if(value.length>100)
                    error = "Name can not be more than 100 characters";
                break;

            case 'email':
                if(value.length>120)
                    error = "Email can not be more than 120 characters";
                break;

            case 'title':
                if(value.length>100)
                    error = "Title can not be more than 100 characters";
                break;

            case 'message':
                if(value.length>500)
                    error = "Message can not be more than 500 characters";
                break;
        }
        this.setState((prevState)=>(
            {
                [name]:value,
                "error":Object.assign(prevState.error,{
                    [name]:error
                })
            }
        ));
        
       
    }

    
    handleSubmit(event){
        event.preventDefault();
        if(this.state.sending){
            return;
        }
        this.setState({
            "response":"Sending Message...",
            "sending":true
        });
        axios({
            method : 'post',
            url : "https://soulsionapi.herokuapp.com/api/message",
            data:this.state
        })
        .then((response) => {
            this.setState({
                "response":"Your message has been sent, we will get back to you soon",
                "name":"",
                "email":"",
                "title":"",
                "message":"",
                "error":{  
                    "name":"",
                    "email":"",
                    "title":"",
                    "message":"",
                },
                "errorResponse":"",
                "sending":false
            });
            event.target.reset();
        } ,(error) => {
            if(error.response!=undefined && error.response.data!==undefined && error.response.data.error!==undefined){
                this.setState({
                    "response":"",
                    "error":error.response.data.error,
                    "sending":false
                })
            }else{
                this.setState({
                    "response":"",
                    "errorResponse": "We have encountered some error. Please send us an email at sauravshah.31@gmail.com",
                    "sending":false
                })
            }
        });
    }

    render(){
        const errorStyle = {
            color:"#FF5555",
            fontSize:"12px",
            fontWeight:"lighter"
        };
        const successStyle = {
            color:"#21B531",
            fontSize:"12px",
            fontWeight:"lighter"
        };

        const divStyle = {
            display:"block",
            backgroundColor:"#F7F7F7",
            width:"100%",
            padding:"10px",
            margin:"auto",
            borderRadius:"9px"
        };

        const labelStyle={
            width:"100%"
        }
        const titleStyle = {
            fontFamily:"monospace",
            fontSize:"16px",
            marginTop:"10px"
        };
        const inputStyle={
            width:"100%",
            padding:"6px",
            border:"1px solid #ccc",
            borderRadius:"4px"
        };

        const textAreaStyle = {
            width:"100%",
            padding:"6px",
            border:" 1px solid #ccc",
            borderRadius:"4px",
            height:"100px",
            resize:"none"
        };

        const buttonStyle = {
            marginTop:"20px",
            width:"100%",
            padding:"5px",
            border:"1px solid #ccc",
            borderRadius:"4px",
            fontSize:"16px"
        };

        return (
            <div style={divStyle}>
                <form onSubmit={this.handleSubmit} >
                    <div style={successStyle}>
                        {this.state.response}
                    </div>
                    <div style={errorStyle}>
                        {this.state.errorResponse}
                    </div>
                    <div >
                        <label style={labelStyle}>
                            <div style={titleStyle}>Your Name</div>
                            <div style={errorStyle}>{this.state.error["name"]}</div>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Type you full name" 
                                onChange = {this.handleChange} 
                                value = {this.state.name}
                                style={inputStyle}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label style={labelStyle}>
                            <div style={titleStyle}>Your Email</div>
                            <div style={errorStyle}>{this.state.error["email"]}</div>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="xyz@xyz.xyz" 
                                onChange={this.handleChange} 
                                value = {this.state.email}
                                style={inputStyle}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label style={labelStyle}>
                            <div style={titleStyle}>Title</div>
                            <div style={errorStyle}>{this.state.error["title"]}</div>
                            <input 
                                type="text" 
                                name="title" 
                                onChange={this.handleChange}
                                value = {this.state.title} 
                                style={inputStyle}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label style={labelStyle}>
                            <div style={titleStyle}>Message</div>
                            <div style={errorStyle}>{this.state.error["message"]}</div>
                            <textarea 
                                name="message"
                                onChange={this.handleChange} 
                                value={this.state.message}
                                style={textAreaStyle}
                            />
                        </label>
                    </div>
                    <div>
                        <input style={buttonStyle} type="submit" value="Send" onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        );
    }
}


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "name":"",
            "email":"",
            "role":this.props.role,
            "utype":"3",
            "error":{  
                "name":"",
                "email":"",
            },
            "response":"",
            "errorResponse":"",
            "sending":false

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
        const {name,value} = event.target ;
        let error = "";
        switch(name){
            case 'name':
                if(value.length>100)
                    error = "Name can not be more than 100 characters";
                break;

            case 'email':
                if(value.length>120)
                    error = "Email can not be more than 120 characters";
                break;
        }
        this.setState((prevState)=>(
            {
                [name]:value,
                "error":Object.assign(prevState.error,{
                    [name]:error
                })
            }
        ));
    }

    
    handleSubmit(event){
        event.preventDefault();
        if(this.state.sending){
            return;
        }
        this.setState({
            "response":"You are being registered, please wait...",
            "sending":true
        });
        axios({
            method : 'post',
            url : "https://soulsionapi.herokuapp.com/api/register",
            data:this.state
        })
        .then((response) => {
            this.setState({
                "response":"You are now registered. Welcome to Team SoulSion.",
                "name":"",
                "email":"",
                "role":this.props.role,
                "utype":3,
                "error":{  
                    "name":"",
                    "email":""
                },
                "errorResponse":"",
                "sending":false
            });
            event.target.reset();
        } ,(error) => {
            console.log("Error");
            if(error.response!=undefined && error.response.data!==undefined && error.response.data.error!==undefined){
                this.setState({
                    "response":"",
                    "error":error.response.data.error,
                    "sending":false
                })
            }else{
                this.setState({
                    "response":"",
                    "errorResponse": error.response&&error.response.data&&error.response.data.registered?"You are already registered.":"We have encountered some error. Don't worrry, join our slack channel and we will take care of the rest.",
                    "sending":false
                })
            }
        });
    }

    render(){
        const errorStyle = {
            color:"#FF5555",
            fontSize:"12px",
            fontWeight:"lighter"
        };
        const successStyle = {
            color:"#21B531",
            fontSize:"12px",
            fontWeight:"lighter"
        };

        const divStyle = {
            display:"block",
            backgroundColor:"#F7F7F7",
            width:"100%",
            padding:"10px",
            margin:"auto",
            borderRadius:"9px"
        };

        const labelStyle={
            width:"100%"
        }
        const titleStyle = {
            fontFamily:"monospace",
            fontSize:"16px",
            marginTop:"10px"
        };
        const inputStyle={
            width:"100%",
            padding:"6px",
            border:"1px solid #ccc",
            borderRadius:"4px"
        };
        const spanStyle = {
            marginLeft:"10px"
        }
        const buttonStyle = {
            marginTop:"20px",
            width:"100%",
            padding:"5px",
            border:"1px solid #ccc",
            borderRadius:"4px",
            fontSize:"16px"
        };

        return (
            <div style={divStyle}>
                <form onSubmit={this.handleSubmit} >
                    <div style={successStyle}>
                        {this.state.response}
                    </div>
                    <div style={errorStyle}>
                        {this.state.errorResponse}
                    </div>
                    <div >
                        <label style={labelStyle}>
                            <div style={titleStyle}>Your Name</div>
                            <div style={errorStyle}>{this.state.error["name"]}</div>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Type you full name" 
                                onChange = {this.handleChange} 
                                value = {this.state.name}
                                style={inputStyle}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label style={labelStyle}>
                            <div style={titleStyle}>Your Email</div>
                            <div style={errorStyle}>{this.state.error["email"]}</div>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="xyz@xyz.xyz" 
                                onChange={this.handleChange} 
                                value = {this.state.email}
                                style={inputStyle}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label style={labelStyle}>
                            <div style={titleStyle}>Role Assigned</div>
                            <input 
                                type="text" 
                                name="role" 
                                value = {this.props.role} 
                                style={inputStyle}
                                required
                                readOnly
                            />
                        </label>
                    </div>
                    <div>
                        <label style={labelStyle}>
                            <input 
                                type="radio"
                                name="utype"
                                value="1"
                                checked={this.state.utype==="1"?true:false}
                                onChange={this.handleChange}
                            />
                            <span style={spanStyle}>I am an expert</span>
                        </label>
                        <label style={labelStyle}>
                            <input 
                                type="radio"
                                name="utype"
                                value="2"
                                checked={this.state.utype==="2"?true:false}
                                onChange={this.handleChange}
                            />
                            <span style={spanStyle}>I am still learning</span>
                        </label>
                        <label style={labelStyle}>
                            <input 
                                type="radio"
                                name="utype"
                                value="3"
                                checked={this.state.utype==="3"?true:false}
                                onChange={this.handleChange}
                            />
                            <span style={spanStyle}>I am expert and learning</span>
                        </label>
                    </div>
                    <div>
                        <input style={buttonStyle} type="submit" value="Register" onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        );
    }
}


function Footer(){
    const style={
        height:"70px",
        display:"block"
    }
    return(
        <div style={style}>

        </div>
    )
}

class Contribute extends React.Component{
    constructor(){
        super();
        this.state = {"hello":false};
    }

    componentDidMount(){
        this.state["hello"]&&HelloWrapper();
    }

    render(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const  route = urlParams.get("route")
        const markdownStyle = {
            fontSize:"1.3em",
            display:"block",
            width:"100%",
            maxWidth:"700px",
            margin:"0",
            padding:"0",
            margin:"auto",
            boxSizing:"border-box",
            padding:"5px"
        }
        if(route === "contribute"){
            return(
                <div>
                    <Header/>
                    <div style={markdownStyle} id="main">
                        <MarkdownContent filePath="data/content/contribute.md" allowDangerousHtml/>
                        <Message/>
                    </div>
                    <Footer/>
                </div>
            );
        }else if(route.indexOf("resources")!==-1){
            return(
                <div>
                    <Header/>
                    <div style={markdownStyle} id="main">
                        <MarkdownContent filePath="data/content/contribute_resources.md" allowDangerousHtml/>
                    </div>
                    <Footer/>
                </div>
            );
        }
        this.state["hello"] = true;
        if(route.indexOf("front-end")!==-1){
            return(
                <div>
                    <Header/>
                    <div style={markdownStyle} id="main">
                        <MarkdownContent filePath="data/content/contribute_front-end.md" allowDangerousHtml/>
                        <Register role="Front End Developer"/>
                    </div>
                    <Footer/>
                </div>
            );
        }else if(route.indexOf("back-end")!==-1){
            return(
                <div>
                    <Header/>
                    <div style={markdownStyle} id="main">
                        <MarkdownContent filePath="data/content/contribute_back-end.md" allowDangerousHtml/>
                        <Register role="Back End Developer"/>
                    </div>
                    <Footer/>
                </div>
            );
        }else if(route.indexOf("design")!==-1){
            return(
                <div>
                    <Header/>
                    <div style={markdownStyle} id="main">
                        <MarkdownContent filePath="data/content/contribute_design.md" allowDangerousHtml/>
                        <Register role="Designer"/>
                    </div>
                    <Footer/>
                </div>
            );
        }else if(route.indexOf("create")!==-1){
            return(
                <div>
                    <Header/>
                    <div style={markdownStyle} id="main">
                        <MarkdownContent filePath="data/content/contribute_create.md" allowDangerousHtml/>
                        <Register role="Creator"/>
                    </div>
                    <Footer/>
                </div>
            );
        }else if(route.indexOf("community")!==-1){
            return(
                <div>
                    <Header/>
                    <div style={markdownStyle} id="main">
                        <MarkdownContent filePath="data/content/contribute_community.md" allowDangerousHtml/>
                        <Register role="Community Leader"/>
                    </div>
                    <Footer/>
                </div>
            );
        }else if(route.indexOf("others")!==-1){
            return(
                <div>
                    <Header/>
                    <div style={markdownStyle} id="main">
                        <MarkdownContent filePath="data/content/contribute_others.md" allowDangerousHtml/>
                        <Register role="Others"/>
                    </div>
                    <Footer/>
                </div>
            );
        }else{
            window.location.href = process.env.PUBLIC_URL +"/home";
        }
    }
}

export default Contribute;