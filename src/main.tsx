import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";
import "./main.css";
import MainPage from "./pages/main/MainPage";
import Places from "./pages/Places";
import PlaceListPage from "./pages/place/PlaceListPage";
import Layout from "./components/Layout";
import "./styles/global.css";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find root element");

const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/places",
        element: <Places />,
      },
      {
        path: "/place/list",
        element: <PlaceListPage />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router}></RouterProvider>);
