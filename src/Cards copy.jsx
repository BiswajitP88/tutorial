import React from "react";

const aData = [
    {
        imgsrc:"https://www.ibackup.com/source/images/home_banner.jpg",
        title:"HTML 5",
        aname:"Language",
        link:"https://www.google.com",
    },
    {
        imgsrc:"https://www.ibackupstatic.com/source/images/sub-accounts_03.png",
        title:"CSS",
        aname:"Cascading Style Sheet",
        link:"https://www.google.com",
    },
    {
        imgsrc:"https://www.ibackupstatic.com/source/images/iOS.png",
        title:"Jquery",
        aname:"Scripting Language",
        link:"https://www.google.com",
    },
    {
        imgsrc:"https://www.ibackupstatic.com/source/images/rpc_on_ibackup_res.jpg",
        title:"Angular",
        aname:"Library",
        link:"https://www.google.com",
    },
    {
        imgsrc:"https://www.ibackupstatic.com/source/images/light_banner_new.jpg",
        title:"MVC",
        aname:"Program Language",
        link:"https://www.google.com",
    },
];

function Cards(props){
   // console.log(props);
    return(
    <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} className="card_img" alt="myPic" />
                <div className="card_info">
                    <h2 className="card_category">{props.title}</h2>
                    <h3 className="card_title">{props.aname}</h3>
                    <a href={props.link} className="card_link" >
                        <span>Watch Now</span>
                    </a>
                </div>
            </div>
        </div>
    </>
    );
}

function Card(){
    return(
        <>
            <div className="card_sec">
                <div className="wrapper">  
                    <div className="cards_col">
                        <Cards imgsrc={aData[0].imgsrc} title={aData[0].title} aname={aData[0].aname} link={aData[0].link} />
                        <Cards imgsrc={aData[1].imgsrc} title={aData[1].title} aname={aData[1].aname} link={aData[1].link} />
                        <Cards imgsrc={aData[2].imgsrc} title={aData[2].title} aname={aData[2].aname} link={aData[2].link} />
                        <Cards imgsrc={aData[3].imgsrc} title={aData[3].title} aname={aData[3].aname} link={aData[3].link} />
                        <Cards imgsrc={aData[4].imgsrc} title={aData[4].title} aname={aData[4].aname} link={aData[4].link} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;