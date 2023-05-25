import React, { useState } from "react";

const CountInc = () =>{
    //const state = useState();
    //const [count, setCount] = useState(0);

    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);
    //console.log(ctime);
    //const IncNum = () =>{
    //    setCount(count + 1);
    //}

    const UpdateTime = () =>{
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }

    setInterval(UpdateTime, 1000);

    return(
        <>
            <h1>{newTime} </h1>
            {/* <div className="slotm_sec">
            <SlotM x=":smile:" y=":smile:" z=":smile:"/>
            <hr />
            <SlotM x=":apple:" y=":apple:" z=":orange:"/>
            <hr />
            <SlotM x=":heart:" y=":heart:" z=":heart:"/>
            <hr />
            <SlotM x=":angel:" y=":angry:" z=":angel:"/>
            </div>
            <CountInc /> */}
        </>
    );
}

export default CountInc;