import React from 'react';
import { css } from 'emotion';

export default function PartnersScreen() {
  return (
    <div className={styles.container}>
      <p className={styles.word}>Page for Us!</p>
      <p className={styles.words}>Be the part of community based program.</p>
    </div>
  );
}
const styles = {
  container: css`
    width: 80%;
    margin: 4rem auto;
    height: 36rem;
    border-radius: 12px;
    box-shadow: 2px 2px 4px 5px gray;
    padding-top: 13rem;
    text-align: center;
  `,
  word: css`
    font-size: 4rem;
    color: #c85051;
    font-weight: bold;
  `,
  words: css`
    font-size: 2rem;
    color: #c85051;
    font-weight: thin;
  `,
};
