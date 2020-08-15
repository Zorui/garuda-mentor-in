import React, { useState } from 'react';
import { css } from 'emotion';

import { Header, Container, Carousel } from '../elements';
import ClassroomCard from './ClassroomCard';
import useAsyncFetch from '../../hooks/useAsyncFetch';
import * as apis from '../../apis/classroom';

const initialLoad = () => Promise.all([apis.getClassrooms()]);

export default function ClassroomCarousel() {
  const [classrooms, setClassrooms] = useState(undefined);
  const [fState] = useAsyncFetch(initialLoad, (rsp) => setClassrooms(rsp[0]), (err) => console.log('fetch err: ', err));

  return (
    <>
      <Header title="Recommended Class" />
      <Container style={styles.classroomCarouselContainer} state={fState}>
        <Carousel>
          {classrooms &&
            classrooms.map((classroom) => (
              <ClassroomCard key={classroom.id} classroom={classroom} />
            ))}
        </Carousel>
      </Container>
    </>
  );
}

const styles = {
  classroomCarouselContainer: css`
    display: block;
    flex-direction: row;
  `,
};
