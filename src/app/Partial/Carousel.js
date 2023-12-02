"use client"
import React  from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classNames from 'classnames';


const carouselData = [
    {
        id:'carousel_1',
        title:'Inspire teamwork <br/>and stay connected',
        body:'Workfreeli replaces the many apps today\'s teams rely <br/> on with a single platform that combines chat, calls, <br/> file and task management.',
    },
    // {
    //     id:'carousel_2',
    //     title:'End to end encryption',
    //     body:'It offers a technical guarantee of privacies of every user.Be safe while communicating with the WORKFREELI APP.',
    // },
    // {
    //     id:'carousel_3',
    //     title:'Collaborative project,<br/> task management',
    //     body:'We introduced the different colored process streams combining into a work of art.',
    // },
];
// const random = Math.floor(Math.random() * carouselData.length);
function CarouselDesign() {
    // const carouselSuffly = carouselData.sort(() => Math.random() - 0.5);
    
    // useEffect(()=> {
    //     random = Math.floor(Math.random() * carouselData.length);
    // },[])
    return (
        <>
            {/* <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} showStatus={false}> */}
                {/* {carouselSuffly.map((v) => */}
                    <div className={classNames("FebBody", carouselData[0].id === 'carousel_2'?'encryption':carouselData[0].id === 'carousel_3'?'collaboration':'')} key={carouselData[0].id}>
                        <p className="FebBodyText1" dangerouslySetInnerHTML={{__html:carouselData[0].title}}></p>
                        <p className="FebBodyText2" dangerouslySetInnerHTML={{__html:carouselData[0].body}}></p>
                    </div>
                 {/* )} */}
            {/* </Carousel> */}
        </>
    )
}

export default CarouselDesign;