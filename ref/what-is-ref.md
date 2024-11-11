## What is Ref?

- Well a Ref in react is just a muttable object that is maintained cross Re-Renders. to create a Ref we use the `useRef` hook and provide an initial value. This initial value is accessible through the `ref.current` property.However, whatever we assign to the ref is stored there.The initial value is retained,so comparing `ref.current` across re-renders will show that the refrence remain constant, much like using the `useMemo` hook on that object.
- Once we have create a ref, we can assign anything to it,whether in `UseEffect` or within just event handlers.

## What if we use ref insted of state in component ?

### Fist and main difference between state and ref :

- ref dose not trigger re-renders, for example :

```jsx
import { ChangeEvent, useRef, useState } from 'react';

const Form = () => {
  // const [value, setValue] = useState("");
  const ref = useRef('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    ref.current = e.target.value;
  };

  const submit = () => {
    //send some data to backend server
    console.log(ref.current);
  };
  return (
    <>
      <input type='text' onChange={changeHandler} />
      <button onClick={submit}>submit</button>
    </>
  );
};
export default Form;
```

well as in the states in here, in whenever you call this set value inside the change handler, when start typing, its going to re-render this form. But in the case of ref this dose not happen. because ref is maintained a value, the `ref.current` between re-renders but itself whenever you update the `ref.current`, this update is not going to trigger a re-render on the form.

## Second dfference between Ref and State :

ref is that updates synchronously, but state updates technically asynchronously.

```jsx
import { ChangeEvent, useRef, useState } from 'react';

const Form = () => {
  const [value, setValue] = useState('');
  const ref = useRef('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('befor', value);
    // ref.current = e.target.value;
    setValue(e.target.value);
    console.log('after', value);
  };

  const submit = () => {
    console.log(ref.current);
  };
  return (
    <>
      <input type='text' onChange={changeHandler} />
      <button onClick={submit}>submit</button>
    </>
  );
};
export default Form;
```

In the above code we have this value which is a stateful state. and here we have this ref. If you type a character like a and press,you see before and after, both of them are displaying nothing, the initiual value of this is empyt string. so what happens here? when you say set value or set state, you are not updating an object directly.All you do is telling react that hey, i have a state and i have a new value for that state.i want to schedule a new task for updating the state with a new value.When you sey set value, the value is the same,Its not changed immediatly because set value or set state generaly is, asynchronouse.Its not the same async that we know, but technically you can think of it as an axync task.

- so what happens in case of we want to update the ref?

```jsx
import { ChangeEvent, useRef, useState } from 'react';

const Form = () => {
  const [value, setValue] = useState('');
  const ref = useRef('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('befor', ref.current);
    ref.current = e.target.value;
    setValue(e.target.value);
    console.log('after', ref.current);
  };

  const submit = () => {
    console.log(ref.current);
  };
  return (
    <>
      <input type='text' onChange={changeHandler} />
      <button onClick={submit}>submit</button>
    </>
  );
};
export default Form;
```


In the above code if we type a again . as you can see now we arw loggin the `ref.current` new value and initial value, So this means that `ref.current` because technically we are just updating a object, So its synchronouse.
