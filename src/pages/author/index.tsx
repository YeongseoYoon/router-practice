import { Link, Outlet, useParams } from "react-router-dom";
import { authors } from "../../../db";

const Author = () => {
  const { name } = useParams();
  const author = authors.find((author) => author.name === name);
  return (
    <div>
      <h1>{name?.replace("_", " ")}</h1>
      <ul>
        {author?.books.map((book) => (
          <li key={`${author.id}-${book.title}`}>
            <Link to={`/author/${name}/${book.title}`}>
              {book.title.replace("_", " ")}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Author;
