import React from "react";
import "../../styles/companiesMain.css";
import MainCompaniesBg from "../../img/HP-U4B-NYC-bkg.png";

const CompaniesMain = () => {
	return (
		<div
			style={{
				backgroundImage: `URL(${MainCompaniesBg})`,
			}}
			className="container-fluid companies-container m-0">
			<p className="custom-fs-safety">Uber para empresas</p>
			<p>Revoluciona los desplazamientos y cómo comen tus empleados.</p>
			<button
				type="button"
				className="btn btn-dark btn-companies-custom btn-lg fs-6 mt-4">
				Averigua cómo
			</button>
		</div>
	);
};

export default CompaniesMain;
