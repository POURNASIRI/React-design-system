// import { useState } from "react";
// import { ControlledModal } from "./components/controlled-modal";
// import { UncontrolledModal } from "./components/uncontrolled-modal";
import { UncontrolledFlow } from "./components/uncontrolled-flow";


const StepOne = ({ next }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => next({ name: "TestName" })}>Next</button>
    </>
  );
};
const StepTwo = ({ next }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => next({ age: 23 })}>Next</button>
    </>
  );
};
const StepThree = ({ next }) => {
  return (
    <>
      <h1>Step #3: Enter your country</h1>
      <button onClick={() => next({ country: "Poland" })}>Next</button>
    </>
  );
};




function App() {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>

    {/* Uncontrolled component */}
      {/* we said uncontrolled because we are not going to be able to access its
      features directly we cannot defined any button to show or hide the modal
      */}
        {/* <UncontrolledModal></UncontrolledModal> */}
    {/* Uncontrolled component */}


    {/* Controlled component */}
        {/* we said controlled because we are going to be able to access its features directly from parents our any components  */}
      {/* <button onClick={() => setShowModal(!showModal)}>
        {" "}
        {showModal ? "Hide Modal" : "Show Modal"}{" "}
      </button>
      <ControlledModal shouldShow={showModal} close={() => setShowModal(false)}>
        <h1>I am the body of the modal!</h1>
      </ControlledModal> */}
    {/* Controlled component */}

      {/* Uncontrolled Flow */}
        {/* uncontrolled flow because we are not going to be able to access its features directly  and our accessability is very littel */}
    <UncontrolledFlow onDone={(data) => {
      console.log(data);
      alert("Onboarding Flow Done!");
    }}>
        <StepOne/>
        <StepTwo/>
        <StepThree/>
    </UncontrolledFlow>
    </>
  );
}

export default App;
