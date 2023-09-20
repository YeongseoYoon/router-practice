import { useParams } from "react-router-dom";
import { authors } from "../../../../db";

const BookChapter = () => {
  const { name, book } = useParams();
  const author = authors.find((author) => author.name === name);

  const selectedBook = author?.books.find((b) => b.title === book);

  return (
    <div>
      <h1>Chapters</h1>
      <ul>
        {selectedBook?.chapters.map((chapter) => (
          <li key={`${author?.id}-${name}`}>{chapter}</li>
        ))}
      </ul>
    </div>
  );
};
export default BookChapter;
