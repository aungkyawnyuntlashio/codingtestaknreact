import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Post from "./pages/Post";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Post />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#0F172A] via-[#182038] to-[#161E36]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
