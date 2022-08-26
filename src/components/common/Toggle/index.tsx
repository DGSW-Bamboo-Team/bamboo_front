import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import useEffectAfterMount from '~/hooks/useEffectAfterMount';

interface ToggleProps {
  onToggle?: (on: boolean) => void;
  children: React.ReactNode;
}

interface ToggleContextType {
  on: boolean;
  toggle: () => void;
}

const noop = () => null;
const ToggleContext = createContext<ToggleContextType>({
  on: false,
  toggle: noop,
});

const Toggle = ({ onToggle, children }: ToggleProps) => {
  const [on, setOn] = useState(false);
  const toggle = useCallback(() => {
    setOn((oldOn) => !oldOn);
  }, []);
  const value: ToggleContextType = useMemo(() => ({ on, toggle }), [on, toggle]);

  useEffectAfterMount(() => {
    if (onToggle) onToggle(on);
  }, [on]);

  return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>;
};

const useToggleContext = (): ToggleContextType => {
  const contextValue = useContext(ToggleContext);
  if (!contextValue) throw new Error(`Toggle컴포넌트를 감싸주세요.`);
  return contextValue;
};

const On = ({ children }: { children: React.ReactNode }) => {
  const { on } = useToggleContext();
  return on ? <>{children}</> : null;
};

const Off = ({ children }: { children: React.ReactNode }) => {
  const { on } = useToggleContext();
  return on ? null : <>{children}</>;
};

const Trigger = () => {
  const { on, toggle } = useToggleContext();
  return <button onClick={toggle}>Toggle to {on ? 'off' : 'on'}</button>;
};

Toggle.On = On;
Toggle.Off = Off;
Toggle.Trigger = Trigger;

export default Toggle;
