import api from '../helpers/api';

export async function getReviewList() {
  return await api.get('reviews') 
}
