import React from 'react';
import Rating from 'react-rating';

export default function Common({ score, fractions = 1, config = {} }) {
  return (
    <Rating
      emptySymbol="fa fa-star-o medium"
      fullSymbol="fa fa-star medium"
      fractions={fractions}
      initialRating={score}
      {...config}
    />
  );
}
