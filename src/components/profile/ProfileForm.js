import React from 'react';
import { css, cx } from 'emotion';
import { Row, Col, Button } from 'react-bootstrap';

import { SelectInput, TextInput, DescriptionInput } from '../elements/Inputs';

export default function ProfileForm({ myProfile, formik }) {
  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={6} sm={12}>
            Profile Picture
          </Col>
          <Col md={6} sm={12}>
            <Row>
              <Col sm={12}>
                <TextInput
                  name="fullname"
                  label="Fullname"
                  onChange={formik.handleChange}
                  value={formik.values.fullname}
                  disabled={formik.isSubmitting}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <TextInput
                  name="job_position"
                  label="Job Title"
                  onChange={formik.handleChange}
                  value={formik.values.job_position}
                  disabled={formik.isSubmitting}
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
            <Button
              variant="danger"
              size="lg"
              type="submit"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Loading...' : 'Save'}
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

const styles = {
  container: css`
    margin-bottom: 3rem;
  `,
};
