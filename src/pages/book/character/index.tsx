import { useParams } from "react-router-dom";
import { authors } from "../../../../db";

const BookCharacter = () => {
  const { name, book } = useParams();
  const author = authors.find((author) => author.name === name);

  const selectedBook = author?.books.find((b) => b.title === book);

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {selectedBook?.characters.map((character) => (
          <li key={`${author?.id}-${name}`}>{character}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookCharacter;
