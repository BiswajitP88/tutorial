import React, { startTransition, useState } from "react";
import "./index.css";
import CountInc from "./Countincre";

const timeStamp = () =>{
let curDate = new Date();
curDate = curDate.getHours();
let gretting = "";
const styleChange = {};
 
if(curDate >= 1 && curDate < 12){
    gretting = "Good Morning";
    styleChange.color = "green";
}else if(curDate >= 12 && curDate < 19){
    gretting = "Good Afternoon";
    styleChange.color = "orange";
}else{
    gretting = "Good Night";
    styleChange.color = "black";
}

    return(
        <div className="change_cont"> 
            <h1>Hello sir, <span style={styleChange}>{gretting}</span></h1>
            <CountInc />
        </div>
    );
}

export default timeStamp;