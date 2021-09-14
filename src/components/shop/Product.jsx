import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
import productData from './productData';

const Product = () => {
  const { productName } = useParams();
  const product = productData.find((product) => product.name === productName);

  if (!product) {
    return (
      <div>
        <BackButton />
        <p>Sorry, that product doesn't exist</p>
      </div>
    );
  }

  return (
    <div>
      <BackButton />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
