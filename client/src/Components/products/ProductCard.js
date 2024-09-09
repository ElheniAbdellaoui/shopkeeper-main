import React from 'react';
import './card.css';

const ProductCard = ({product}) => {
  return (
    <div className="card">
      <h3> {product.title} </h3>
      <img src={product.imageUrl} alt="" />
      <h4> {product.description} </h4>
      <h5> {product.price} </h5>
      {product.quantity > 0 ? (
        <h5>Currently available ({product.quantity} in stock) </h5>
      ) : (
        <h5>Currently out of stock </h5>
      )}
    </div>
  );
};

export default ProductCard;
