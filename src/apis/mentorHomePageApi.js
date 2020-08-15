// import api from '../helpers/api';

export async function mentorHomePageApi() {
  // const rsp = api.get('http://localhost:8080/api/v1/appointments');
  // return rsp.json();
  const rsp = [
    { id: 1, name: 'Denny Santoso', expertise: 'Digital Marketing' },
    { id: 2, name: 'Menti Mantis', expertise: 'Manual Marketing' },
    { id: 3, name: 'Vincent Hu', expertise: 'UI/UX Designer' },
    { id: 4, name: 'Kintan Medan', expertise: 'Culinary' },
    { id: 5, name: 'Oramin Vit', expertise: 'Art Drawing' },
    { id: 6, name: 'Jaee Zee', expertise: 'Music Production' },
  ];
  return rsp;
}
