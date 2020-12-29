

class ChatMessage{
    constructor(instanceType){
        /*
            instanceType : receiver / sender
        */
        this.instanceType = instanceType;

    }
}
const imageReciever = document.createElement('img');
imageReciever.classList.add('avator');
imageReciever.src = "https://avatars0.githubusercontent.com/u/34217253?s=60&v=4";
imageReciever.alt = "Me";

const imageSender = document.createElement('img');
imageSender.classList.add('avator');
imageSender.src = "https://www.flaticon.com/svg/static/icons/svg/901/901014.svg";
imageSender.alt = "AI";


function getChatBoxTextElement(type,msg,lastElementSame){
    /*
        type : type of message : sender/receiver
        msg : message to display : string
        lastElementSame : last element displayed is same : true/false
    */
        
    let outerDiv,innerDiv1,innerDiv2;
    outerDiv = document.createElement('div');
    outerDiv.classList.add('chat-box');
    outerDiv.classList.add(type);

    innerDiv1 = document.createElement('div');
    if(lastElementSame === false){
        innerDiv1.appendChild(type==="receiver"?imageReciever.cloneNode(true):imageSender.cloneNode(true));
    }

    innerDiv2 = document.createElement('div');
    innerDiv2.classList.add('text');
    innerDiv2.textContent = msg;

    if(lastElementSame === false)
        outerDiv.appendChild(innerDiv1);
    outerDiv.appendChild(innerDiv2);

    return outerDiv;
}

export default  getChatBoxTextElement;