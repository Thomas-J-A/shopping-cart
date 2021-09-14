import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import Categories from './Categories';
import Carousel from './Carousel';
import Products from './Products';
import Product from './Product';
import Error from '../Error';

const CategoryHeader = () => {
  const { category } = useParams();

  return (
    <header>
      <h1>
        {category === undefined ? 'Featured' : category}
      </h1>
    </header>
  );
};

const Shop = () => {
  const { path } = useRouteMatch();

  return (
    <main id='shop-page'>
      <Categories />
      <Switch>
        <Route exact path={path}>
          <CategoryHeader />
          <Carousel />
        </Route>
        <Route exact path={`${path}/:category`}>
          <section>
            <CategoryHeader />
            <Products />
          </section>
        </Route>
        <Route exact path={`${path}/:category/:productName`}>
          <Product />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </main>
  );
};

export default Shop;
