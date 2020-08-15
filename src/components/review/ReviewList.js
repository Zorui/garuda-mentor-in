import React, { useState } from 'react';

import { Container } from '../elements';
import ReviewCard from './ReviewCard';
import * as apis from '../../apis/review';
import useAsyncFetch from '../../hooks/useAsyncFetch';

export default function ReviewList() {
  const [reviews, setReviews] = useState(undefined);
  const initialLoad = () => Promise.all([apis.getReviewList()]);
  const [fState] = useAsyncFetch(initialLoad, (rsp) => setReviews(rsp));

  return (
    <Container state={fState}>
      {reviews && reviews.map((review) => <ReviewCard review={review} />)}
    </Container>
  );
}
