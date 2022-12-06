import styles from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = () => {
	return (
		<div className={styles.product}>
			<ul>
				<li>
					<Link to="/products/p1">product 1</Link>
				</li>
				<li>
					<Link to="/products/p2">product 2</Link>
				</li>
				<li>
					<Link to="/products/p3">product 3</Link>
				</li>
				<li>
					<Link to="/products/p4">product 4</Link>
				</li>
			</ul>
		</div>
	);
};
export default Product;
