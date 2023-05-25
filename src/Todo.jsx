import React, { useState } from "react";
import Todolists from "./Todolist";

const TodoL = () =>{

  const [inputList, setInputList] = useState("");

  const [listItem, setList] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }

  const listOfItem = () =>{
    setList ((oldList) =>{
      return [...oldList, inputList];
    });
    setInputList("");
  }
  const deleteItem = (id) =>{
    setList ((oldList) =>{
        return oldList.filter((arrElem, index) =>{
          return index !== id; 
        });
    });
  }
  return(
    <>
    <div className="todo_sec">
      <div className="wrapper">
        <h1> ToDo List</h1>
        <input type="text" value={inputList} placeholder="Add an Item" onChange={itemEvent}/>
        <button onClick={listOfItem}>Add</button>
        <ul>
          {listItem.map((itemVal, index) => {
            return <Todolists key={index} id={index} text={itemVal} onSelect={deleteItem}/>
          })}
        </ul>
      </div>
    </div>
    </>
  );

}

export default TodoL;