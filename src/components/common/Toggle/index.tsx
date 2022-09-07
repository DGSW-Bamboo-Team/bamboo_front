import React, { cloneElement, createContext, useContext, useMemo } from 'react';
import useEffectAfterMount from '~/hooks/useEffectAfterMount';
import useToggle from '~/hooks/useToggle';

interface ToggleProps {
  onToggle?: (on: boolean) => void;
  children: React.ReactNode;
  initialValue?: boolean;
}

interface ToggleContextType {
  on: boolean;
  toggle: () => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

const Toggle = ({ initialValue = false, onToggle, children }: ToggleProps) => {
  const { on, toggle } = useToggle(initialValue);
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

interface TriggerProps {
  as: JSX.Element;
}

const Trigger = ({ as }: TriggerProps) => {
  return <>{cloneElement(as)}</>;
};

Toggle.On = On;
Toggle.Off = Off;
Toggle.Trigger = Trigger;

export default Toggle;
