import { useDispatch, useSelector } from "react-redux";
import { removeLikedProduct } from "./likedProductsSlice";
import Product from "../../Components/Product";

export default function LikedProducts() {
  const dispatch = useDispatch();
  const likedProduct = useSelector((state) => state.likedProducts);

  const handleRemoveClick = (product) => {
    dispatch(removeLikedProduct(product.id));
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {likedProduct.length > 0 ? (
        likedProduct.map((product) => (
          <Product
            key={product.id}
            addLikedProduct={handleRemoveClick}
            product={product}
          />
        ))
      ) : (
        <h2>No Liked Products</h2>
      )}
    </div>
  );
}
