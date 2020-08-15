import React from 'react';
import Select from 'react-select';
import { css } from 'emotion';

export default function CustomSelect(props) {
  const { name, label, options, formik, ...otherProps } = props;
  const { setFieldValue, setFieldTouched } = formik;

  const handleChange = (value) => {
    setFieldValue(name, JSON.stringify(value));
  };

  const handleBlur = () => {
    setFieldTouched(true);
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <Select
        name={name}
        options={options}
        onChange={handleChange}
        onBlur={handleBlur}
        {...otherProps}
        isDisabled={formik.isSubmitting}
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
};
