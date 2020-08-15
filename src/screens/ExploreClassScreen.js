import React from 'react';
import ClassroomList from '../components/classroom/ClassroomList';
import {CommonFooter} from '../components/elements';

const ExploreClassScreen = () => {
  return (
    <div style={{"display":"flex", "flex-direction":"column", "justify-contents": "space-between"}}>
      <ClassroomList/>
      <CommonFooter/>
    </div>
  );
};

export default ExploreClassScreen;
