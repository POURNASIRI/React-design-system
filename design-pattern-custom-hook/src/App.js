// import { BookInfo } from "./components/book-info";
import { BookInfoWithDataSource } from "./components/book-info-with-data-source";
import { ShowDataFromLocalStorage } from "./components/show-data-from-localStorage";
import { UserInfoWithDataSource } from "./components/user-info-with-data-source";
// import { UserInfo } from "./components/user-info";

function App() {
  return (
    <>
    <BookInfoWithDataSource id={3}/>
    <UserInfoWithDataSource id={2}/>
    <ShowDataFromLocalStorage name="test"/>
    </>
  );
}

export default App;
