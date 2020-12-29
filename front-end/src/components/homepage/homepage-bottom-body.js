import React from "react"
import axios from "axios"

/*
 * Service: App button
 *
 */

class Service extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : {
                "id":"",
                "name":"",
                "icon":"",
                "href":"#",
                "title":""
            },
            "loading":true
        };
        this.handleClick =this.handleClick.bind(this);
    }

    set_data(){
        this.setState(
            prevState => {
                return{
                    data:this.props.attributes,
                    loading:false
                }
            }
        );
    }

    handleClick(){
        if(this.state.data["href"]!=="#"){
            window.location.href = process.env.PUBLIC_URL+this.state.data["href"];
        }
    }

    componentDidMount(){
        this.set_data();
    }

    render(){
        return(
            <div 
                className={`app app-hover app-active ${this.state["loading"]===true?"loading":""}`} 
                title={this.state.data["title"]} 
                id={this.state.data["id"]}
                onClick={this.handleClick}
            >
                <img src={this.state.data["icon"]} alt={this.state.data["name"]} />
                <span>{this.state.data["name"]}</span>
            </div>
        );
    }

}


/*
 * Apps: App button
 */
class Apps extends React.Component{
    constructor(props){
        super(props);
        this.state={
            elements : [],
            loading : true
        };
    }

    get_elements(){
        let elements = [];
        this.state["elements"].map((attr)=>{
            elements.push(<Service attributes={attr} key={attr["id"]} />)
        });
        return elements;
    }

    get_data(){
        axios({
            method : 'get',
            url : this.props.attributes["fetch_url"]
        })
        .then((response) => {
            this.setState(
                (prevState)=>{
                    return {
                        elements:response.data,
                        loading:false
                    }
                }
            )
        } ,(error) => {
        });
    }

    componentDidMount(){
        this.get_data();
    }

    render(){
        const elements = this.get_elements();
        const styleDiv={
            "display":"block",
            "position":"relative",
            "minHeight":"100%",
            "minWidth":"100%"
        };
        return(
            <div style={styleDiv} className={`${this.state["loading"]===true?"loading":""}`}>
                {elements}
            </div>
        );
    }
}

class Slider extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const styleDiv={
            "display":"block",
            "position":"relative",
            "bottom":"0px"
        };
        return(
            <div className="slider" style={styleDiv}>
                Silder
            </div>
        );
    }
}


/*
 * HomepageBottomBody: Homepage Bottom content
*/
class HomepageBottomBody extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const styleDiv={
            "height":"100%",
            "width":"100%",
            "display":"block"
        };
        const styleInner = {
            marginLeft: "auto",
            marginRight: "auto"
        };
        const styleMenu = {
            "maxHeight":"82%",
            "minHeight":"82%"
        };
        const appAttributes = {
            "fetch_url":"data/services.json"
        };
        return(
            <div id="homepageBottom" style={styleDiv}>
                <div style={styleMenu} className="menu" >
                    <div style={styleInner} className="menu-container">
                        <Apps attributes={appAttributes}/>
                        {/*<Slider/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomepageBottomBody;