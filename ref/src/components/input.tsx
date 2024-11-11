import React, { RefObject } from 'react';

function Input({
  changeHandler,
  inputRef,
}: {
  changeHandler: (val: string) => void;
  inputRef: RefObject<HTMLInputElement>;
}) {
  return (
    <input
      type='text'
      name='username'
      ref={inputRef}
      onChange={(e) => changeHandler(e.target.value)}
    />
  );
}

export default Input;
