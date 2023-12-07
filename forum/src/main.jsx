import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Layouts/Login/Login.jsx";
import Register from "./Layouts/Register/Register.jsx";
import Home from "./Pages/Home/Home.jsx";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";
import ArticleDetail from "./Pages/ArticleDetail/ArticleDetail.jsx";
import ErrorElement from "./Pages/ErrorPage/ErrorElement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'articledetails',
        element:<ArticleDetail></ArticleDetail>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement:<ErrorElement></ErrorElement>
  },
  {
    path: "/register",
    element: <Register></Register>,
    errorElement:<ErrorElement></ErrorElement>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
