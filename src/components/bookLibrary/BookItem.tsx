import { useNavigate } from "react-router";
import { Book } from "../../types/types";

interface Props {
  book: Book;
}

function BookItem({ book }: Props) {
  const navigate = useNavigate();
  const bookColor = book.color;

  const viewDetails = () => {
    const bookData = encodeURIComponent(JSON.stringify(book));
    navigate(`/details/:${book.id}?data=${bookData}`);
  };

  return (
    <li onClick={viewDetails} style={{ backgroundColor: bookColor }} className="cursor-pointer">
      <h3 className="text-2xl font-semibold">{book.title}</h3>
      <p>{book.author}</p>
    </li>
  );
}

export default BookItem;
