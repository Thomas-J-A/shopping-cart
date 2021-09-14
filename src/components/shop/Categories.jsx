import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Categories = () => {
  const { url } = useRouteMatch();

  if (useRouteMatch('/shop/:category/:productName')) return null;

  return (
    <nav>
      <ul>
        <li>
          <Link to={url}>Featured</Link>
        </li>
        <li>
          <Link to={`${url}/relationships`}>Relationships</Link>
        </li>
        <li>
          <Link to={`${url}/body&mind`}>Body &amp; Mind</Link>
        </li>
        <li>
          <Link to={`${url}/time`}>Time</Link>
        </li>
        <li>
          <Link to={`${url}/work`}>Work</Link>
        </li>
        <li>
          <Link to={`${url}/misc`}>Misc</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
