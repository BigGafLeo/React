import { Link, useParams } from "react-router-dom";
export default function ProdutDetailPage() {
  const params = useParams();
  const productId = params.productId;
  return (
    <>
      <h1>Product details!</h1>
      <p>{productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
