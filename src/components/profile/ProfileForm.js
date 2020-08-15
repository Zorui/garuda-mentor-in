import React from 'react';
import { css, cx } from 'emotion';
import { useFormik } from 'formik';
import { Row, Col, Button } from 'react-bootstrap';

import { Container } from '../elements';
import { SelectInput, TextInput, DescriptionInput } from '../elements/Inputs';

export default function ProfileForm() {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      job_position: '',
      expertises: [],
      summary: '',
    },
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    console.log('submit values', values);
    // submit form
  }

  return (
    <Container style={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={6} sm={12}>
            Profile Picture
          </Col>
          <Col md={6} sm={12}>
            <Row>
              <Col sm={12}>
                <TextInput
                  label="Fullname"
                  onChange={formik.handleChange}
                  value={formik.values.fullname}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <TextInput
                  label="Job Title"
                  onChange={formik.handleChange}
                  value={formik.values.job_position}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <SelectInput
                  name="expertises"
                  label="Skill"
                  options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                  ]}
                  values={formik.values.expertises}
                  formik={formik}
                  isMulti
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <DescriptionInput
              name="summary"
              value={formik.values.summary}
              label="Summary"
              formik={formik}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col sm={12}>
            <Button variant="danger" size="lg" type="submit">
              Save
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

const styles = {
  container: css`
    margin-bottom: 3rem;
  `,
};
