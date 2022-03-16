import React from 'react';

export const CardProduct = ({ img, category, title, price }) => {
  return (
    <div className='card-container'>
      <div className="card_img">
        <img src={img} alt="img" width="250px" height="150px" />
      </div>
      <div className="card_info">
          <h4>{title}</h4>
          <h4>{category}</h4>
          <h4>{price}</h4>
      </div>
    </div>
  );
};

