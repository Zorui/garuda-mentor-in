import React from 'react';
import { css, cx } from 'emotion';

export default function CommonFooter() {
  return (
    <>
      <footer className={cx(style.footer)}>
        <p className={cx(style.content1)}>Follow us</p>
        <div className={cx(style.socialicon)}>
          <img src="/raw/twitter.svg"></img>
        </div>
        <div className={cx(style.socialicon)}>
          <img src="/raw/facebook.svg"></img>
        </div>
        <div className={cx(style.socialicon)}>
          <img src="/raw/instagram.svg"></img>
        </div>
        <div className={cx(style.filler)}></div>
        <p className={cx(style.content2)}>
          &#169; Mentor.in 2020. All rights reserved.
        </p>
      </footer>
    </>
  );
}

const style = {
  footer: css`
    background-color: #c85051;
    height: 3rem;
    min-height: 2rem;
    display: flex;
    justify-content: flex-start;
  `,
  filler: css`
    flex: 1 1 auto;
    height: 24px;
  `,
  content1: css`
    margin: 0.6rem 1rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
  `,
  content2: css`
    margin: 1rem 0.8rem;
    font-size: 0.6rem;
    color: white;
  `,
  socialicon: css`
    margin: auto 0 auto 1.2rem;
    &:hover {
      cursor: pointer;
    }
  `,
};
