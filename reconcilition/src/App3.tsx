import React, { useState } from 'react';
import Input from './components/input';

const data = [
  { id: 'teacher', placeholder: 'Teacher ID' },
  { id: 'student', placeholder: 'Student ID' },
];

const InputMemo = React.memo(Input);

// ! react key for dynamic data

// ! in initial step when we use static array then we checked checkbox  test state will be change but because that we can  use memo for our Input component so this input will not re-render

//! in step two we want test this code when we use dynamic data for this resun we use  this line of code const inputs = dataset ? [...data].reverse() : data; to create dynamic data

//! in step two when we checked checkbox you can see input component re-render This is while we have used memo for the input component but because we use index as key for this component when checkbox be checked  index of data will be reverse and this will cause the input component to re-render\

//**Solution: for fix this issue we must using unique key for component when we use dynamic data */

export default function App3() {
  //   const [test, setTest] = useState(false);
  const [dataset, setDataset] = useState(false);

  //Reorder the data for triggering a re-render on the App component
  const inputs = dataset ? [...data].reverse() : data;

  return (
    <>
      {/* //*for step one */}
      {/* <label>
        <input type='checkbox' onChange={() => setTest(!test)} />
        Check to re-order
      </label> */}

      {/* //*for step two */}
      <label>
        <input type='checkbox' onChange={() => setDataset(!dataset)} />
        Check to re-order
      </label>
      <br />
      {/* //*for step two and using static data */}
      {/* {inputs.map((val, index) => (
        <InputMemo placeholder={val.placeholder} key={index} />
      ))} */}
      {/* //*for  using dynamic data */}
      {inputs.map((val, index) => (
        <InputMemo placeholder={val.placeholder} key={val.id} />
      ))}
    </>
  );
}


//* Conclusion : When you want to pass key to a memorized list , you need to give it a key that is unique and not going to change for each item , even if you add a new item to the array