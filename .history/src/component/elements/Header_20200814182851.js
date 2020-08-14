import React from 'react';
import { css } from 'emotion';

export default function Header({ title }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>{title}</div>
    </div>
  );
}

const styles = {
  headerContainer: css`
    text-align: center;
    margin: 4.5rem 0 1.5rem 0;
    width: 100%;
  `,
  title: css`
    font-weight: bold;
    font-size: 2rem;
  `,
};
