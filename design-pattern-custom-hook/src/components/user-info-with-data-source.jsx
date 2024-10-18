import { useCallback } from "react";
import { useDataSource } from "./data-source-hook";
import { fetchData } from "../lib/fetchData";


export const UserInfoWithDataSource = ({id}) => {
    const getData = useCallback(()=>fetchData(`/users/${id}`),[id])
  const user = useDataSource(getData)
  const { name, age, country, books } = user || {};

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
