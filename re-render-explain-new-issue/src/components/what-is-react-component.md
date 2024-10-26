# React Component and Element

a component is essentially just a function, that this function is not just any function **it produce elemnts that react transforms into Dom elements to display on your screen.**
React components take the concept of React elements a step further. While a React element is a plain object describing a part of the UI, a React component is a function or a class that can produce React elements and manage their state and lifecycle. Components can return multiple elements, components, strings, numbers, or any other types React can render.
**elements can also represent simple Dom elements,not just components**

```js
function Greeting(props) {
  return <h1 className='greeting'>Hello, {props.name}!</h1>;
}

const element = <Greeting name='World' />;
```

In this example, **Greeting** is a function component that accepts props as input and returns a React element. The returned element is an h1 tag with a greeting message that includes the name provided via props. React will create the actual DOM elements on the screen when it renders this component.

### Note

If the object element before and after the re-render is the same, React will not re-render the component or its nested components. This comparison is done using the object equality function, which checks if the objects are the same. If true, React skips re-rendering; if false, it checks the type of the object. If the type remains the same, the component is re-rendered; if it changes, React removes the old component and mounts a new one.

When the parent component has state, React knows to re-render it upon state changes. It calls the parent function and compares the outputs before and after the state change. This results in a new object being created each time, leading to a false comparison for the child objects, which means the child will also re-render.

If the child component is passed as a prop instead of being directly rendered, the child definition object is created and passed as a prop. Upon state updates in the parent, React compares the returned objects. If the child object remains unchanged, the comparison returns true, prompting React to skip re-rendering those components.
