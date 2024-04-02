import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Hompepage";
import Products from "./pages/products";
import Layout from "./layout/layout";
import Errorpage from "./pages/404";
import ProductDetails from "./pages/productDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <Products /> },
      { path: "products/:productID", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
