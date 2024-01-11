import { useEffect } from "react";
import { getProducts } from "../../WebStore/webStore";
import { addProducts } from "./allProductsSlice";
import { addLikedProduct } from "../likedProducts/likedProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../Components/Product.js";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const likedProducts = useSelector((state) => state.likedProducts);

  const handleLikeClick = (likedProduct) => {
    const exists = likedProducts.some(
      (product) => product.id === likedProduct.id
    );
    if (exists) return;
    dispatch(addLikedProduct(likedProduct));
  };

  const fetchProducts = async () => {
    const response = await getProducts();
    dispatch(addProducts(response));
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <Product
            addLikedProduct={handleLikeClick}
            product={product}
            key={product.id}
          />
        ))
      ) : (
        <h2>No products</h2>
      )}
    </div>
  );
}
