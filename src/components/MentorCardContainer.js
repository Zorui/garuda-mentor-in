import React, { useState } from 'react';

import { MentorCard, Container, Header } from './elements';
import { css, cx } from 'emotion';
import useAsyncFetch from '../hooks/useAsyncFetch';
import * as apisM from '../apis/mentorHomePageApi';

const MentorCardContainer = ({ state = 2 }) => {
  const [mentors, setMentors] = useState(undefined);

  const [fState] = useAsyncFetch(
    apisM.mentorHomePageApi,
    (rsp) => setMentors(rsp),
    (err) => console.log('fetch err: ', err)
  );
  
  return (
    <>
      <Header title="Meet the mentors" />
      <Container state={fState}>
        <div className={cx(styles.mentor_container)}>
          {mentors &&
            mentors.map((mentorProfile) => {
              return (
                <MentorCard
                  key={mentorProfile.id}
                  name={mentorProfile.name}
                  expertise={mentorProfile.expertise}
                />
              );
            })}
        </div>
      </Container>
    </>
  );
};

const styles = {
  mentor_container: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
};

export default MentorCardContainer;
