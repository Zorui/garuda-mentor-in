import api from '../helpers/api';

export function getMyClass(uid) {
    const rsp = api.get(`appointments/${uid}`);
    return rsp.json();
  }

export function getMyClass2(uid){
    const rsp = api.get(`events/${uid}`);
    return rsp.json();
}