import { useParams } from "react-router-dom";

const ProductDetail = () => {
	const params = useParams();
	console.log(params.productsId);

	return (
		<div>
			this is a product
			<p>{params.productsId}</p>
		</div>
	);
};
export default ProductDetail;
