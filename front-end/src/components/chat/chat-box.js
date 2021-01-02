
import axios from "axios";
import React from "react";
import ReactDOM from 'react-dom';

import getChatBoxTextElement from "./chat-synchronizer.js";
import Player from "../meditate/player.js";

import "./css/chat-box.css";

//------------------PLAYER-----------------

let synchronizer_player = {
    audioElement : null,
    playing: false

};
function initSynchronizerPlayer(){
    synchronizer_player.audioElement = document.getElementById('AudioVisualizerAudio');
    console.log(synchronizer_player.audioElement);
}

function startMeditatationPlayer(){
    synchronizer_player.audioElement.play();
    synchronizer_player.playing = true;
}

function stopMeditatationPlayer(){
    synchronizer_player.audioElement.pause();
    synchronizer_player.playing = false;
}
function getMeditationPlayer(){
    return (
        <Player/>
    )
}
function initMeditationPlayer(){
    const audioElement = document.createElement('div');
    audioElement.className = "hidden";
    document.getElementById('root').appendChild(audioElement);
    const player = getMeditationPlayer();
    ReactDOM.render(player,audioElement);
    setTimeout(()=>{
        initSynchronizerPlayer();
    });
}

//------------------PLAYER ENDS-----------------


//------------------JOKE---------------------
const jokes = [
    `Man Dies. In Heaven He Sees A Large Wall Full Of Clocks. He Asks Angel: "What Are These For?" Angel Answers: "These Are Lie Clocks, Every Person`,
    `An Apple A Day Is Almost A Thousand Rupees A Month. Visiting A Doctor Is Cheaper...!! Be Practical...!!`,
    `1. Newton’s Method - Allow The Tiger To Catch You & Catch The Tiger 2. Einstein’s Method - Chase The Tiger Until It Becomes Tired And Then `,
    `Rules Of Success: "Always Consult A Girl Before Doing Any Important Work In Your Life And Do It Exactly Opposite To Her Advice Success Guarante`,
    `Dosto Aaye Dekhe Haryana Mein Teachers English Language Ki Kaise Maa Behen Ek Karte Hain. 1. Don't Talk In Front Of My Back. 2. Both Of You Thre`,
    `What Is The Best Punishment For A Girl? Give Her New Clothes, Matching Jewellry And Nice Cosmetics And Then Lock Her In A Room Without A Mirror.`,
    `Question: "What Is The Most Dangerous Alphabet?" Answer: "W" Because All Worries Start With "W" Who? Why? What? When? Which? Where? War`,
    `Pathan's Wife Bought A Beautiful Sweater For Her Husband. She Sent It To Him By Parcel Along With A Note... That Said: "The Buttons Of The Sweat`,
    `There Was A Flood In A Village. One Man Said To Everyone: "I'll Stay! God Will Save Me!" The Flood Got Higher And A Boat Came And The Man In It`,
    `Son To Mom: "Mom Why Is My Cousin Names Diamond?" Mom: "Because Your Aunt Loves Diamonds" Son: "What About Me?" Mom: "Enough Questions Dicky"`,

];

function displayJoke(){
    const njokes = jokes.length;
    const rnum = Math.floor(Math.random()*1000)%njokes;
    const curr_joke = jokes[rnum];
    synchronizer_chat.chatBoxText.appendChild(getChatBoxTextElement("sender",curr_joke,true));
    synchronizer_chat.chatBox.scrollTo(0,synchronizer_chat.chatBox.scrollHeight);
}
//------------------JOKE ENDS----------------

function redirectToHomepage(){
    window.location.href = process.env.PUBLIC_URL +"/home";
}

