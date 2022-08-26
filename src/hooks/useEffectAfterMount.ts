import { useCallback, useEffect, useRef } from 'react';

const useEffectAfterMount = (cb: () => void, deps?: React.DependencyList) => {
  const hasMounted = useRef(false);
  const memorizedCallback = useCallback(cb, [cb]);

  useEffect(() => {
    if (hasMounted.current) memorizedCallback();
    else hasMounted.current = true;
  }, [deps, memorizedCallback]);
};

export default useEffectAfterMount;
