import React from "react";
import aData from "./Cardlist";
import Cards from "./Thumbnail";

const Maincard = () => {
    return(
        <>
            <div className="card_sec">
                <div className="wrapper">  
                    <div className="cards_col">
                    <React.StrictMode>
                        {aData.map((val, index) => {
                            console.log(index);
                            return(
                                <>
                                    <Cards key={val.id} imgsrc={val.imgsrc} title={val.title} aname={val.aname} link={val.link} />
                                </>
                            );
                         })}   
                    </React.StrictMode>          
                    </div>
                </div>
            </div>
        </>
    );
}

export default Maincard;