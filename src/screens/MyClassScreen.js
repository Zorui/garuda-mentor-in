import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { css } from 'emotion';

import { CarouselMultipleItems } from '../components/elements/Carousel';
import ClassroomCard from '../components/classroom/ClassroomCard';
import useAsyncFetch from '../hooks/useAsyncFetch';
import { Container } from '../components/elements';

import * as apis from '../apis/appointmentApi';

export default function MyClassScreen() {
  let [selectedTab, setSelectedTab] = useState('link-1');
  return (
    <>
      <div className={styles.banner}>
          <p className={styles.bannerdesc}>My class</p>
      </div>
      <Nav variant="tabs" defaultActiveKey="link-1">
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onSelect={(eventKey) => setSelectedTab(eventKey)}
          >
            All Classes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onSelect={(eventKey) => setSelectedTab(eventKey)}
          >
            Wishlist
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {renderTab(selectedTab)}
    </>
  );
}
function renderTab(eventKey) {
  switch (eventKey) {
    case 'link-2':
      return <WishlistTab />;
    default:
      return <AllClassTab />;
  }
}

function AllClassTab() {
  const [classRoom, setClassRoom] = useState(undefined);
  const [getAppointment, setGetAppointment] = useState(undefined);
  const [fState] = useAsyncFetch(
    () => apis.getMyClass(4),
    (rsp) => {
      setGetAppointment(rsp);
      console.log(rsp);
    }
  );
  return (
    <Container state={fState}>
      <CarouselMultipleItems>
        {getAppointment &&
          getAppointment.map((classroom) => (
            <ClassroomCard key={classroom.id} classroom={classroom} />
          ))}
      </CarouselMultipleItems>
    </Container>
  );
}

function WishlistTab() {
  return null;
}

const styles = {
  banner: css`
    width: 100%;
    height: 10rem;
    background-color: rgba(0, 0, 0, 0.6);
  `,
  bannerdesc: css`
    color: white;
    position: relative;
    top: 4rem;
    left: 3rem;
    font-size: 2.3rem;
    font-weight: bold;
  `
};