const qna = [
    {
        "question":["Hi, I need help"],
        "trigger_words":["hi","hello","hola","hey","talk","chat"],
        "answer":["Hi, there!!","What can I do for you?"],
        "actions":[]
    },
    {
        "question":["I am not sure"],
        "trigger_words":["not sure","dont know","do not know","help"],
        "answer":["No worries","Let me help you","Just tell me how are you feeling today","Happy? Sad? Low? Excited?"],
        "actions":[]
    },
    {
        "question":["I am feeling happy"],
        "trigger_words":["happy","great","energy","cheerful","lucky","excited"],
        "answer":["Hooray!","Maybe a smile will may your day even better","Let me smile along","😊"],
        "actions":[]
    },
    {
        "question":["I am feeling sad"],
        "trigger_words":["sad","depressed","unhappy","low","scared","confused","frightned","restless"],
        "answer":["I am here to help you","Take a deep breath in","Hold for 5 seconds","And then release","Wanna meditate? Just type meditate"],
        "actions":[]
    },
    {
        "question":["I wanna meditate"],
        "trigger_words":["meditate","relax","music","calm down"],
        "answer":["Close your eyes","Feel your breath","I will play some calming music for you","Relax!!"],
        "actions":[startMeditatationPlayer]
    },
    {
        "question":["Stop the music"],
        "trigger_words":["stop","pause"],
        "answer":["Pausing the player"],
        "actions":[stopMeditatationPlayer]

    },
    {
        "question":["Take me to homepage"],
        "trigger_words":["homepage","go back"],
        "answer":["Redirecting you to the homepage","It was nice talking to you","Have a great day"],
        "actions":[redirectToHomepage]

    },
    {
        "question":["Something New"],
        "trigger_words":["new","more","bored"],
        "answer":["Wanna read a joke? Say \"Tell me a joke\""],
        "actions":[]

    },
    {
        "question":["Tell me a joke"],
        "trigger_words":["joke","humour"],
        "answer":["Here's a joke"],
        "actions":[displayJoke]

    }
];

//--------------------ANSWER GENERATOR------------------
let AnswerGenerator = {
    "regrexTest":[],
    ntests:0
};

function preProcess(inp1){
    let inp = inp1.toLowerCase();
    inp = inp.replace(/[ ]+/g," ");
    inp = inp.replace(/[^a-z ]/g,"");
    return inp;
}
function initAnswerGenerator(){
    for(let i=0;i<qna.length;i++){
        let curr_regex = new RegExp(qna[i]["trigger_words"].join("|"));
        AnswerGenerator["regrexTest"].push(curr_regex);
    }
    AnswerGenerator["ntests"] = qna.length;
}

function getAnswerIndex(inpMsg){
    let i=0;
    const message = preProcess(inpMsg);
    while(i<AnswerGenerator["ntests"]){
        if(AnswerGenerator["regrexTest"][i].test(message))
            return i;
        i++;
    }
    return -1;
}
//--------------------ANSWER GENERATOR ENDS------------------

let  height_100 = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);  
let synchronizer_chat = {
    chatBox : null,
    chatBoxText:null,
    chatInput: null,
    lastSentSender:false,
    lastReceiverElement:null
}

function initSynchronizerChat(){
    synchronizer_chat.chatBox = document.getElementById('chatBox');
    synchronizer_chat.chatBoxText = document.getElementById('chatBoxText');
    synchronizer_chat.chatInput = document.getElementById('chatInput');   
    synchronizer_chat.chatBoxText.appendChild(getChatBoxTextElement("sender","Hey!",false));
    synchronizer_chat.chatBoxText.appendChild(getChatBoxTextElement("sender","I am your assistant. What would you like me to do for you?",true));
    synchronizer_chat.lastSentSender = false;
}


function displayAnswer(qno,currAnsNo=0){
    if(currAnsNo>=qna[qno]["answer"].length){
        for(var i=0;i<qna[qno]["actions"].length;i++){
            qna[qno]["actions"][i]();
        }
    }else{
        setTimeout(()=>{
            displayChatReceived(qna[qno]["answer"][currAnsNo]);
            displayAnswer(qno,currAnsNo+1);
        },300);
    }
}

function displayChatReceived(message){
    synchronizer_chat.lastReceiverElement = getChatBoxTextElement("sender",message,synchronizer_chat.lastSentSender?false:true);
    synchronizer_chat.chatBoxText.appendChild(synchronizer_chat.lastReceiverElement);
    synchronizer_chat.lastSentSender = false;
    synchronizer_chat.chatBox.scrollTo(0,synchronizer_chat.chatBox.scrollHeight);
}

