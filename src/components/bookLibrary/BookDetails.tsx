import { Book } from "../../types/types";

interface Props {
  book: Book;
}

function BookDetails({ book }: Props) {
  const bookColor = book.color;

  const bookArray = Object.values(book); //[]

  return (
    <ul style={{ backgroundColor: bookColor }} className="flex flex-col items-center">
      {bookArray.map((bookProperty, index) => {
        return <li key={index}>{bookProperty}</li>;
      })}
    </ul>
  );
}

export default BookDetails;
