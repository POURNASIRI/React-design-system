
import { useDataSource } from "./data-source-hook";
import { useCallback } from "react";
import { fetchData } from "../lib/fetchData";

export const BookInfoWithDataSource = ({id}) => {

  const getData = useCallback(() => fetchData(`/books/${id}`), [id]);
  const book  = useDataSource(getData)
  const { name, price, title, pages } = book || {};

  return book ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </>
  ) : (
    <h1>Loading</h1>
  );
};
