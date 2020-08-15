import api from '../helpers/api';

export function getReviewList({ reviews }) {
  return [
    {
      id: 1,
      reviewer: 'Linda',
      created_at: '04-12-1234 4:00pm',
      score: 5,
      testimonial: 'test testa sdf asdf asf asdf asd fasdf asf asf as df',
    },
    {
      id: 2,
      reviewer: 'Linda',
      created_at: '04-12-1234 4:00pm',
      score: 4,
      testimonial: 'test testa sdf asdf asf asdf asd fasdf asf asf as df',
    },
    {
      id: 3,
      reviewer: 'Linda',
      created_at: '04-12-1234 4:00pm',
      score: 5,
      testimonial: 'test testa sdf asdf asf asdf asd fasdf asf asf as df',
    },
  ];
}
