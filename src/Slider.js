import React, {useState} from 'react'

const Slider = () => {
    const imgs =[
        {id:0, value:"https://static.idriveonlinebackup.com/source/images/switch_banner_new.jpg", alt:"imqge1"},
        {id:1, value:"https://static.idriveonlinebackup.com/source/images/banner_mini221.jpg", alt:"imqge2"},
        {id:2, value:"https://static.idriveonlinebackup.com/source/images/banner_personal221.jpg", alt:"imqge3"},
        {id:3, value:"https://static.idriveonlinebackup.com/source/images/banner_team221.jpg", alt:"imqge4"},
        {id:4, value:"https://static.idriveonlinebackup.com/source/images/banner_business221.jpg", alt:"imqge5"},
        {id:5, value:"https://static.idriveonlinebackup.com/source/images/banner_veeam221.jpg", alt:"imqge6"},
        {id:6, value:"https://static.idriveonlinebackup.com/source/images/banner_bmr221.jpg", alt:"imqge7"},
    ];

    const [sliderData, setSliderData] = useState(imgs[0]);

    const handleClick = (index) =>{
        const slider = imgs[index];
        setSliderData(slider);
    }


    return(
        <>
            <div className='slider__wrapper'>
                <div className='slider__sec'>
                    <div className='slider__cont'>
                        <img src={sliderData.value} alt={sliderData.alt}/>
                    </div>
                </div>
                <div className='thumb__row'>
                {
                    imgs.map((data, i) =>
                        <div className='thumbnail'>
                            <img key={data.id} src={data.value} alt={data.alt} onMouseEnter={()=>handleClick(i)} className={sliderData.id==i?"active":""}/>
                        </div>
                    )
                }
                </div>
            </div>
        </>
    );

}

export default Slider;