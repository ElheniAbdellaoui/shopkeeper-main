import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from './ProductCard';
import './list.css';
import {getProducts} from '../../redux/actions/productActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const {products, loading} = useSelector((state) => state.productReducer);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <h1> loading... </h1>
      ) : (
        <div className="list">
          {products.map((el, i) => (
            <ProductCard product={el} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
