import React from "react";
import ReactDOM from "react-dom/client";

// Pages
import Home from "./pages/home";
import ErrorPage from "./pages/error-page";
import User from "./pages/user";
import NewTemplate from "./pages/new_template";
import DropperPage from "./pages/dropper";
import TradingPage from "./pages/trade"
import NewUser from "./pages/new_user";
import Template from "./pages/template";
import NewDrop from "./pages/new_drop";
import NewSticker from "./pages/new_sticker";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "user/:userId",
    element: <User/>
  },
  {
    path: "new_template",
    element: <NewTemplate />
  },
  {
    path: "creator/:dropperName",
    element: <DropperPage />
  },
  {
    path: "trade",
    element: <TradingPage></TradingPage>
  },
  {
    path: "new_user",
    element: <NewUser />
  },
  {
    path: "design/:templateId",
    element: <Template></Template>
  },
  {
    path: "new_drop",
    element: <NewDrop />
  },
  {
    path: "new_sticker",
    element: <NewSticker />
  }
]);

/*
This code renders our project so it can be viewed in a browser. 
*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
