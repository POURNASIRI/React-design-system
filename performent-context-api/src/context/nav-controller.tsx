import { createContext, ReactNode, useContext, useState } from 'react';

const Context = createContext({
  collapsed: false,
  toggle: () => {},
});
export const useNav = () => useContext(Context);

const NavController = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);

  return (
    <Context.Provider value={{ collapsed, toggle }}>
      {children}
    </Context.Provider>
  );
};

export default NavController;
