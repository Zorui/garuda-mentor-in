import React from 'react';
import { useFormik, Form } from 'formik';
import { css } from 'emotion';
import * as Apis from '../apis/classroom';

//"id":1,"name":"sint","description":"Ab voluptatem velit. Non similique eos.","category":"Business","start_time":"2020-08-30T08:54:45.000Z","end_time":"2020-08-25T08:27:03.000Z","level":"Median","link":"http://example.com/rudy","event_type":"Class",


const CreateClassForm = () => {
  const formik = useFormik({
    initialValues: {
      classname: '',
      classdesc: '',
      classcat: '',
      classdur: '',
      classdt: '',
      classlod: '',
      classcap: '',
      classlink: '',
    },
    onSubmit: () =>{
      console.log(formik);
      Apis.createClassroom(formik.values);
    },
    onReset: () =>{},
  });

  console.log('Form values', formik);

  return (
    <div className={styles.formContainer}>
      {/* <input type="file"
       id="classpic" name="classpic"
       accept="image/png, image/jpeg"/> */}
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="classname">Name of Class</label>
        <input
          type="text"
          id="classname"
          name="classname"
          onChange={formik.handleChange}
          value={formik.values.classname}
        />
        <label>Description</label>
        <input
          type="text"
          id="classdesc"
          name="classdesc"
          onChange={formik.handleChange}
          value={formik.values.classdesc}
        />
        <label htmlFor="classcat">Category</label>
        <input
          type="text"
          id="classcat"
          name="classcat"
          onChange={formik.handleChange}
          value={formik.values.classcat}
        />
        <label>Duration</label>
        <input
          type="date"
          id="classdur"
          name="classdur"
          onChange={formik.handleChange}
          value={formik.values.classdur}
        />
        <label>Date {'&'} Time</label>
        <input
          type="datetime"
          id="classdt"
          name="classdt"
          onChange={formik.handleChange}
          value={formik.values.classdt}
        />
        <label>Level of Difficulty</label>
        <input
          type="text"
          id="classlod"
          name="classlod"
          onChange={formik.handleChange}
          value={formik.values.classlod}
        />
        <label>Capacity</label>
        <input
          type="number"
          id="classcap"
          name="classcap"
          min="1"
          onChange={formik.handleChange}
          value={formik.values.classcap}
        />
        <label>Class link (Zoom / Google Meet)</label>
        <input
          type="url"
          id="classlink"
          name="classlink"
          onChange={formik.handleChange}
          value={formik.values.classlink}
        />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default CreateClassForm;

const styles = {
  formContainer: css`
    width: 60%;
    margin: 0 20%;
  `,
  form: css`
    display: flex;
    align-items: stretch;
    flex-direction: column;
  `,
};
