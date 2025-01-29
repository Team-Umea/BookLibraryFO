import { Book } from "../../types/types";
import BookItem from "./BookItem";

interface Props {
  books: Book[];
}

function BookList({ books }: Props) {
  return (
    <ul className="grid grid-cols-[repeat(4,1fr)] gap-4">
      {books.map((book, index) => {
        return <BookItem key={index} book={book} />;
      })}
    </ul>
  );
}

export default BookList;
