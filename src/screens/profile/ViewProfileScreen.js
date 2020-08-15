import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

import { Header, Container } from '../../components/elements';
import { ProfileCard } from '../../components/profile';
import { ReviewList } from '../../components/review';

function renderTab(eventKey) {
  switch (eventKey) {
    case 'link-2':
      return <ReviewTab />;
    case 'link-3':
      return <ClassroomTab />;
    default:
      return <ProfileTab />;
  }
}

function ProfileNav() {
  const [selectedTab, setSelectedTab] = useState('link-1');

  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="link-1">
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
      {renderTab(selectedTab)}
    </>
  );
}

function ProfileTab({ summary }) {
  return (
    <>
      <div dangerouslySetInnerHTML={summary} />
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

function ClassroomTab() {
  return <>Classroom Tab</>;
}

export default function ProfileScreen() {
  return (
    <>
      <Header title="Profile Detail" />
      <Container>
        <ProfileCard />
        <ProfileNav />
      </Container>
    </>
  );
}
