import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";
import "./main.css";
import MainPage from "./pages/MainPage";
const container = document.getElementById("root");
if (!container) throw new Error("Failed to find root element");
const root = ReactDOM.createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);
root.render(<RouterProvider router={router}></RouterProvider>);
