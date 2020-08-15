import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import { css, cx } from 'emotion';
import { useHistory } from 'react-router-dom';

export default function JumbotronCustom() {
  const history = useHistory();

  return (
    <Jumbotron fluid className={cx(styles.jumbotron)}>
      <Container style={{position: "relative", top:"120px"}}>
        <h1 className={cx(styles.hdFont)}>Get Inspired!</h1>
        <p className={cx(styles.smFont)}>
          Discover your passion while learning anything directly from your
          mentors.
        </p>
        <Button className={cx(styles.jmButton)} variant="outline-danger"  onClick={() => history.push('/classrooms')}>
          Explore Classes
        </Button>
      </Container>
    </Jumbotron>
  );
}

const styles = {
  jumbotron: css`
    background-image: url('/raw/banner.jpg');
    background-repeat: no-repeat;
    background-color: lightgray;
    background-size: cover;
    min-height: 24rem;
    max-height: 24rem;
  `,
  jmButton: css`
    min-height: 3.3rem;
    border-radius: 14px;
    border: 3px solid #c85051 !important;
    font-size: 1.2rem !important;
    font-weight: bold !important;
    background-color: transparent;
    color: #c85051 !important;
    &:hover {
      color: white !important;
      background-color: #c85051 !important;
      border-color: #c85051 !important;
      box-shadow: 0 0 15px #c85051 !important;
    }
    &:focus {
      color: white !important;
      background-color: #c85051 !important;
      border-color: #c85051 !important;
      box-shadow: 0 0 25px rgba(255, 39, 71, 0.7) !important;
    }
  `,
  smFont: css`
    color: white;
    font-size: 1rem;
  `,
  hdFont: css`
    color: white;
  `,
};
