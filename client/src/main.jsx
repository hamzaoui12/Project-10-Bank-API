import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@/styles/index.css";
import { store } from "@/utils/store";
import { Layout } from "@/components/layout/Layout.jsx";
import Home from "@/pages/home.jsx";
import { routes } from "@/routes.js";
import SignIn from "@/pages/sign-in";
import User from "./pages/user";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routes.signIn,
        element: <SignIn />,
      },
      {
        path: routes.user,
        element: <User />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
