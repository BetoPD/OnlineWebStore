import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "../Components/Root";
import Products from "../features/allProducts/Products";
import LikedProducts from "../features/likedProducts/LikedProducts";
import Search from "../Components/Search";
import FullProduct from "../Components/FullProduct";
import Cart from "../features/cart/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path=":id" element={<FullProduct />} />
      <Route path="/" element={<Root />}>
        <Route index element={<Products />} />
        <Route path="liked" element={<LikedProducts />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
