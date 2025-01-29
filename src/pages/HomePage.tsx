import { useEffect, useState } from "react";
import { ApiStatus, Book } from "../types/types";
import useFetch from "../hooks/useFetch";
import { API_ENDPOINTS } from "../constants/constants";
import BookList from "../components/bookLibrary/BookList";
import { GridLoader } from "react-spinners";

export default function HomePage() {
  const [apiStatus, setApiStatus] = useState<ApiStatus>("idle");
  const { callApi } = useFetch(API_ENDPOINTS.BOOKS, setApiStatus);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await callApi();
      if (response) {
        console.log(response);

        setBooks(response.data);
      }
    };

    getBooks();
  }, []);

  if (apiStatus === "pending") {
    return <GridLoader size={50} color="white" />;
  }

  return (
    <div>
      <h1>Home page</h1>
      <BookList books={books} />
    </div>
  );
}
