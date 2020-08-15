import React from 'react';
import { css } from 'emotion';
import { useHistory } from 'react-router-dom';
import { Card, Row, Col, Button, Badge } from 'react-bootstrap';

import { CalendarIcon, LevelIcon } from '../../assets/svg';

export default function ClassroomCard({ classroom }) {
  const history = useHistory();

  return (
    <Card
      style={{ width: '15rem', margin: '1rem .25rem', display: 'inline-block' }}
    >
      <Badge
        style={{
          width: '50px',
          position: 'absolute',
          top: '10px',
          left: '10px',
          padding: '8px 0',
          backgroundColor: '#c85051',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        New
      </Badge>
      <Card.Img style={{ height: '125px' }} variant="top" src={classroom.img} />
      <Card.Body>
        <Card.Title style={{ fontSize: '1rem' }}>{classroom.name}</Card.Title>
        <div className={styles.infoContainer}>
          <Row style={{ alignItems: 'center' }}>
            <Col md={12}>
              <CalendarIcon />
              <span className={styles.label}>{classroom.start_time}</span>
            </Col>
          </Row>
          <Row style={{ alignItems: 'center' }}>
            <Col md={6} style={{ alignItems: 'center' }}>
              <LevelIcon />
              <span className={styles.label}>{classroom.level}</span>
            </Col>
            <Col md={6}>
              <Button
                variant="danger"
                onClick={() => history.push(`/classrooms/${classroom.id}`)}
              >
                Register
              </Button>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
}

const styles = {
  infoContainer: css`
    text-align: left;
  `,
  img: css`
    height: 100px;
  `,
  label: css`
    margin-left: 6px;
  `,
};
