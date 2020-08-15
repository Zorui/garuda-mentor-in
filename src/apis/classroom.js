import api from '../helpers/api';
import moment from 'moment';

export function getClassrooms() {
  const rsp = api.get('events');
  return rsp.json();
}

export function getClassroomDetail({id}) {
  const rsp = api.get(`events/${id}`);
  return rsp.json();
}

export function createClassroom({ classdur, ...payload }) {
  var endDate = moment(payload.classdt);
  endDate = endDate.add(classdur, 'minutes').format('YYYY-MM-DDTHH:mm:ss');

  var temp = {
    name: payload.classname,
    user_id: '3',
    description: payload.classdesc,
    category: payload.classcat,
    start_time: payload.classdt,
    end_time: endDate,
    capacity: payload.cap,
    level: payload.classlod,
    link: payload.classlink,
  };

  api.post('events', {
    json: temp,
  });
}

export function editClassroom() {}

export function deleteClassroom() {}