function searchQuery(message){
    const searchUrl = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDM4513HCFYmj6ZYsJz4zNLZjQ3FrsLkog&cx=c80a3d6a16b2a9498&q='+encodeURI(message);
    console.log(searchUrl)
    axios({
        method : 'get',
        url : searchUrl
    })
    .then((response) => {
        const items = response.data.items;
        if(items === null || items.length === 0){
            displayChatReceived("Sorry! I didn't get that. Type Help");
        }else{
            const bestReplyIndex = Math.floor((Math.random()*100)%items.length);
            console.log("Best index",bestReplyIndex);
            const bestReply = items[bestReplyIndex];
            const reply = bestReply.snippet;
            const source = bestReply.link;
            displayChatReceived(reply);
            let link = document.createElement('a');
            link.href = source;
            link.target = "blank";
            link.textContent = "Source";
            let lastTextElement = synchronizer_chat.lastReceiverElement.querySelector('.text');
            lastTextElement.innerHTML += "<br/>";
            lastTextElement.appendChild(link);
            synchronizer_chat.chatBox.scrollTo(0,synchronizer_chat.chatBox.scrollHeight);

        }
    } ,(error) => {
        displayChatReceived(error);
        displayChatReceived("Sorry! I didn't get that. Type Help");
    });
}


function SynchronizerChatReceived(message){
    /*
    synchronizer_chat.chatBoxText.appendChild(getChatBoxTextElement("sender","Sorry ! We are still  workin on this chatbot",false));
    synchronizer_chat.chatBoxText.appendChild(getChatBoxTextElement("sender","Please come back after some days!!",true));
    synchronizer_chat.lastSentSender = false;
    */
    let answerInd = getAnswerIndex(message);
    const probability = Math.random();
    if(probability > 0.9){
        //10% of time display search reply, even if we have a reply
        answerInd = -1;
    }
    
    if(answerInd !== -1){
        displayAnswer(answerInd);
    }else{
        searchQuery(message);
    }
}



function SynchronizerChatSend(){
    const message = synchronizer_chat.chatInput.value;
    if( message.length != 0){
        synchronizer_chat.chatBoxText.appendChild(getChatBoxTextElement("receiver",message,synchronizer_chat.lastSentSender?true:false));
        synchronizer_chat.chatInput.value = "";
        synchronizer_chat.lastSentSender = true;
        SynchronizerChatReceived(message);
        synchronizer_chat.chatBox.scrollTo(0,synchronizer_chat.chatBox.scrollHeight);
    }
    
}




function get_received_msg(msg){
    const style = {
        float:"left",
    };
    
    return(
        <div class="chat-box sender">
            <div >
                <img className="avator" src="https://www.flaticon.com/svg/static/icons/svg/901/901014.svg" alt="ai" />
            </div>
            <div style={style} className="text">
                {msg}
            </div>
        </div>
    );
}
function get_sent_msg(msg){
    const style = {
        textAlign:"right",
        float:"right"
    };
    return(
        <div class="chat-box receiver">
            <div id="sd">
                <img className="avator" src="https://avatars0.githubusercontent.com/u/34217253?s=60&v=4" alt="ai" />
            </div>
            <div style={style} className="text">
                {msg}
            </div>
        </div>
    );
}
class ChatBoxMessage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            overflowY:"hidden"
        };
        
        this.handleMouseIn = this.handleMouseIn.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseIn(){
        this.setState(
            prevState => {
                return{
                    overflowY:"scroll"
                }
            }
        );
    }

    handleMouseOut(){
        this.setState(
            prevState => {
                return{
                    overflowY:"hidden"
                }
            }
        );
    }

    render(){
        const styleOuter = {
            position:"relative",
            display:"block",
            border:"1px solid black",
            backgroundColor:"#F4FFEF",
            background: "linear-gradient(75deg,#F9F9F9, #FBFBFB)",
            width: "100%",
            minWidth:"300px",
            maxWidth:"400px",
            minHeight:"350px",
            maxHeight:Math.min(height_100,450),
            padding:"6px",
            borderRadius:"4px 4px 0px 0px",
            margin:"0 auto",
            borderBottom:"0px",
            overflowY:this.state["overflowY"],
            overflowX:"hidden",
            scrollbarWidth:"thin"
        };
        const styleMsgTextBox = {
            position:"relative",
            display:"block",
            width:"inherit",
            height:"inherit"
        };

        return(
            <div id= "chatBox" style={styleOuter} onMouseEnter={this.handleMouseIn} onMouseLeave={this.handleMouseOut} onTouchStart={this.handleMouseIn} onTouchEnd={this.handleMouseOut}>
                <div id="chatBoxText" style={styleMsgTextBox} >
                </div>
            </div>
        );
    }
}

