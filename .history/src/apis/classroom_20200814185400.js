import api from '../helpers/api';

export function getClassrooms() {
  const rsp = api.get('/api/v1/classrooms');

  return [
    { id: 1, img: 'test.jpg', title: 'Testing Class 1', rating: 4 },
    { id: 2, img: 'test.jpg', title: 'Testing Class 2', rating: 5 },
    { id: 3, img: 'test.jpg', title: 'Testing Class 3', rating: 4 },
    { id: 4, img: 'test.jpg', title: 'Testing Class 4', rating: 5 },
  ];

  return rsp.json();
}

export function getClassroomDetail() {}

export function createClassroom() {}

export function editClassroom() {}

export function deleteClassroom() {}
