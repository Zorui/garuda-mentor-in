import { useState, useEffect } from 'react';

import State from '../constants/State';

const { FState } = State;

export default function useAsyncFetch(
  fetcher,
  succCB = () => {},
  errCB = () => {},
) {
  const [fState, setFState] = useState(FState.loading);

  async function fetchApi() {
    try {
      const rsp = await fetcher();
      succCB(rsp);
      setTimeout(() => setFState(FState.initial), 3000);
    } catch (e) {
      errCB(e);
      setFState(FState.error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return [fState];
}
