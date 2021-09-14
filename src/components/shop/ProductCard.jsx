import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import noImage from '../../images/no-image.png';

const ProductCard = ({ product }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const handleClick = () => {
    // Change URL to kebab case
    // currently there are spaces in URL
    history.push(`${url}/${product.name}`);
  };

  return (
    <div className='product-card' onClick={handleClick}>
      {product.url !== null
        ? <img src={product.url} />
        : <img src={noImage} />
      }
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
