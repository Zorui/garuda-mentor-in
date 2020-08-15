import React from 'react';
import { css } from 'emotion';

export default function JoinCommunityScreen() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img_thumb}></div>
      </div>
      <div className={styles.filler}>
        <div className={styles.fBox}>
          <a
            className={styles.words}
            href="https://join.slack.com/t/testing123-1gg8657/shared_invite/zt-g43sqk2q-9P~ibbpjTiAhDpWKe~BAPA"
          >
            Join
          </a>
        </div>
      </div>
    </>
  );
}

const styles = {
  fBox: css`
    margin: 0 auto;
    position: relative;
    text-align: center;
    top: 5rem;
    width: 12rem;
    padding: 1.2rem;
    background-color: #c85051;
    transition: filter 300ms;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px black;
    &:hover: {
      filter: brightness(1.2);
    }
  `,
  filler: css`
    width: 100%;
    height: 20rem;
    background-color: #c85051;
  `,
  img_thumb: css`
    background-color: gray;
    background-image: url(/raw/CommunitySlack.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
  `,
  container: css`
    width: 100%;
    height: 44rem;
    background-color: gray;
  `,
  words: css`
    font-size: 4rem;
    font-weight: bold;
    color: white;
    text-align: center;
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: black;
    }
  `,
};