class ChatBoxInput extends React.Component{
    messageInputDiv = null
    constructor(props){
        super(props);
        this.state = {
            textAreaWidth:250,
            svgBackground:"#2A6D3E",
            svgPointer:"default",
        };
        this.svgMouseIn = this.svgMouseIn.bind(this);
        this.svgMouseOut = this.svgMouseOut.bind(this);
    }

    svgMouseIn(){
        this.setState(
            prevState => {
                return{
                    svgPointer:"pointer",
                    svgBackground:"#6AC786"
                }
            }
        );
    }
    svgMouseOut(){
        setTimeout(()=>{
            this.setState(
                prevState => {
                    return{
                        svgPointer:"default",
                        svgBackground:"#2A6D3E"
                    }
                }
            )
        },100);
    }


    getIconSvgSend(){
        let iconStyle = {
            position:"relative",
            height:"40px",
            marginTop:"5px",
            width:"50px",
            cursor:this.state["svgPointer"]
        };

        return(
            <svg style={iconStyle} fill={this.state["svgBackground"]} id="Capa_1" enableBackground="new 0 0 465.882 465.882" viewBox="0 0 465.882 465.882" xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={this.svgMouseIn}
            onMouseLeave={this.svgMouseOut}
            onTouchStart={this.svgMouseIn}
            onTouchEnd={this.svgMouseOut}
            ><path d="m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z"/></svg>
        );
    }

    componentDidMount(){
        this.messageInputDiv= document.getElementById('messageInputDiv');
        this.setState(
            prevState => {
                return{
                    textAreaWidth:this.messageInputDiv.offsetWidth - 54
                }
            }
        );
    }
    render(){
        const styleOuter = {
            position:"relative",
            display:"block",
            width: "100%",
            minWidth:"300px",
            maxWidth:"400px",
            border:"1px solid black",
            minHeight:"56px",
            maxHeight:"100px",
            borderRadius:"0px 0px 4px 4px",
            margin:"0 auto"
        };
        const styleInputDiv = {
            position:"relative",
            left:"1px",
            display:"inline-block",
            width:"50px",
        };
        const styleWrapper = {
            marginTop:"3px"
        };
        const styleSendDiv = {
            display:"inline-block",
            position:"absolute",
            right:"0px",
            borderRadius:"10px 10px 10px 10px",
            minHeight:"48px"
        };
        const styleTextarea = {
            height:"48px",
            border:"0px",
            resize:"none",
            borderRadius:"14px 14px 14px 14px",
            width:this.state["textAreaWidth"],
            backgroundColor:"#EFEFEF",
            padding:"4px",
            fontSize:"20px",
        };
        return(
            <div style={styleOuter} id="messageInputDiv">
                <div style={styleWrapper}>
                    <div style={styleInputDiv}>
                        <textarea id="chatInput" style={styleTextarea}></textarea>
                    </div>
                    <div style={styleSendDiv} onClick={SynchronizerChatSend}>
                        {this.getIconSvgSend()}
                    </div>
                </div>
            </div>
        );
    }
}


class ChatBox extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        initSynchronizerChat();
        initMeditationPlayer();
        initAnswerGenerator();
    }

    render(){
        return(
            <div>
                <ChatBoxMessage />
                <ChatBoxInput />
            </div>
        );
    }
}

export default ChatBox;
