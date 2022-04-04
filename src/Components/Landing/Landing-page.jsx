import React from "react";
import Carousel from "react-elastic-carousel";
import IMG1 from "./images/consola.jpeg";
import IMG2 from "./images/drone.jpeg";
import IMG3 from "./images/pc.jpeg";
import IMG4 from "./images/watch.jpeg";
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
          <img className="img-carrousel" src={IMG1} alt="carousel1" />

          <img className="img-carrousel" src={IMG2} alt="carousel2" />

          <img className="img-carrousel" src={IMG3} alt="carousel3" />

          <img className="img-carrousel" src={IMG4} alt="carousel4" />
        </Carousel>
      </div>
    </div>
  );
};

export default Landing;
