import { Route } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Welcome from "./pages/Welcome";

function App() {
	return (
		<div>
			<MainHeader />

			<main>
				<h1>Hello </h1>
				<Route path="/welcome">
					<Welcome />
				</Route>
				<Route path="/Products">
					<Product />
				</Route>
				<Route path="/Product-Detail">
					<ProductDetail />
				</Route>
			</main>
		</div>
	);
}

export default App;
