import { useParams } from "react-router-dom";
import { authors } from "../db";

function BookCharactersPage() {
  const { name, book } = useParams();
  const author = authors.find((author) => author.name === name);

  const selectedBook = author.books.find((b) => b.title === book);

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {selectedBook.characters.map((charcter, index) => (
          <li key={`${author.id}-${charcter[index]}`}>{charcter}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookCharactersPage;
