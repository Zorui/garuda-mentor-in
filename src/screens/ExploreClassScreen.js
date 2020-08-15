import React from 'react';
import { Header, Container } from '../components/elements';
import ClassroomList from '../components/classroom/ClassroomList';
import { CommonFooter } from '../components/elements';

const ExploreClassScreen = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContents: 'space-between',
      }}
    >
      <ClassroomList />
      <CommonFooter />
    </div>
  );
};

export default ExploreClassScreen;
