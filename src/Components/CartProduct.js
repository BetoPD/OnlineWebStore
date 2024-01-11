export default function CartProduct({
  image,
  title,
  id,
  quantity,
  removeFromCart,
}) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md mb-4">
      <img className="w-20 h-20 object-cover rounded" src={image} alt={title} />
      <div className="ml-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>Quantity: {quantity}</p>
      </div>
      <button
        onClick={() => removeFromCart(id)}
        className="ml-auto px-2 py-1 bg-red-500 text-white rounded-md"
      >
        Remove
      </button>
    </div>
  );
}
