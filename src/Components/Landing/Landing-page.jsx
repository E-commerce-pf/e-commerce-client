import React from 'react'
import Carousel from "react-elastic-carousel";
import IMG1 from './img-landing/belleza.png'
import IMG2 from './img-landing/deco-casa.png';
import IMG3 from './img-landing/carrousel-tec.png';
import video_landing from './img-landing/Store2.mp4'
import './styles/landingPage.css';

const Landing = () => {
   const breakPoints = [
    { width: 100, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
    { width: 1500, itemsToShow: 1 },
  ];
  return (
    <div>
      <video className='video_landing234' autoPlay loop muted>
       <source className='video-pre' src={video_landing} type="video/mp4" />
     </video>
      <div className='container-carrusel'>
      <Carousel
       breakPoints={breakPoints}
       enableAutoPlay
       autoPlaySpeed={1500}
       itemPadding={[10, 10]}
       focusOnSelect={false}
       verticalMode>
         <item>
         <img className='img-carrousel' src={IMG1} alt='carousel1'/>
         </item>
         <item>
         <img className='img-carrousel' src={IMG2} alt='carousel2'/>
         </item>
         <item>
         <img className='img-carrousel' src={IMG3} alt='carousel3'/>
         </item>
         </Carousel>
    </div>

    </div>
      )
}

export default Landing