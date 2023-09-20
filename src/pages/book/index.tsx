import { Link, Outlet, useParams } from "react-router-dom";
import { authors } from "../../../db";

const BookDetail = () => {
  const { name, book } = useParams();
  const author = authors.find((author) => author.name === name);

  const selectedBook = author?.books.find((b) => b.title === book);

  return (
    <div>
      <h1>{selectedBook?.title.replace("_", " ")}</h1>
      <ul>
        <li>
          <Link to={`/author/${name}/${selectedBook?.title}/chapters`}>
            Chapters
          </Link>
        </li>
        <li>
          <Link to={`/author/${name}/${selectedBook?.title}/characters`}>
            Characters
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default BookDetail;
