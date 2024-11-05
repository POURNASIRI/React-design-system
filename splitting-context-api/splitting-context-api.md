## Splitting Context API

```jsx
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
```

So in our nav controller in here, we already mentioned one fact is that whenever a part of the value dose change, for example, this collapse does change all the consumers and subscribers to this context API all going to be re- rendered, even if they are not going to consume that part of the value thai is change. but what we can do? so we can use **Splitting Context API**

- so for the very,basic split that we can have in a context is that we can have two context, one for the data state and another one for the functions.

-blow is the code of our nav controller with split context api:

```jsx
import React, { useCallback, useContext, useMemo, useState } from 'react';

const ContextData = React.createContext({
  collapsed: false,
});

const ContextApi = React.createContext({
  open: () => {},
  close: () => {},
});

export const useNavData = () => useContext(ContextData);
export const useNavApi = () => useContext(ContextApi);

const NavController = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const open = useCallback(() => {
    setCollapsed(false);
  }, []);
  const close = useCallback(() => {
    setCollapsed(true);
  }, []);

  const data = useMemo(() => {
    return { collapsed };
  }, [collapsed]);

  const api = useMemo(() => {
    return { open, close };
  }, [open, close]);

  return (
    <ContextData.Provider value={data}>
      <ContextApi.Provider value={api}>{children}</ContextApi.Provider>
    </ContextData.Provider>
  );
};

export default NavController;
```

with this work we can perevent to waste re-render
