import React from 'react'
import Carousel from "react-elastic-carousel";
import IMG1 from './img-landing/belleza.png'
import IMG2 from './img-landing/deco-casa.png';
import IMG3 from './img-landing/carrousel-tec.png';
import './styles/landingPage.css';

const Landing = () => {
   const breakPoints = [
    { width: 100, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
    { width: 1500, itemsToShow: 1 },
  ];
  return (
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
  )
}

export default Landing