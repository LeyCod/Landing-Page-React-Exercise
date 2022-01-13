import React from "react";
import TravelMain from "./travelMain.jsx";
import CompaniesMain from "./companiesMain.jsx";
import FaqsMain from "./faqsMain.jsx";
import SafetyMain from "./safetyMain.jsx";
import RegisterMain from "./registerMain.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<TravelMain />
			<CompaniesMain />
			<SafetyMain />
			<FaqsMain />
			<RegisterMain />
		</div>
	);
};

export default Home;
