import axios from "axios";
import React from "react";



/*
 * Logo : Homepage Top logo
 */
class Logo extends React.Component{
    constructor(props){
        super(props);
    }
    getLogo(){
        const style = {
            "transform":"rotate(0deg)"
        };
        /*
            
            <svg height="70" width="176.25" style={style}>
                <path d="M 39 10 q 50 100 100 0" stroke="black" strokeWidth="20" fill="none" />
                Millennials'
            </svg>
        */
        return(
            <img src="icons/logo-green-100.png" height="70px" alt="" />
        );
    }
    render(){
        return(
            <h1 className="font-weight-light">{this.getLogo()}</h1>
        );
    }
}



/*
 * Quote: Homepage Top Quote
 */
class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                "quote":"Peace begins with a smile",
                "author":"Mother Teresa"
            },
            loading:true,
            extra_classes:""
        };
        this.handleTouch = this.handleTouch.bind(this);
    }

    get_quote(){
        axios({
            method : 'get',
            url : this.props.attributes["fetch_url"]
        })
        .then((response) => {
            this.setState(
                (prevState)=>{
                    return {
                        data:response.data,
                        loading:false
                    }
                }
            );
        } ,(error) => {
        });
    }

    componentDidMount(){
        this.get_quote();  
    }

    handleTouch(){
        this.setState(
            (prevState)=>{
                return {
                    extra_class:"author"
                }
            }
        );
        setTimeout(
            ()=>{
                this.setState(
                    (prevState)=>{
                        return {
                            extra_class:""
                        }
                    }
                )
            }
        ,1400);
    }

    render(){
        return(
            <div>
                <blockquote 
                    className={`quote ${this.state["loading"]===true?"loading":""} ${this.state.extra_class}`}
                    data-author={" - "+this.state.data["author"]}
                    onTouchStart = {this.handleTouch}
                >
                    “
                    {this.state.data["quote"]}
                    ”
                </blockquote>
            </div>
        );
    }
}


/*
 * HomepageTopHeader : Home page Top content
 */
class HomepageTopHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const styleOuter = {
            display: "table-cell",
            verticalAlign: "middle",
        };
        const styleDiv = {
            display: "block",
            position: "relative",
            minHeight: "100px",
            marginBottom:"5%"
        };
        const quote_attr = {
            "fetch_url": "data/quote.json"
        };
        const styleInner = {
        };
        return (
            <div style={styleOuter}>
                <div id="homepageTop" style={styleDiv}>
                    <div>
                        <div className="text-center" style={styleInner} >
                            <Logo />
                            <Quote attributes={quote_attr}/>
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomepageTopHeader;