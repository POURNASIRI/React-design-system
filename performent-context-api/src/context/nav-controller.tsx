import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const Context = createContext({
  collapsed: false,
  toggle: () => {},
});
export const useNav = () => useContext(Context);

const NavController = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = useCallback(() => setCollapsed(!collapsed), [collapsed]);

  const value = useMemo(() => ({ collapsed, toggle }), [collapsed, toggle]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default NavController;
