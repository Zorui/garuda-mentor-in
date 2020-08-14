import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import { Container, Header } from '../elements';
import ClassroomCard from './ClassroomCard';
import useAsyncFetch from '../../hooks/useAsyncFetch';
import * as apis from '../../apis/classroom';

export default function ClassroomList() {
  const [classrooms, setClassrooms] = useState(undefined);
  const initialLoad = () => Promise.all([apis]);
  const [fState] = useAsyncFetch(initialLoad, (rsp) => setClassrooms(rsp));

  return (
    <>
      <Header title="Explore our class that fit your interest" />
      <Container state={fState}>
        <Row>
          {classrooms &&
            classrooms.map((classroom) => (
              <Col xs={12} md={3}>
                <ClassroomCard classroom={classroom} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
