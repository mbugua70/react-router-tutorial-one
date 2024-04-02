import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: "product-1",
      title: "soap",
    },
    { id: "product-2", title: "flour" },
    {
      id: "product-3",
      title: "laptop",
    },
  ];
  return (
    <>
      <p>List of products</p>
      <ul>
        {products.map((items) => (
          <li key={items.id}>
            <Link to={items.id}>{items.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
