```jsx
const OTP = () => {
  const [received, setReceived] = useState(false);
  return (
    <>
      <CheckboxWrapper>
        <Checkbox id='otp-checkbox' onChange={() => setReceived(!received)} />
        <label htmlFor='otp-checkbox'>I received the OTP</label>
      </CheckboxWrapper>

      {received ? (
        <Input id='otp-code' placeholder='Enter the otp code here' />
      ) : (
        <Input id='otp-code' placeholder='Enter your Email address here' />
      )}
      <Button received={received}>
        {received ? 'Submit OTP' : 'Send me OTP'}
      </Button>
    </>
  );
};

export default OTP;
```

**on every re-render of OTP component, React will see the follwing array**

```jsx
[
  {
    type: CheckboxWrapper,
  },
  {
    type: Input,
  },
];
```

- First element is type - before update : CheckboxWrapper
- First element is type - after update : CheckboxWrapper
- **No change in type for first element so re-use and re render it**

- second element is type - before update : Input
- second element is type - after update : Input
- **No change in type for second element so re-use and re render it**

## Solution

```jsx
{
  !received ? (
    <Input id='otp-code' placeholder='Enter the otp code here' />
  ) : null;
}
{
  received ? (
    <Input id='otp-code' placeholder='Enter the otp code here' />
  ) : null;
}
```

**on every re-render of OTP component, React will see the follwing arrays base on the condition changing from true to false**

- Before - received=false :[{type:CheckboxWrapper},null,{type:Input}]
- After - received=true :[{type:CheckboxWrapper},{type:Input},null]

- **React start checking the array of returned elements :**
- First element type - before & after : CheckboxWrapper re-render
- second element type - before : null & after : Input -> type change -> mount input ✔
- third element type - before : input & after : null -> type change -> unmount input ❌

## Using Key to solve this issue

```jsx
const OTP = () => {
  const [received, setReceived] = useState(false);
  return (
    <>
      <CheckboxWrapper>
        <Checkbox id='otp-checkbox' onChange={() => setReceived(!received)} />
        <label htmlFor='otp-checkbox'>I received the OTP</label>
      </CheckboxWrapper>

      {received ? (
        <Input id='otp-code' placeholder='Enter the otp code here' />
      ) : (
        <Input id='otp-code' placeholder='Enter your Email address here' />
      )}
      <Button received={received}>
        {received ? 'Submit OTP' : 'Send me OTP'}
      </Button>
    </>
  );
};

export default OTP;
```

Imagine the code above if we write something in the email input while clicking the checkbox and change the input, you can see that the text remains and is not deleted in the input field. The above explains why this happens and also explains how to fix this problem. But below you can see another way to solve this problem using the key.

```jsx
{
  received ? (
    <Input
      id='otp-code'
      placeholder='Enter the otp code here'
      key='otp-input'
    />
  ) : (
    <Input
      id='otp-code'
      placeholder='Enter your Email address here'
      key='email-input'
    />
  );
}
```

```js
without key
before and after re-render
[
  {type: CheckboxWrapper}
  {type: Input}
]

with key
before re-render
[
  {type: CheckboxWrapper}
  {type: Input, key: 'email-input'}
]

after re-render
[
  {type: CheckboxWrapper}
  {type: Input, key: 'otp-input'}
]
```


### Note: 
- So in case you have a heavy large component, you should be careful using this state reset technique.because mounting and unmounting a heavy components is can effect the performance of your aplication. but for small components it is ok to use this technique.
