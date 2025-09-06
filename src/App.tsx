
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import MainLayout from "./layout/MainLayout";
import Update from "./Pages/Update";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      { path: "update",
        element: <Update /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
