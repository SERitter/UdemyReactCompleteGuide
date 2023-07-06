import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h1>The Products Details Page</h1>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetailsPage;
