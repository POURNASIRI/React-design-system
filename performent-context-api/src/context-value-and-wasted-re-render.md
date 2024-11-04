## Context Value and Wasted Re-Render

- Our project App folder

```jsx
export default function App() {
  return (
    <NavController>
      <Container>
        <Sidebar />
        <Main />
      </Container>
    </NavController>
  );
}
```

- NavController component

```jsx
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
```

### Question:

- what happens that if this nav controller dose re-render?

### Answer:

- So when a component re-render like this nav controller, everything inside of it, like values and the functions and etc, **are going to be recreated in the new re-render.** also the children are going to be re-rendered. so this can be considered as an issue. for example, if this app component contains any state that will trigger a render of this nav controller, **then all the consumers of this context inside this nav controller like this box is going to be re-rendered.**
- **So that is considered as wasted re-render.**

- **The solution to this problem .**

- Page component

```jsx
import { ReactNode } from 'react';
import NavController from '../context/nav-controller';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <NavController>
      <Container>{children}</Container>
    </NavController>
  );
};

export default Page;
```

- App component

```jsx
export default function App() {
  return (
    <Page>
      <Sidebar />
      <Main />
    </Page>
  );
}
```

- That when you pass components as props, one way is via this children here,because your are not actually rendering or defining them inside this component,we are just passing a refrence of the object of these elements as the children props. So whenever the Page dose re-render, the references will not change. so the sidebar and main components are not going to be re-rendered.

## Another issue

- Imagine that the page component is re-rendered for any reason, for example, we use a logic inside that re-renders this component every few seconds, in this case the components inside the page are also re-rendered and this causes the values ​​in the nav component to change. so and all the components that use this context value are rerendered, to solve this problem and remove this wast rendering, we can use useCallback and useMemo.

```jsx
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

- So this object is not going to be recreated on every re-render of this nav controller.
