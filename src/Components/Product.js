import { Link } from "react-router-dom";
export default function Product(props) {
  const { addLikedProduct, product } = props;
  const { title, image, id } = product;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Link to={`/${id}`}>
        <img className="w-full" src={image} alt={title} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <button
          onClick={() => addLikedProduct(product)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          ❤️
        </button>
      </div>
    </div>
  );
}
