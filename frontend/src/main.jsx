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
    <header>
      <div className = "hTitle"><a href="/">Petrpedia</a></div>
      <a className = "headerEle" href="/new_template">
          <img className = "circle" src = "https://static.thenounproject.com/png/2729266-200.png" height = "40"></img>
      </a>
      <a className = "headerEle" href="/trade">
          <img className = "circle" src = "https://cdn.iconscout.com/icon/free/png-256/free-switch-1470433-1244947.png" height = "50"></img>
      </a>
      <a className = "headerEle" href="#login">
          <img className = "circle" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" height = "40"></img>
      </a>
      <input className = "headerEle" type="text" placeholder="Search.."></input>
    </header>
    <div className="whole_page">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
