import api from '../helpers/api';

export function getClassrooms() {
  // const rsp = api.get('/classrooms');
  console.log("getClassRoomApi");
  return [
    { id: 1, img: 'test.jpg', title: 'Testing Class 1', rating: 4, category: 'Technology' },
    { id: 2, img: 'test.jpg', title: 'Testing Class 2', rating: 5, category: 'Business' },
    { id: 3, img: 'test.jpg', title: 'Testing Class 3', rating: 4, category: 'Technology' },
    { id: 4, img: 'test.jpg', title: 'Testing Class 4', rating: 5, category: 'Technology' },
    { id: 5, img: 'test.jpg', title: 'Testing Class 5', rating: 4, category: 'Technology' },
    { id: 6, img: 'test.jpg', title: 'Testing Class 6', rating: 4, category: 'Technology' },
    { id: 7, img: 'test.jpg', title: 'Testing Class 7', rating: 4, category: 'Design' },
    { id: 8, img: 'test.jpg', title: 'Testing Class 8', rating: 4, category: 'Technology' },
    { id: 9, img: 'test.jpg', title: 'Testing Class 9', rating: 4, category: 'Technology' },
    { id: 10, img: 'test.jpg', title: 'Testing Class 10', rating: 4, category: 'Business' },
    { id: 11, img: 'test.jpg', title: 'Testing Class 11', rating: 4, category: 'Business' },
    { id: 12, img: 'test.jpg', title: 'Testing Class 12', rating: 4, category: 'Technology' },
    { id: 13, img: 'test.jpg', title: 'Testing Class 13', rating: 4, category: 'Technology' },
    { id: 14, img: 'test.jpg', title: 'Testing Class 14', rating: 4, category: 'Technology' },
    { id: 15, img: 'test.jpg', title: 'Testing Class 15', rating: 4, category: 'Design' },
    { id: 16, img: 'test.jpg', title: 'Testing Class 16', rating: 4, category: 'Design' },
    { id: 17, img: 'test.jpg', title: 'Testing Class 17', rating: 4, category: 'Design' },
  ];

  // return rsp.json();
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
