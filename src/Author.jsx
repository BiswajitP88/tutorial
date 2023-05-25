import React from "react";

const Author = (props) => {
    return <h2 className="card_category">{props.title}</h2>;
}

const Images = (props) => {
    return <img src={props.imgsrc} className="card_img" alt="myPic" />;
}

const Heading = (props) =>{
    return  <h3 className="card_title">{props.aname}</h3>;
}

export {Author, Images, Heading};