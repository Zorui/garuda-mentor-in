import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import { css, cx } from 'emotion';
import { useHistory } from 'react-router-dom';

export default function JumbotronHome() {
  const history = useHistory();

  return (
    <Jumbotron fluid className={cx(styles.jumbotronHome)}>
      <Container style={{ position: 'relative', top: '120px' }}>
        <h1 className={cx(styles.hdFont)}>Get Inspired!</h1>
        <p className={cx(styles.smFont)}>
          Discover your passion while learning anything directly from your
          mentors.
        </p>
        <Button
          className={cx(styles.jmButton)}
          variant="outline-danger"
          onClick={() => history.push('/classrooms')}
        >
          Explore Classes
        </Button>
      </Container>
    </Jumbotron>
  );
}

export function JumbotronClassDetail({ mentorName, className, classCat }) {
  return (
    <Jumbotron fluid className={styles.jumbotronClass}>
      <div className={styles.classDetailContainer}>
        <div className={styles.details}>
          <p className={styles.mentorP}>{mentorName} teaches</p>
          <p className={styles.titleP}>{className} Intro Class Machine Learning Program ProgrammmMMMMMMMMMMMMMM</p>
          <p className={styles.cat}>{classCat}Technology</p>
        </div>
        <div className={styles.classImg}>
          <div className={styles.img}></div>
        </div>
      </div>
    </Jumbotron>
  );
}

const styles = {
  img: css`
    width: 260px;
    height: 310px;
    margin: 0 10% 0 auto;
    background-color: gray;
  `,
  classDetailContainer: css`
    display: flex;
    width: 100%;
    padding: 0 5% 0 5%;
    margin: 0;
  `,
  details: css`
    padding: 4rem 0 0 0;
    min-width: 50%;
    flex: 1 1 60%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
  `,
  mentorP: css`
    font-weight: light;
    font-size: 1.8rem;
    margin: 0 0 0.3rem 0;
    color: white;
  `,
  cat: css`
    background-color: gray;
    padding: 0.3rem;
    font-size: 1rem;
    color: white;
    border-radius: 6px;
    max-height: 2.4rem;
    text-align: center;
    max-width: 8rem;
    margin: 0;
  `,
  titleP: css`
    text-transform: uppercase;
    font-size: 2.3rem;
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    color: white;
  `,
  classImg: css`
    height: 310px;
    flex: 1 0 40%;
  `,
  jumbotronClass: css`
    background-color: rgba(0,0,0,0.8) !important;
    min-height: 26rem;
    max-height: 26rem;
  `,
  jumbotronHome: css`
    background-image: url('/raw/banner.jpg');
    background-repeat: no-repeat;
    background-color: lightgray;
    background-size: cover;
    min-height: 26rem;
    max-height: 26rem;
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
