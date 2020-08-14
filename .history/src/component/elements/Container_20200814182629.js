import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { css, cx } from 'emotion';

import State from '../../constants/State';

export default function Common({
  children,
  state = State.FState.Loaded,
  style = {},
}) {
  const { FState } = State;

  function renderView() {
    switch (state) {
      case FState.loading:
        return (
          <Spinner
            className={styles.spinner}
            animation="grow"
            variant="danger"
          />
        );
      case FState.error:
        return <>Something when wrong</>;
      case FState.intital:
      case FState.loaded:
      default:
        return children;
    }
  }

  return (
    <Container className={cx(styles.container, style)}>
      {renderView()}
    </Container>
  );
}

const styles = {
  container: css`
    text-align: center;
    width: 100%;
  `,
  spinner: css`
    margin-top: 20px;
    margin-bottom: 20px;
  `,
};
