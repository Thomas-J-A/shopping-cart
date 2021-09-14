import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import productData from './productData';

const Products = () => {
  const { category } = useParams();
  const products = productData.filter((product) => product.category === category);

  if (products.length === 0) {
    return <p>Sorry, there are no products that match your search.</p>;
  }

  return (
    <div id='products'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
