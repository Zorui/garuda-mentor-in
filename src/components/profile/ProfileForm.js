import React from 'react';
import { useFormik, Form, TextInput } from 'formik';

export default function ProfileForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    // submit form
  }

  return (
    <>
      <Form>
        <label>FullName</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label>Job Position</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label>Skills</label>
        
      </Form>
    </>
  );
}
