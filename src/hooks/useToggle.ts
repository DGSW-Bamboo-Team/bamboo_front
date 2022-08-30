import { useState } from 'react';

const useToggle = () => {
  const [on, setOnState] = useState(false);

  const toggle = () => setOnState((on) => !on);
  const setOn = () => setOnState(true);
  const setOff = () => setOnState(false);

  return { toggle, setOn, setOff, on };
};

export default useToggle;
