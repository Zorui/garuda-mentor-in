import React from 'react';
import { css } from 'emotion';
import { Row, Col } from 'react-bootstrap';

export default function ProfileCard() {
  return (
    <Row className={styles.container}>
      <Col md={4} sm={12}>
        Profile Picture
      </Col>
      <Col className="text-center text-md-left" md={8} sm={12}>
        <div>Name</div>
        <div>Job Title</div>
        <div>Rating</div>
        <div>Skills</div>
      </Col>
    </Row>
  );
}

const styles = {
  container: css`
    margin-bottom: 5rem;
  `,
};
