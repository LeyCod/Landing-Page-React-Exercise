import React from "react";
import TravelMain from "./travelMain.jsx";
import CompaniesMain from "./companiesMain.jsx";
import FaqsMain from "./faqsMain.jsx";
import SafetyMain from "./safetyMain.jsx";
import RegisterMain from "./registerMain.jsx";
import Nav from "./nav.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<TravelMain />
			<CompaniesMain />
			<SafetyMain />
			<FaqsMain />
			<RegisterMain />
			<Footer />
		</div>
	);
};

export default Home;
