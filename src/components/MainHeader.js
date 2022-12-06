import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";
const MainHeader = () => {
	return (
		<div className={styles.header}>
			<header>
				<nav>
					<ul>
						<li>
							<NavLink activeClassName={styles.active} to="/welcome">
								welcome
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName={styles.active} to="/products">
								Products
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};
export default MainHeader;
