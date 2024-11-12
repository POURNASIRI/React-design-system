import { ChangeEvent, useRef, useState } from 'react';
import Input from './input';

const Form2 = () => {
  const [username, setUsername] = useState('');
  const [, setPassword] = useState('');

  const ref = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const submit = () => {
    if (username.length < 1) {
      //focus on the username input
      ref.current?.focus();
    } else {
      //submit data to server
    }
  };

  return (
    <>
      <Input changeHandler={setUsername} ref={ref} />
      <input type='password' name='password' onChange={changeHandler} />
      <button onClick={submit}>submit</button>
    </>
  );
};
export default Form2;
