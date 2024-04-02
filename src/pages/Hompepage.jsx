import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };
  return (
    <>
      <p>Homepage cheatsheet</p>
      <p>
        Go to homepage <Link to="/products">products link</Link>
      </p>
      <button onClick={handleNavigate}>navigate</button>
    </>
  );
};

export default Homepage;
