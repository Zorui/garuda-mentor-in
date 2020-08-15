import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { css, cx } from 'emotion';

import {
  Header,
  Container,
  CarouselMultipleItems,
} from '../../components/elements';
import { ClassroomCard } from '../../components/classroom';
import { ProfileCard } from '../../components/profile';
import { ReviewList } from '../../components/review';
import useAsyncFetch from '../../hooks/useAsyncFetch';
import * as apis from '../../apis/profile';

function renderTab(eventKey, profile) {
  switch (eventKey) {
    case 'link-2':
      return <ReviewTab />;
    case 'link-3':
      return <ClassroomTab classrooms={profile.events} />;
    default:
      return <ProfileTab summary={profile.about_me} />;
  }
}

function ProfileNav({ profile }) {
  const [selectedTab, setSelectedTab] = useState('link-1');

  return (
    <>
      <Nav
        style={{ marginBottom: '1.5rem' }}
        fill
        variant="tabs"
        defaultActiveKey="link-1"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onSelect={(eventKey) => setSelectedTab(eventKey)}
          >
            Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onSelect={(eventKey) => setSelectedTab(eventKey)}
          >
            Review
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            onSelect={(eventKey) => setSelectedTab(eventKey)}
          >
            Class
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {renderTab(selectedTab, profile)}
    </>
  );
}

function ProfileTab({ summary }) {
  return (
    <>
      <div
        className={styles.profileSummary}
        dangerouslySetInnerHTML={{ __html: summary }}
      />
    </>
  );
}

function ReviewTab() {
  return (
    <>
      <ReviewList />
    </>
  );
}

function ClassroomTab({ classrooms }) {
  return (
    <>
      <CarouselMultipleItems>
        {classrooms &&
          classrooms.map((classroom) => (
            <ClassroomCard key={classroom.id} classroom={classroom} />
          ))}
      </CarouselMultipleItems>
    </>
  );
}

export default function ProfileScreen() {
  const params = useParams();
  const [profile, setProfile] = useState(undefined);
  const initialLoad = () => Promise.all([apis.getProfile(params.id)]);
  const [fState] = useAsyncFetch(initialLoad, (rsp) => setProfile(rsp[0]));

  return (
    <>
      <Header title="Profile Detail" />
      <Container state={fState}>
        <ProfileCard profile={profile} />
        <ProfileNav profile={profile} />
      </Container>
    </>
  );
}

const styles = {
  profileSummary: css`
    text-align: left;
  `,
};
