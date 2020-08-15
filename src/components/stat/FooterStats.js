import React from 'react';
import { css, cx } from 'emotion';

export default function FooterStats() {
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <div className={styles.statsLabel}>
          <div className={cx(styles.small, styles.bold, styles.orange)}>
            mentor.in number
          </div>
        </div>
        <div className={styles.statsLabel}>
          <div className={cx(styles.big, styles.white)}>20</div>
          <div className={cx(styles.small, styles.white)}>Mentees</div>
        </div>
        <div className={styles.statsLabel}>
          <div className={cx(styles.big, styles.white)}>10</div>
          <div className={cx(styles.small, styles.white)}>Mentors</div>
        </div>
        <div className={styles.statsLabel}>
          <div className={cx(styles.big, styles.white)}>28</div>
          <div className={cx(styles.small, styles.white)}>Class Created</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: css`
    min-height: 500px;
    min-width: 100%;
    background-image: url('/raw/stat-background.svg');
    background-size: cover;
  `,
  stats: css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    top: 275px;
    padding: 0 125px;
  `,
  statsLabel: css`
    text-align: center;
  `,
  orange: css`
    color: #db8e8e;
  `,
  big: css`
    font-size: 4rem;
    font-weight: bold;
  `,
  small: css`
    font-size: 2rem;
    font-weight: 300;
  `,
  bold: css`
    font-weight: bold;
  `,
  white: css`
    color: #fff;
  `,
};
