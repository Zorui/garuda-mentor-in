import React from 'react';
import Rating from 'react-rating';

export default function Common({ score, fractions = 1, config = {} }) {
  return (
    <Rating
      emptySymbol="fa fa-star-o"
      fullSymbol="fa fa-star"
      fractions={fractions}
      initialRating={score}
      {...config}
    />
  );
}
