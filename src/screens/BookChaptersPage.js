import { useParams } from "react-router-dom";
import { authors } from "../db";

function BookDetailPage() {
  const { name, book } = useParams();
  const author = authors.find((author) => author.name === name);

  const selectedBook = author.books.find((b) => b.title === book);

  return (
    <div>
      <h1>Chapters</h1>
      <ul>
        {selectedBook.chapters.map((chapter, index) => (
          <li key={`${author.id}-${chapter[index]}`}>{chapter}</li>
        ))}
      </ul>
    </div>
  );
}
export default BookDetailPage;
