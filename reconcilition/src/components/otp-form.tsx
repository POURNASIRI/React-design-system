import { useState } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Span = styled.span`
  display: block;
  margin-bottom: 1rem;
  color: #555;
`;

const Button = styled.button<{ received: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.received ? '#4CAF50' : '#008CBA')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.received ? '#45a049' : '#007bb5')};
  }
`;
//! expalin this component issue: when we write email address input and accept checkbox input field value is not remove and its remain why this happen?                          ANSWER👇


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


//** answer:React will see this inputs in here whenevert the state is false like this object */

// before the re render
//* {
//* type:Input,
//* ...// rest of the stuff like id , placeholder
//*} 

//** when you click checkbox and change this state from false to true rect display second input and second object */

// after the re render
//* {
//* type:Input,
//* ...// rest of the stuff like id , placeholder
//*}

//* as you can see both types in here are the input which means for react that we are not going to unmount a new element or component, its just the same one, but we are going to just update it. so its going to keep whenever we are false, we have this object. its going to keep everything associated with it, including the text that we enter.