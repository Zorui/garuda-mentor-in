import React, { useState } from 'react';
import { css } from 'emotion';
import { Button } from 'react-bootstrap';
import moment from 'moment';

import { MentorCard } from '../components/elements';
import {
  PriceIcon,
  WebinarIcon,
  UserIcon,
  CalendarIcon,
  LevelIcon,
} from '../assets/svg';


export default function ClassDetailContainer({ desc, mentorName, expertise, cap, level, startDate, endDate, link}) {
    let sD = moment(startDate).format('DD MMMM YYYY, hh:mm');
    let eD = moment(endDate).format('DD MMMM YYYY, hh:mm');
return (
    <>
      <div className={styles.container}>
        <div className={styles.desc}>
          <p>{desc}</p>
          <Button variant="danger">Register</Button>
          <MentorCard name={mentorName} expertise={expertise} />
          <Button variant="danger" className={styles.goto}>
            Go to Profile
          </Button>
        </div>
        <div className={styles.detail}>
          <div className={styles.detaildesc}>
            <div>
              <UserIcon size="36" />
              <span>{cap}</span>
            </div>
            <div>
              <LevelIcon size="36" />
              <span>{level}</span>
            </div>
            <div>
              <PriceIcon size="36" />
              <span>Free</span>
            </div>
            <div>
              <CalendarIcon size="36" />
              <span>
                {sD}-
                {eD}
              </span>
            </div>
            <div>
              <WebinarIcon size="36" />
              <span>{link}</span>
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
    align-items: flex-start;
    border: 2px solid #000;
    padding: 1.8rem;
  `,
};
