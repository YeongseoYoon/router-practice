import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  Home,
  About,
  Author,
  BookDetail,
  BookChapter,
  BookCharacter,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "author/:name",
        element: <Author />,
        children: [
          {
            path: ":book",
            element: <BookDetail />,
            children: [
              { path: "chapters", element: <BookChapter /> },
              { path: "characters", element: <BookCharacter /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
