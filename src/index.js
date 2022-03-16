import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

let currDate = new Date();
let currTime = currDate.getHours();
let date = currDate.toLocaleDateString();
let time = currDate.toLocaleTimeString();
let str = "";
const clr = { }
if(currTime >= 1 && currTime < 12){
    str = "Good Morning";
    clr.color = 'orange';
}
else if(currTime >= 12 && currTime < 18){
    str = "Good Afternoon";
    clr.color = 'green';
}
else{
    str = "Good Night";
    clr.color = 'black';
}




ReactDOM.render(
    <>
        <h1> Hello,<span style={clr}> {str} </span></h1>
        <h1> Today's Date:  <span style={clr}> {date} </span> & Time is:  <span style={clr}> {time}</span> </h1>
    
    </>,
    document.getElementById('root')
);