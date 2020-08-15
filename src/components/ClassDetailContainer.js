import React from 'react';
import { css } from 'emotion';
import { Button } from 'react-bootstrap';
import { MentorCard } from '../components/elements';
import {
  PriceIcon,
  WebinarIcon,
  UserIcon,
  CalendarIcon,
  LevelIcon,
} from '../assets/svg';

export default function ClassDetailContainer() {
  return (
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
            <UserIcon />
            <span>Cap</span>
          </div>
          <div>
            <LevelIcon />
            <span>Beginner</span>
          </div>
          <div>
            <PriceIcon />
            <span>Free</span>
          </div>
          <div>
            <CalendarIcon />
            <span>
                <p>6 August 2020</p>
                <p>(16.00: 18.00) WIB</p>
            </span>
          </div>
          <div>
            <WebinarIcon />
            <span>Zoom Link</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: css`
    display: flex;
    width: 100%;
    min-height: 480px;
  `,
  desc: css`
    flex: 1 0 70%;
    background-color: black;
  `,
  detail: css`
    flex: 1 1 30%;
  `,
  detaildesc: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid #000;
  `,
};
