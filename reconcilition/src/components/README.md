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
