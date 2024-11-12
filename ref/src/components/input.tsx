import React, { ForwardedRef, forwardRef } from 'react';

type Props = {
  changeHandler: (value: string) => void;
};

function Input(props: Props, ref: ForwardedRef<HTMLInputElement>) {
  const { changeHandler } = props;
  return (
    <input
      type='text'
      name='username'
      ref={ref}
      onChange={(e) => changeHandler(e.target.value)}
    />
  );
}

export default forwardRef(Input);
