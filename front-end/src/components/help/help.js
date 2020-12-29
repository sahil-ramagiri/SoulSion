import React from "react";


import MetaTag from "../meta-tag/meta-tag.js";
import { get_inner_height } from "../utils/size_util";

class HelpSection extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        const style = {
            border:"1px solid gray",
            borderRadius:"4px",
            fontSize:"20px",
            padding:"4px"
        };

        const copyright = {
            textAlign:"center",
            fontSize:"14px",
            backgroundColor:"wheat",
            borderRadius:"4px"
        };

        return (
            <div>
                <div style={style}>
                    SoulSion is now open source. Head on to <a href="/contribute">this link </a> if you wan't to contribute.
                </div>
            </div>
        );
    }
}   

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayed: true
        };
    }

    render() {
        const styleOuter = {
            display: "table-cell",
            verticalAlign: "middle",
        };
        const styleDiv = {
            position: "relative",
            width: "100%",
            padding: "15px",
            border: "1px solid black",
            borderRadius: "10px",
            backgroundColor: "#FFF",
            marginLeft: "1px",
            maxHeight: get_inner_height()
        };

        const styleHeader = {
            fontFamily: "monospace",
            fontSize: "25px",
            fontWeight: "900"
        };

        const styleClose = {
            float: "right",
            padding: "0px"
        };

        const styleBody = {
            overflowY:"scroll"
        };
        return (
            <div className={`black-background-static ${this.state.displayed === false ? "hidden" : ""}`}>
                <MetaTag 
                    title="SoulSion - Help" 
                />
                <div style={styleOuter}>
                    <div>
                        <div style={styleDiv}>
                            <div>
                                <span style={styleHeader}>
                                    Info
                                </span>
                                <span style={styleClose} onClick={this.props.close === null ? null : this.props.close} className="login-close">

                                </span>
                            </div>

                            <div style={styleBody}>
                                <div className="blank">
                                </div>

                                <div>
                                    <HelpSection />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Help;