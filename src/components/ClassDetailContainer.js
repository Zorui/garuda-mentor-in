import React, {useState} from 'react';
import { css } from 'emotion';
import { Button } from 'react-bootstrap';
import { MentorCard } from '../components/elements';
import useAsyncFetch from '../hooks/useAsyncFetch';
import {
  PriceIcon,
  WebinarIcon,
  UserIcon,
  CalendarIcon,
  LevelIcon,
} from '../assets/svg';

import * as apis from '../apis/classroom';

export default function ClassDetailContainer({ id }) {
  const [classData, setClassData] = useState(undefined);
  const [fState] = useAsyncFetch(()=>apis.getClassroomDetail(id), (rsp) => {
    setClassData(rsp);
  });

  console.log('classData', classData);
  console.log('received id:', id);


  return (
    <>
      <div className={styles.container}>
        <div className={styles.desc}>
          <p>Desc</p>
          <Button variant="danger">Register</Button>
          <MentorCard name="Vincent Hu" expertise="ML AI Learning" />
          <Button variant="danger" className={styles.goto}>
            Go to Profile
          </Button>
        </div>
        <div className={styles.detail}>
          <div className={styles.detaildesc}>
            <div>
              <UserIcon size="36" />
              <span>Cap</span>
            </div>
            <div>
              <LevelIcon size="36" />
              <span>Beginner</span>
            </div>
            <div>
              <PriceIcon size="36" />
              <span>Free</span>
            </div>
            <div>
              <CalendarIcon size="36" />
              <span>
                6 August 2020
                <br />
                (16.00: 18.00) WIB
              </span>
            </div>
            <div>
              <WebinarIcon size="36" />
              <span>Zoom Link</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: css`
    display: flex;
    width: 100%;
    min-height: 480px;
    padding: 4rem;
  `,
  desc: css`
    flex: 1 0 70%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
  `,
  detail: css`
    flex: 1 1 30%;
  `,
  detaildesc: css`
    display: flex;
    max-width: 20rem;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid #000;
    padding: 1.8rem;
  `,
};
