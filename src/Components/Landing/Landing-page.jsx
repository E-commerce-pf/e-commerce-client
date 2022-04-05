import React from 'react';
import Carousel from 'react-elastic-carousel';
import IMG1 from './images/consola.jpeg';
import IMG2 from './images/drone.jpeg';
import IMG3 from './images/pc.jpeg';
import IMG4 from './images/watch.jpeg';
import './styles/landingPage.modules.css';

const imagenes = [IMG1, IMG2, IMG3, IMG4];
const Landing = () => {

  const carouselRef = React.useRef(null);
  const totalPages= imagenes.length;
  let resetTimeout= imagenes[0];
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
          ref={carouselRef}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout)
            if (index + 1 === totalPages) {
                if (carouselRef?.current?.goTo) {
                    resetTimeout = setTimeout(() => {
                        if (carouselRef?.current?.goTo) {
                            carouselRef.current.goTo(0)
                        }
                    }, 1000)
                }
            }
        }}
        >
          {imagenes && imagenes.map((el,index)=>(
            <div key={Math.random(index)}>
              <img className="img-carrousel" src={el} alt="carousel1" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Landing;
