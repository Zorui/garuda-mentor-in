import React from 'react';
import { css, cx } from 'emotion';

const MentorCard = ({ name, expertise }) => {
  return (
    <>
      <div className={cx(styles.mentor_card)}>
        <div className={cx(styles.mentor_img)}></div>
        <div className={cx(styles.mentor_desc)}>
          <p className={cx(styles.mentor_name)}>{name}</p>
          <p className={cx(styles.mentor_expertise)}>{expertise}</p>
        </div>
      </div>
    </>
  );
};

const styles = {
  mentor_card: css`
    flex: 1 0 30%;
    display: flex;
    min-width: 19rem;
    max-width: 19rem;
    min-height: 6rem;
    max-height: 6rem;
    padding: 0.5rem 0.5rem;
    margin: 1rem;
    background-color: #191c21;
    justify-content: space-between;
    align-items: center;
  `,
  mentor_desc: css`
    flex-grow: 1;
    background-color: #191c21;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  mentor_name: css`
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 0;
  `,
  mentor_img: css`
    flex-grow: 1;
    background-color: gray;
    width: 80px;
    height: 80px;
    max-width: 80px;
    margin-right: 1rem;
  `,
  mentor_expertise: css`
    color: white;
  `,
};

export default MentorCard;
