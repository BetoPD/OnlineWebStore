import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "./cartSlice";
import CartProduct from "../../Components/CartProduct";

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  const handleRemoveClick = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full">
        {Object.values(cartProducts).map((product) => (
          <CartProduct
            key={product.id}
            image={product.image}
            title={product.title}
            id={product.id}
            quantity={product.quantity}
            removeFromCart={handleRemoveClick}
          />
        ))}
      </div>
    </div>
  );
}
