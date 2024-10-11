import { logProps } from "./components/check-props";
import {UserInfo} from "./components/user-info";

const UserInfoWrapper = logProps(UserInfo)

function App() {
  return (
    <>
      <UserInfoWrapper test={'test'} message={'hoc design pattern'} part={2}/>
    </>
  );
}

export default App;
