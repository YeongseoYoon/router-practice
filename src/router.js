import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import About from "./screens/About";
import AuthorDetailPage from "./screens/AuthorDetailPage";
import BookDetailPage from "./screens/BookDetailPage";
import BookChaptersPage from "./screens/BookChaptersPage";
import BookCharactersPage from "./screens/BookCharactersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "author/:name",
        element: <AuthorDetailPage />,
        children: [
          {
            path: ":book",
            element: <BookDetailPage />,
            children: [
              { path: "chapters", element: <BookChaptersPage /> },
              { path: "characters", element: <BookCharactersPage /> }
            ]
          }
        ]
      }
    ]
  }
]);

export default router;
