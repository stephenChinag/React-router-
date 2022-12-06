import { Route } from "react-router-dom";

const Welcome = () => {
	return (
		<div>
			<h1>wELCOME to react router </h1>
			<Route path="/welcome/new-user">
				<p> Hello , new user </p>
			</Route>
		</div>
	);
};
export default Welcome;
