import React from 'react';
import ReactQuill from 'react-quill';
import { css } from 'emotion';
import 'react-quill/dist/quill.snow.css';

export default function DescriptionInput({ name, value, label, formik }) {
  function handleChange(html) {
    formik.setFieldValue(name, html);
  }

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        style={{ height: '350px', textAlign: 'left' }}
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
  input: css``,
};
