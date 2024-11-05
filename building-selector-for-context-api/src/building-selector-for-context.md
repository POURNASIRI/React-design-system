## Building Selector for Context API

- Imagin if a component like this close button is consuming only one value from the context provider,the close it was rendering because the state or another part of the context value does change,

```jsx
export const CloseButton = () => {
  const { close } = useNav();
  console.log('close button - rendered');
  return <ToggleButton onClick={close}>close sidebar</ToggleButton>;
};

export default Button;
```

so as you can see the close nav is bing re-rendered unnessessarily every time.

- So why did i cleand up the split and reducer ?
- Because sometimes in your code bases,in your react application,ypu are totally fin with what you have.something like this:

```jsx
import React, { useCallback, useContext, useMemo, useState } from 'react';

const Context = React.createContext({
  collapsed: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
});

export const useNav = () => useContext(Context);

const NavController = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = useCallback(() => setCollapsed(!collapsed), [collapsed]);
  const open = useCallback(() => setCollapsed(false), []);
  const close = useCallback(() => setCollapsed(true), []);

  const value = useMemo(() => {
    return { collapsed, open, close, toggle };
  }, [collapsed, open, close, toggle]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default NavController;
```

but you have only one part in your application, one component that is performance sensitive. So how can make sure that this subscribe of our context that only uses this close from the context.does not re-render and only should re-render if the close or the value that it consumes changes.
whats the solution ?

- as you know, in third part state managment like Reddux, we have somthing that we call it the **Selector** the selector would allow you in those libraries that you as the name suggests, select only one part of the state.

### How we can build such a selector functinality ? 


