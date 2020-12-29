import React from "react";

let  height_100 = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);  

let synchronizer_player = {
    audioElement : null,
    visualElement: null,
    playing: false,
    lockVisual:false,
};

let textToDisplay = [
    "Close Your Eyes",
    "Listen to the music",
    "Breath In and Breath Out"
];

function initSynchronizerPlayer(){
    synchronizer_player.audioElement = document.getElementById('AudioVisualizerAudio');
    synchronizer_player.visualElement = document.getElementById('AudioVisualizerText');
}



function displayVisualMessage(i,j){
    if(j>=textToDisplay.length){
        //synchronizer_player.lockVisual = false;
        setTimeout(()=>{
            synchronizer_player.visualElement.textContent = "Relax";
        },400);
        return;
    }
    setTimeout(()=>{
        synchronizer_player.visualElement.textContent += textToDisplay[j][i];
        i++;
        if(i>textToDisplay[j].length){
            synchronizer_player.visualElement.textContent = "";
            displayVisualMessage(0,j+1);
        }else{
            displayVisualMessage(i,j);
        }
    },200);
}
function startSynchronizerVisual(){
    if(synchronizer_player.lockVisual === true)
    {
        return;
    }
    synchronizer_player.lockVisual = true;
    displayVisualMessage(0,0);
}

function startSynchronizerAudio(){
    if(synchronizer_player.playing){
        synchronizer_player.audioElement.pause();
        synchronizer_player.playing = false;
    }else{
        synchronizer_player.audioElement.play();
        synchronizer_player.playing = true;
        startSynchronizerVisual();
    }
}

function startSynchronizerPlayer(){
    startSynchronizerAudio();
}

class PlayerVisualizer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const styleOuter = {
            display:"table",
            border:"1px solid black",
            backgroundColor:"#F4FFEF",
            background: "linear-gradient(75deg,#F9F9F9, #FBFBFB)",
            width: "90%",
            minHeight:"350px",
            minWidth:"300px",
            padding:"6px",
            borderRadius:"4px 4px 0px 0px",
            margin:"0 auto"
        };

        const styleContent = {
            display:"table-cell",
            verticalAlign:"middle",
            fontSize : "40px",
            height:"100%",
            textAlign:"center",
            fontFamily:"sans-serif",
            fontWeight:"bolder",
            letterSpacing:"0.05em",
            wordSpacing: "0.1em"
        };
        return(
            <div style={styleOuter} >
                <div style={styleContent} id="AudioVisualizerText">
                    
                </div>
            </div>
        );
    }
}

class PlayerAudio extends React.Component{
    audioElement = null;
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.audioElement = React.createElement();
    }
    render(){
        const style={
            display:"none"
        };
        return(
            <div style={style}>
                <audio controls={true} autoPlay={false} id="AudioVisualizerAudio" hidden> 
                    <source src="audio/codefi.mp3" type="audio/mpeg" />
                    Your Browser doesn't supprot audio
                </audio>
            </div>
        );
    }
}

class PlayerControls extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            svgBackground:"#F4FFEF",
            svgPointer:"default",
            playing:false
        };

        this.svgMouseIn = this.svgMouseIn.bind(this);
        this.svgMouseOut = this.svgMouseOut.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    svgMouseIn(){
        this.setState(
            prevState => {
                return{
                    svgBackground:"#B4FFD7",
                    svgPointer:"pointer"
                }
            }
        );
    }
    svgMouseOut(){
        setTimeout(()=>{
            this.setState(
                prevState => {
                    return{
                        svgBackground:"#F4FFEF",
                        svgPointer:"default"
                    }
                }
            )
        },100);
    }

    getIconSvgPlay(){
        let iconStyle = {
            position:"relative",
            height:"40px",
            marginTop:"5px",
            enableBackground:"new 0 0 320.001 320.001",
            cursor:this.state["svgPointer"]
        };

        return(
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                viewBox="0 0 320.001 320.001" style={iconStyle} fill={this.state["svgBackground"]} 
                className="play-img"
                onMouseEnter={this.svgMouseIn}
                onMouseLeave={this.svgMouseOut}          
                onTouchStart={this.svgMouseIn}
                onTouchEnd={this.svgMouseOut}  
            >
            <path d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288
                c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144
                c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z"/>
            </svg>
        );
    }

    getIconSvgPause(){
        let iconStyle = {
            position:"relative",
            height:"40px",
            marginTop:"5px",
            enableBackground:"new 0 0 320.001 320.001",
            cursor:this.state["svgPointer"]
        };

        return(
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 47.607 47.607" style={iconStyle} fill={this.state["svgBackground"]} 
                className="play-img"
                onMouseEnter={this.svgMouseIn}
                onMouseLeave={this.svgMouseOut} 
            >
            <g>
                <path d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0
                    l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/>
                <path d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
                    C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/>
            </g>
            </svg>

        );
    }

    handleClick(){
        startSynchronizerPlayer();
        this.setState(
            prevState => {
                return{
                    playing:!prevState.playing
                }
            }
        );
    }
    render(){
        const styleOuter = {
            display:"block",
            width: "90%",
            minWidth:"300px",
            backgroundColor: "#1B1F1C",
            height:"50px",
            borderRadius:"0px 0px 4px 4px",
            margin:"0 auto"
        };

        const  stylePlay = {
            position:"relative",
            display:"block",
            margin:"0 auto",
            width:"50px",
        };

        

        
        return(
            <div style={styleOuter}>
                <span style={stylePlay} title="Start meditating" onClick={this.handleClick}>
                    {this.state["playing"]?this.getIconSvgPause():this.getIconSvgPlay()}
                </span>
            </div>
        );
    }
}

class Player extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        initSynchronizerPlayer();
    }

    render(){
        const styleOuter = {
            display:"inline-block",
            width:"100%",
            margin:"0  auto"
        };

        const styleInner = {
        };

        return(
            <div style={styleOuter}>
                <div style={styleInner}>
                    <PlayerVisualizer />
                    <PlayerAudio />
                    <PlayerControls />
                </div>
            </div>
        );
    }
}

export default Player;