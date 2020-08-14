import React from 'react';
import { css, cx } from 'emotion';
import { Container, Header } from '../elements';

const OurVision = () => {
  return (
    <>
      <Header title="Our Vision" />
      <Container>
        <div className={cx(styles.ov_container)}>
          <p className={cx(styles.hd_desc)}>
            Our vision is to empower the society by giving them a platform to
            learn any knowledges <br></br> they interested in from the expert.
            Let's bridge the gap between students and professionals.
          </p>
          <div className={cx(styles.ov_img_container_parent)}>
            <div className={cx(styles.ov_img_container)}>
              <div className={cx(styles.ov_img1)}></div>
              <h1 className={cx(styles.hd)}>Join a Community</h1>
              <p className={cx(styles.content_desc)}>
                Once you registered, we will invite you to join our exclusive
                slack channel where you will be able to network among the
                community, share your ideas and engage in likeminded
                conversations throughout the channels.
              </p>
            </div>
            <div className={cx(styles.ov_img_container)}>
              <div className={cx(styles.ov_img2)}></div>
              <h1 className={cx(styles.hd)}>Become a Mentor</h1>
              <p className={cx(styles.content_desc)}>
                Mentors exits to help guide people in finding answers needed to
                navigate challenges and progress. Mentor.in offers a platform
                that connects mentors and mentees seeking a path of personal
                growth and career advancements.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const styles = {
  ov_container: css`
    margin: 5rem 0 3rem 0;
    width: 100%;
    padding: 0 5% 0 5%;
  `,
  hd: css`
    text-align: center;
  `,
  hd_desc: css``,
  ov_img_container_parent: css`
    display: flex;
    width: 100%
    flex-direction: row;
    flex-wrap: wrap;
    margin: 3rem 0 0 0;
  `,
  ov_img1: css`
    width: 13rem;
    height: 13rem;
    background-image: url('/raw/community.svg');
    background-repeat: no-repeat;
    background-color: black;
    background-size: cover;
  `,
  ov_img2: css`
    width: 22rem;
    height: 13rem;
    background-image: url('/raw/mentor.svg');
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: contain;
  `,
  ov_img_container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem 0 2rem;
    flex: 1 1 40%;
  `,
  content_desc: css`
    text-align: center;
    font-size: 0.8rem;
  `,
};

export default OurVision;
