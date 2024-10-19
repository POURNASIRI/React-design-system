// import { GreenButton, RedButton } from "./components/composition";
// import { Recursive } from "./components/recursive";

import { GreenButton, RedButton } from "./components/partial";


// !for recursive example
// const myNestedObject = {
//   key1: "value1",
//   key2: {
//     innerKey1: "innerValue1",
//     innerKey2: {
//       innerInnerKey1: "innerInnerValue1",
//       innerInnerKey2: "innerInnerValue2",
//     },
//   },
//   key3: "value3",
// };

function App() {
  return (
    <>
    {/* //!recursive design pattern */}
      {/* <Recursive data={myNestedObject} /> */}


      {/* //!composition component pattern */}
      {/* <RedButton text={"red button"} />
      <GreenButton text={"green button"} size={"small"}/> */}


      {/* //! partial component pattern */}
      <RedButton text={"RED Button"}/>
      <GreenButton text={"GRREN Button"}/>
    </>
  );
}

export default App;
 