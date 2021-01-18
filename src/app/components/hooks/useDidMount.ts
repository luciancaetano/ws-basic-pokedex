import { useEffect, useCallback, useRef } from 'react';

export const useDidMount = (handler: () => void) => {
  const handlerRef = useRef<(() => void) | null>(handler);

  const setOnMountHandler = useCallback((nextCallback) => {
    handlerRef.current = nextCallback;
  }, []);

  useEffect(() => {
    if (handlerRef.current) {
      handlerRef.current();
    }
  }, []);

  return setOnMountHandler;
};

export default useDidMount;
