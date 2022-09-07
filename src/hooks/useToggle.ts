import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [on, setOnState] = useState(initialState);

  const toggle = () => setOnState((on) => !on);
  const setOn = () => setOnState(true);
  const setOff = () => setOnState(false);

  return { toggle, setOn, setOff, on };
};

export default useToggle;
