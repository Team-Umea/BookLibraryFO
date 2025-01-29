import BookDetails from "../components/bookLibrary/BookDetails";
import { Book } from "../types/types";

export default function DetailsPage() {
  const query = new URLSearchParams(window.location.search);
  const bookData = query.get("data") || "";

  const book: Book = JSON.parse(decodeURIComponent(bookData));

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
}
