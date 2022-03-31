import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CardProduct from "../CardProduct/index";
import Carousel from "react-elastic-carousel";
import getReview from "../../Redux/Actions/reviewsActions";
import "./Styles/ScoreMax.modules.css";

export default function ScoreMax() {
  const dispatch = useDispatch();
  const review = useSelector((state) => state.reviewsScore.reviews);

  useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);

  const breakPoints = [
    { width: 100, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  return (
    <div>
      <h2 className="text_shop">Bests products</h2>
      <Carousel
        className="carousel_score"
        breakPoints={breakPoints}
        enableAutoPlay
        autoPlaySpeed={1500}
        itemPadding={[10, 10]}
        focusOnSelect={false}
      >
        {review && review.length !== 0 ? (
          review.map((item) => (
            <CardProduct
              key={item.id}
              image={item.image}
              title={item.title}
              id={item.id}
              price={item.price}
              stock={item.stock}
              discount={item.discount}
              score={item.score}
              description={item.description}
            />
          ))
        ) : (
          <h1 className="no_found_score">There aren't bests products ☹️</h1>
        )}
      </Carousel>
    </div>
  );
}
