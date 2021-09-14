import React from 'react';
import ShopNowButton from './ShopNowButton';
import Rating from './rating';

const Home = () => (
  <main id='home-page'>
    <div className='hero-message'>
      <h1>Buy The Things Money Can't Buy</h1>
      <h2>From True Love&trade; to An Honest Politician&trade;</h2>
    </div>

    <ShopNowButton />
    <div className='reviews'>
      <div className='review'>
        <p>Bought Class&trade; for the wife, and it works!</p>
        <Rating />
      </div>
      <div className='review'>
        <p>These products are genuine! Better than scamazon!'</p>
        <Rating />
      </div>
      <div className='review'>
        <p>DeAndre on customer service sounds like a cutie.</p>
        <Rating />
      </div>
    </div>
  </main>
);

export default Home;
