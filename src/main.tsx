import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";
import "./main.css";
import MainPage from "./pages/main/MainPage";
import PlaceListPage from "./pages/place/PlaceListPage";
import Layout from "./components/Layout";
import "./styles/global.css";
import PlaceDetailPage from "./pages/place/PlaceDetailPage";
import CreateBookingPage from "./pages/booking/CreateBookingPage";
import LoginPage from "./pages/login/LoginPage";
import JoinPage from "./pages/join/JoinPage";
import JoinCeoPage from "./pages/join/JoinCeoPage";
import JoinUserPage from "./pages/join/JoinUserPage";
import MyPage from "./pages/my/MyPage";

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
        path: "/place/list",
        element: <PlaceListPage />,
      },
      {
        path: "/place/:id",
        element: <PlaceDetailPage />,
      },
      {
        path: "/booking/:bookingId/create",
        element: <CreateBookingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/join",
        element: <JoinPage />,
      },
      {
        path: "/join/ceo",
        element: <JoinCeoPage />,
      },
      {
        path: "/join/user",
        element: <JoinUserPage />,
      },
      {
        path: "/my",
        element: <MyPage />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router}></RouterProvider>);
