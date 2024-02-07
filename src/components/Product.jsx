
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/action';

const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {products && products.map((product) =>(
        <div key={product.id}>
        <li>{product.title}</li>
        <li>{product.rating}</li></div>
      ))}
    </ul>
  );
};

export default Product;
