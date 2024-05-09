import React from 'react';
import { useSelector } from 'react-redux';

const Cards = () => {
  const cats = useSelector((state) => state.cats.cats);

  return (
    <div>
      <ul>{cats}</ul>
    </div>
  );
};

export default Cards;
