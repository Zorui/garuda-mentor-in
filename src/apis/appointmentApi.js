import api from '../helpers/api';
import moment from 'moment';

export function getMyClass(uid) {
  const rsp = api.get(`appointments/${uid}`);
  return rsp.json();
}

export function getMyClass2(uid) {
  const rsp = api.get(`events/${uid}`);
  return rsp.json();
}

export function registerToClass(event_id, user_id) {
  const start = moment().format("YYYY-MM-DD hh:mm:ss");
  const rsp = api.post(`events/${event_id}/appointments`, {
    json: { requester_id: `${user_id}`, date: `${start}` },
  });
  return console.log(rsp);
}
