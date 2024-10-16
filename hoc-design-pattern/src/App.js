
//for basic example
// import { logProps } from "./components/check-props";
// import {UserInfo} from "./components/user-info";


// const UserInfoWrapper = logProps(UserInfo)

// function App() {
  //   return (
//     <>
//       <UserInfoWrapper test={'test'} message={'hoc design pattern'} part={2}/>
//     </>
//   );
// }

// export default App;




// import {UserInfo} from "./components/user-info";
// import { hocFetchingData, } from "./components/hoc-fetching-data";


// const UserInfoWithUser = hocFetchingData(UserInfo, 2)

// function App() {
//   return (
//     <>
//       <UserInfoWithUser/>
//     </>
//   );
// }

import { ResourceForm } from "./components/resource-form";
// import {UserForm} from "./components/user-form";

function App() {
  return (
    <>
      {/* <UserForm/> */}
      <ResourceForm/>
    </>
  );
}
export default App;