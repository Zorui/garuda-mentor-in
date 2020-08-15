import React from 'react';
import { css } from 'emotion';

export default function TextInput({ name, label, onChange, value }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        onChange={onChange}
        value={value}
        className={styles.input}
      />
    </div>
  );
}

const styles = {
  inputContainer: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  `,
  label: css`
    text-align: left;
  `,
  input: css`
  `,
};
