import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import * as apis from '../apis/classroom';
import {
  JumbotronClassDetail,
  CommonFooter,
  Container,
} from '../components/elements';
import ClassDetailContainer from '../components/ClassDetailContainer';
import useAsyncFetch from '../hooks/useAsyncFetch';

const ClassDetailScreen = () => {
  let { id } = useParams();
  const [classData, setClassData] = useState(undefined);
  const [fState] = useAsyncFetch(
    () => apis.getClassroomDetail(id),
    (rsp) => {
      setClassData(rsp);
      console.log(rsp);
    },
    (err) => console.log(err)
  );

  return (
    <>
      {classData && (
        <>
          <JumbotronClassDetail
            mentorName={classData.user.name}
            className={classData.name}
            classCat={classData.category}
          />
          <Container state={fState}>
            <ClassDetailContainer
              desc={classData.description}
              eventId={classData.id}
              mentorId={classData.user_id}
              mentorName={classData.user.name}
              expertise={classData.user.expertise}
              cap={classData.capacity}
              level={classData.level}
              startDate={classData.start_time}
              endDate={classData.end_time}
              link={classData.link}
            />
          </Container>
          <CommonFooter />
        </>
      )}
    </>
  );
};

export default ClassDetailScreen;
