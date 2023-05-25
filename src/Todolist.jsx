import React from "react";

const Todolists = (props) =>{

    
    return (
        <>
        <div className="todo_list_item">
            <i onClick={() =>{
                props.onSelect(props.id);
            }}>x</i>
            <li>{props.text}</li>
        </div>
        </>
    );
}

export default Todolists;