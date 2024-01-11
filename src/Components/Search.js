import { useSearchParams } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { addLikedProduct } from "../features/likedProducts/likedProductsSlice";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  const products = useSelector((state) => state.allProducts);
  const likedProducts = useSelector((state) => state.likedProducts);
  const dispatch = useDispatch();

  const filteredProducts = products.filter((product) =>
    product.title.includes(title)
  );

  const handleLikeClick = (p) => {
    const exists = likedProducts.some((product) => product.id === p.id);
    if (exists) return;
    dispatch(addLikedProduct(p));
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product addLikedProduct={handleLikeClick} product={product} />
        ))
      ) : (
        <h2>No products found</h2>
      )}
    </div>
  );
}
