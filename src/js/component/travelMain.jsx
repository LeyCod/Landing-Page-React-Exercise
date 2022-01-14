import React from "react";
import "../../styles/travelMain.css";
import MainTravelBg from "../../img/Rider_Home_bg_desktop2x.jpg";

const TravelMain = () => {
	return (
		<div
			style={{
				backgroundImage: `URL(${MainTravelBg})`,
			}}
			className="container-fluid travel-container row m-0 d-flex align-items-center">
			<div className="col-1"></div>
			<div className="container-fluid col-5 travel-container-box p-0">
				<div className="container-fluid m-0 p-0 bg-light travel-container-box-head row">
					<div className="col custom-d-flex">
						<img src="https://img.icons8.com/material-outlined/40/000000/personal-growth.png" />
						<p className="m-0">Conduce</p>
					</div>
					<div className="col custom-d-flex">
						<img src="https://img.icons8.com/ios/40/000000/cutlery.png" />
						<p className="m-0">Come</p>
					</div>
					<div className="col custom-d-flex chosen-option">
						<img src="https://img.icons8.com/glyph-neue/40/000000/car.png" />
						<p className="m-0">Viaja</p>
					</div>
				</div>

				<div className="container-fluid m-0 ps-5 pe-5 pt-4 pb-4 bg-light travel-container-box-body">
					<p className="custom-fs lh-sm m-0">
						Solicita un viaje ahora
					</p>
					<form className="mb-5 mt-5">
						<input
							className="form-control form-control-lg custom-bg-input mb-2"
							type="text"
							placeholder="Introduce la dirección de recogida"
							aria-label=".form-control-lg example"></input>
						<input
							className="form-control form-control-lg custom-bg-input mb-2"
							type="text"
							placeholder="Introduce la dirección de destino"
							aria-label=".form-control-lg example"></input>
					</form>
					<div className="d-flex justify-content-start">
						<button
							type="button"
							className="btn btn-dark btn-travel-custom btn-lg fs-6 me-3">
							Solicitar ahora
						</button>
						<button
							type="button"
							className="btn btn-color-custom btn-travel-custom btn-lg fs-6">
							Programar para más tarde
						</button>
					</div>
				</div>
			</div>
			<div className="col-6"></div>
		</div>
	);
};

export default TravelMain;
