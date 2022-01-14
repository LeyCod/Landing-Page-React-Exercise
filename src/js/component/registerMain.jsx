import React from "react";
import "../../styles/registerMain.css";
import LogoDriver from "../../img/Driver-App-logo.png";
import LogoRider from "../../img/Rider-App-logo.png";

const RegisterMain = () => {
	return (
		<div className="container-fluid register-container m-0 bg-light">
			<div className="container-fluid m-0 p-0">
				<p className="custom-fs-safety mb-5">
					Descubre muchas más opciones en las apps
				</p>
			</div>
			<div className="container-fluid m-0 p-0 row">
				<div className="col d-flex align-items-center p-4 bg-white me-4">
					<img height="150px" src={`${LogoDriver}`} alt="" />
					<p className="fs-4 px-3 custom-fw flex-fill">
						Descarga la App del Conductor
					</p>
					<img
						height="30px"
						src="https://img.icons8.com/ios-glyphs/30/000000/double-right--v1.png"
					/>
				</div>
				<div className="col d-flex align-items-center p-4 bg-white ms-4">
					<img height="150px" src={`${LogoRider}`} alt="" />
					<p className="fs-4 px-3 custom-fw flex-fill ">
						Descarga la App de Uber
					</p>
					<img
						height="30px"
						src="https://img.icons8.com/ios-glyphs/30/000000/double-right--v1.png"
					/>
				</div>
			</div>
		</div>
	);
};

export default RegisterMain;
