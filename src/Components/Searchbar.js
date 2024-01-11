import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function Searchbar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = { title: value };
    const query = createSearchParams(searchQuery);

    navigate({
      pathname: "/search",
      search: `?${query}`,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-green-500 p-4 rounded"
    >
      <input
        placeholder="Search for a product"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-grow mr-4 p-2 rounded bg-white"
      />
      <button
        type="submit"
        className="bg-white text-green-500 px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
}
