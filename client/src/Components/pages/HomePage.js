import React from 'react';
import HomeOne from '../misc/HomeOne';
import ProductList from '../products/ProductList';

const HomePage = () => {
  return (
    <div>
      <HomeOne />
      <h1>Discover our newest items</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
