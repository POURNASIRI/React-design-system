import React from "react";

// Uncontrolled component:
/**
 * uncontrolled component going to be a kinde of element that or component
 * that is not going to be able leak any of its state  so we are not 
 * going to be able access this element using any kine of useState or hooks
 * we are going to access them using the actual DOM
 */
export const UncontrolledForm = () => {
  const nameInputRef = React.createRef();
  const ageInputRef = React.createRef();

  const SubmitForm = (e) => {
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);

    e.preventDefault();
  };

  return (
    <form onSubmit={SubmitForm}>
      <input name="name" type="text" placeholder="Name" ref={nameInputRef} />
      <input name="age" type="number" placeholder="Age" ref={ageInputRef} />
      <input type="submit" value="Submit" />
    </form>
  );
};
