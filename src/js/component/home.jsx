import React from "react";

import Nav from "./nav.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Nav />

			<Footer />
		</div>
	);
};

export default Home;
