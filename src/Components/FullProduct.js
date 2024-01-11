import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/cart/cartSlice";
import { useParams } from "react-router-dom";
export default function FullProduct() {
  const { id } = useParams();
  const products = useSelector((state) => state.allProducts);
  const product = products.find((product) => product.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  if (!product) {
    return <h1>No product</h1>;
  }

  const handleAddToCart = () => {
    dispatch(addProduct({ product, quantity }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
        <img
          className="w-full h-64 object-cover mb-4 rounded"
          src={product.image}
          alt={product.title}
        />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
        <div className="mt-4">
          <span className="text-indigo-600 font-bold">${product.price}</span>
        </div>
        <div className="mt-4">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-20 mr-2 border rounded-md text-center"
          />
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
