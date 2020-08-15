import React from 'react';
import { css } from 'emotion';
import { Row, Col, Badge, Image } from 'react-bootstrap';

import { Rating } from '../elements';

function ExpertiseLabel({ label }) {
  return (
    <span className={styles.h3}>
      <Badge variant="dark">
        {label}
      </Badge>
    </span>
  );
}

export default function ProfileCard({ profile }) {
  return (
    <Row className={styles.container}>
      <Col md={4} sm={12}>
        <Image src="https://via.placeholder.com/150" roundedCircle />
      </Col>
      <Col className="text-center text-md-left" md={8} sm={12}>
        <div className={styles.h1}>{profile.name}</div>
        <div className={styles.thinLabel}>{profile.user_type}</div>
        <div className={styles.boldLabel}>
          {4.9} <Rating score={4.9} fractions={4} config={{ readonly: true }} />
        </div>
        <div>
          <ExpertiseLabel label={profile.expertise} />
        </div>
      </Col>
    </Row>
  );
}

const styles = {
  container: css`
    margin-bottom: 5rem;
  `,
  h1: css`
    font-weight: bold;
    font-size: 2rem;
  `,
  thinLabel: css`
    font-weight: 300;
    font-size: 1.5rem;
  `,
  boldLabel: css`
    font-weight: bold;
    font-size: 1.5rem;
  `,
  h3: css`
    font-weight: bold;
    font-size: 1.5rem;
  `
};
