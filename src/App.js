import { Redirect, Route, Switch } from "react-router-dom";
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
				<Switch>
					<Route path="/" exact>
						<Redirect to="/welcome" />
					</Route>
					<Route path="/welcome">
						<Welcome />
					</Route>
					<Route path="/products" exact>
						<Product />
					</Route>
					<Route path="/products/:productsId">
						<ProductDetail />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
