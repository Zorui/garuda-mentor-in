import React from "react";
import { useFormik } from "formik";
import { css } from 'emotion';


const CreateClassForm = () => {
  const formik = useFormik({
    initialValues: {
      classname: "",
      classdesc: "",
      classcat: "",
      classdur: "",
      classdt: "",
      classlod: "",
      classcap: "",
      classlink: "",
    },
  });

  console.log("Form values", formik.values);

  return (
    <div>
      <form>
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
          type="number"
          id="classdur"
          name="classdur"
          min
          onChange={formik.handleChange}
          value={formik.values.classdur}
        />
        <label>Date {"&"} Time</label>
        <input
          type="date"
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
    card: css`
        width: 100%;
    `,
    form: css`
        display: flex;
        align-items: stretch;
    `
}