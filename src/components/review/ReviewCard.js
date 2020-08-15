import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { Rating } from '../elements';

export default function ReviewCard({ review }) {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col sm={3}>Profile Picture</Col>
          <Col sm={9}>
            <div>Name</div>
            <div>Review Date</div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}><Rating /></Col>
          <Col sm={12}>Testimonial Text</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
