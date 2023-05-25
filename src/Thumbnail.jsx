import React from "react";
import {Images, Author, Heading} from "./Author";

const Cards = (props) => {
    // console.log(props);
     return(
     <>
         <React.StrictMode>
         <div className="cards">
             <div className="card">
                 <Images imgsrc={props.imgsrc}/>
                 <div className="card_info">
                     <Author title={props.title} />
                     <Heading aname={props.aname}/>
                     <a href={props.link} className="card_link" >
                         <span>Watch Now</span>
                     </a>
                 </div>
             </div>
         </div>
         </React.StrictMode>
     </>
     );
 }

 export default Cards;