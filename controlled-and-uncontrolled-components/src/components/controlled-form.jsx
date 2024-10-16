import { useEffect } from "react";
import { useState } from "react";

/**
 * A controlled components are components that nwe can store their 
 * values inside the state and use them in diffrent place or for diffrent tasks
 * such as validation of form inputs
 */
export const ControlledForm = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();


  useEffect(() => {
    if (name.length < 1) {
      setError("The name can not be empty");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
