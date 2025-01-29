import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";
import NotFound from "../pages/NotFound";
import AddBookPage from "../pages/AddBookPage";
import DefaultLayout from "../layout/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    ),
  },
  {
    path: "/details/:bookId",
    element: (
      <DefaultLayout>
        <DetailsPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/addbook",
    element: (
      <DefaultLayout>
        <AddBookPage />
      </DefaultLayout>
    ),
  },
  {
    path: "*",
    element: (
      <DefaultLayout>
        <NotFound />
      </DefaultLayout>
    ),
  },
]);

export default router;
