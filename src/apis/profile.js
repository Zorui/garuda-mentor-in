import api from '../helpers/api';

export function getProfile(id) {
  const rsp = api.get(`users/${id}`);

  return rsp.json();
}
export async function getMyProfile() {
  const rsp = await api.get('users/1'); // dummy user

  return rsp.json();
}

export async function editMyProfile(payloads) {
  const rsp = await api.post('profile', {
    json: payloads,
  });

  return rsp.json();
}
