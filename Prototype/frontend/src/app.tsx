import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HomePage } from "./pages/home-page";
import { TestPage } from "./pages/test-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/teste",
    element: <TestPage />,
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
