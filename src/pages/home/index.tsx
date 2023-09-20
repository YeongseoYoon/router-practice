import { Link } from "react-router-dom";

import { authors } from "../../../db";

const Home = () => {
  return (
    <>
      <h1>Best Seller Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={`${author.id}`}>
            <Link to={`/author/${author.name}`}>
              {author.name.replace("_", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
