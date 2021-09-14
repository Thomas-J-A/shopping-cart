import React from 'react';
import { useHistory } from 'react-router-dom';

const ShopNowButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/shop');
  };

  return (
    <button type='button' onClick={handleClick}>
      Shop Now
    </button>
  );
};

export default ShopNowButton;
