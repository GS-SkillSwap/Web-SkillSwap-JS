import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home.jsx";
import NetworkPage from "../pages/NetworkPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  },
]);
