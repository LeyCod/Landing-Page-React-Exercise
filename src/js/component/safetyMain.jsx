import React from "react";
import "../../styles/safetyMain.css";
import SafetyFirst from "../../img/Safety_Home_Img2x.jpg";
import SafetySecond from "../../img/Cities_Home_Img2x.jpg";

const SafetyMain = () => {
	return (
		<div className="container-fluid safety-container m-0 row">
			<div className="container-fluid m-0 p-0">
				<p className="custom-fs-safety mb-5">
					Nos centramos en la seguridad vayas donde vayas
				</p>
			</div>
			<div className="container-fluid m-0 p-0 row">
				<div className="col ps-0 pe-3">
					<img src={`${SafetyFirst}`} alt="" className="img-fluid" />
					<p className="fs-5 mt-3 custom-fw">
						Nuestro compromiso con tu seguridad
					</p>
					<p className="fs-6">
						Con cada función de seguridad y cada estándar de
						nuestras directrices de la comunidad, nos comprometemos
						a ayudar a crear un entorno seguro para nuestros
						usuarios.
					</p>
					<a className="text-dark custom-fw" href="">
						Más información sobre las directrices de la comunidad
					</a>
				</div>
				<div className="col pe-0 ps-3">
					<img src={`${SafetySecond}`} alt="" className="img-fluid" />
					<p className="fs-5 mt-3 custom-fw">
						Nuestro compromiso con tu seguridad
					</p>
					<p className="fs-6">
						La app está disponible en miles de ciudades de todo el
						mundo, así que podrás solicitar un viaje aunque estés
						lejos de casa.
					</p>
					<a className="text-dark custom-fw" href="">
						Ver todas las ciudades
					</a>
				</div>
			</div>
		</div>
	);
};

export default SafetyMain;
