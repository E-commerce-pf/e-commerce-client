import React from "react";
import Carousel from "react-elastic-carousel";
import IMG1 from "./img-landing/img-car.png";
import IMG2 from "./img-landing/img-car2.png";
import IMG3 from "./img-landing/img-car3.png";
import "./styles/landingPage.modules.css";

const Landing = () => {
  const breakPoints = [
    { width: 100, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
    { width: 1500, itemsToShow: 1 },
  ];
  return (
    <div>
      
      <div className="container-carrusel">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={2500}
          itemPadding={[10, 10]}
          focusOnSelect={false}
          verticalMode
        >
          <motionimg className="img-carrousel" src={IMG1} alt="carousel1" />

          <motionimg className="img-carrousel" src={IMG2} alt="carousel2" />

          <motionimg className="img-carrousel" src={IMG3} alt="carousel3" />
        </Carousel>
      </div>
    </div>
  );
};

export default Landing;
