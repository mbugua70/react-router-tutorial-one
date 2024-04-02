import { useParams, Link } from "react-router-dom";
import classes from "./Root.module.css";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <main className={classes.content}>
        <p>Product details</p>
        <p>{params.productID}</p>
        <p>
          <Link to=".." relative="path">
            Back
          </Link>
        </p>
      </main>
    </>
  );
};

export default ProductDetails;
