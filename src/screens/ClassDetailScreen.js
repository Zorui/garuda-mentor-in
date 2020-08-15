import React from 'react';
import { JumbotronClassDetail, CommonFooter } from '../components/elements';
import ClassDetailContainer from '../components/ClassDetailContainer';
import { useParams } from 'react-router-dom';

const ClassDetailScreen = () => {
  let { id } = useParams();
  return (
    <>
      <JumbotronClassDetail />
      <ClassDetailContainer id={id} />
      <CommonFooter />
    </>
  );
};

export default ClassDetailScreen;
