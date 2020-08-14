import ky from 'ky';

const api = ky.create({
  prefixUrl: 'http://192.168.137.30:8080/api/v1',
});

export default api;