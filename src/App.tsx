import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Body from "./Body";
import About from "./components/About";
import Resume from "./components/Resume";
import BlogsPage from "./components/BlogsPage";
import CraftsPage from "./components/CraftsPage";

const Blogs = lazy(() => import("./components/Blogs"));
const Crafts = lazy(() => import("./components/Crafts"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/blogs",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/blogs/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogsPage />
          </Suspense>
        ),
      },
      {
        path: "/crafts",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Crafts />
          </Suspense>
        ),
      },
      {
        path: "/crafts/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CraftsPage />
          </Suspense>
        ),
      },
      {
        path: "/resume",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Resume/>
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
