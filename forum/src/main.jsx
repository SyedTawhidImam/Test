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
import Dashboard from "./Layouts/DashBoard/Dashboard.jsx";
import MyHome from "./Layouts/DashBoard/Components/MyHome.jsx";
import MyBlogs from "./Layouts/DashBoard/Components/MyBlogs.jsx";
import ManageUsers from "./Layouts/DashBoard/Components/ManageUsers.jsx";
import AddBlogs from "./Layouts/DashBoard/Components/AddBlogs.jsx";
import UpdateBlog from "./Layouts/DashBoard/Components/UpdateBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "articledetails/:id",
        element: <ArticleDetail></ArticleDetail>,
        loader: ({ params }) =>
          fetch(`https://forum-server-six.vercel.app/v1/blogs/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/register",
    element: <Register></Register>,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/dashboard",
        element: <MyHome></MyHome>,
      },
      {
        path: "addblog",
        element: <AddBlogs></AddBlogs>,
      },
      {
        path: "updateblog/:id",
        element: <UpdateBlog></UpdateBlog>,
        loader: ({ params }) =>
          fetch(
            `https://forum-server-six.vercel.app/v1/updateblog/${params.id}`
          ),
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "myblogs",
        element: <MyBlogs></MyBlogs>,
      },
    ],
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
