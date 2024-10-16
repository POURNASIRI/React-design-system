// import { useCurrentUser } from "./useCurrentUser";

import { useUser } from "./useUser";

export const UserInfo = () => {
  const user = useUser("3");
  const { name, age, country, books } = user || {};
  console.log(user);
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
