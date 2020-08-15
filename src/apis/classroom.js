import api from '../helpers/api';

export function getClassrooms() {
  const rsp = api.get('/classrooms');

  return [
    { id: 1, img: 'test.jpg', title: 'Testing Class 1', rating: 4 },
    { id: 2, img: 'test.jpg', title: 'Testing Class 2', rating: 5 },
    { id: 3, img: 'test.jpg', title: 'Testing Class 3', rating: 4 },
    { id: 4, img: 'test.jpg', title: 'Testing Class 4', rating: 5 },
  ];

  return rsp.json();
}

export function getClassroomDetail() {}

export function createClassroom(payload) {
  console.log("payload:", payload);
  const formData = new FormData();
  formData.append('name', payload.classname);
  formData.append('description', payload.classdesc);
  formData.append('category', payload.classcat);
  formData.append('start_time', payload.classdt);
  formData.append('end_time', payload.classdur);
  formData.append('level', payload.classlod);
  formData.append('link', payload.classlink);
  formData.append('event_type', "class");
  console.log("formData:",formData);
  api.post("http://192.168.137.30:8080/api/v1/events", {
    json: formData,
  });
}

export function editClassroom() {}

export function deleteClassroom() {}
