import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import { Container, Header } from '../elements';
import ClassroomCard from './ClassroomCard';
import { css } from 'emotion';
import useAsyncFetch from '../../hooks/useAsyncFetch';
import * as apis from '../../apis/classroom';
import State from '../../constants/State';
import { CarouselMultipleItems } from '../elements';

export default function ClassroomList() {
  const [classrooms, setClassrooms] = useState(undefined);
  const [filteredClass, setFilteredClass] = useState(undefined);
  const [cat, setCat] = useState('All');

  const initialLoad = () => Promise.all([apis.getClassrooms()]);

  const [fState] = useAsyncFetch(
    initialLoad,
    (rsp) => setClassrooms(rsp[0]),
    (err) => console.log('fetch err: ', err)
  );

  function filterClassroom() {
    if (cat === 'All') {
      setFilteredClass(classrooms);
      return;
    }
    setFilteredClass(classrooms.filter((classro) => classro.category === cat));
  }

  useEffect(() => {
    filterClassroom();
  }, [fState, cat]);

  return (
    <div className={styles.container}>
      <Header title="Explore our classes that fits your interest" />
      <div className={styles.filterbutton}>
        <Button
          variant="dark"
          style={{ margin: '0 0.5rem' }}
          disabled={fState === State.FState.loading ? true : false}
          onClick={() => setCat('All')}
        >
          All Category
        </Button>
        <Button
          variant="dark"
          style={{ margin: '0 0.5rem' }}
          disabled={fState === State.FState.loading ? true : false}
          onClick={() => setCat('Design')}
        >
          Design
        </Button>
        <Button
          variant="dark"
          style={{ margin: '0 0.5rem' }}
          disabled={fState === State.FState.loading ? true : false}
          onClick={() => setCat('Business')}
        >
          Business
        </Button>
        <Button
          variant="dark"
          style={{ margin: '0 0.5rem' }}
          disabled={fState === State.FState.loading ? true : false}
          onClick={() => setCat('Technology')}
        >
          Technology
        </Button>
      </div>

      <Container state={fState}>
        <CarouselMultipleItems>
          {console.log('filteredClass', filteredClass)}
          {filteredClass &&
            filteredClass.map((classroom) => (
              <ClassroomCard key={classroom.id} classroom={classroom} />
            ))}
        </CarouselMultipleItems>
      </Container>
    </div>
  );
}

const styles = {
  filterbutton: css`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  `,
  container: css`
    margin-bottom: 3rem;
  `,
};
