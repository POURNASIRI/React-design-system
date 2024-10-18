import { BookInfo } from "./components/book-info";
import { UserInfo } from "./components/user-info";

function App() {
  return (
    <>
      <UserInfo id={1} />
      <BookInfo id={3}/>
    </>
  );
}

export default App;
