import React from "react";
import "../../styles/faqsMain.css";

const FaqsMain = () => {
	return (
		<div className="container-fluid safety-container m-0 row">
			<div className="container-fluid m-0 p-0 row">
				<div className="col pe-4 ps-0">
					<img
						src="https://img.icons8.com/fluency-systems-regular/30/000000/conference-call.png"
						alt=""
						className="img-fluid"
					/>
					<p className="fs-5 mt-3 custom-fw">Conócenos</p>
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
				<div className="col pe-4 ps-4">
					<img
						src="https://img.icons8.com/material-outlined/30/000000/news.png"
						alt=""
						className="img-fluid"
					/>
					<p className="fs-5 mt-3 custom-fw">Newsroom</p>
					<p className="fs-6">
						Mantente al tanto de los anuncios sobre nuestros últimos
						lanzamientos, iniciativas y colaboraciones.
					</p>
					<a className="text-dark custom-fw" href="">
						Ir a la Newsroom
					</a>
				</div>
				<div className="col pe-0 ps-4">
					<img
						src="https://img.icons8.com/material-outlined/30/000000/home--v2.png"
						alt=""
						className="img-fluid"
					/>
					<p className="fs-5 mt-3 custom-fw">Ciudadanía Global</p>
					<p className="fs-6">
						Lee acerca de nuestro compromiso para lograr un impacto
						positivo en las ciudades en las que operamos.
					</p>
					<a className="text-dark custom-fw" href="">
						Consulta nuestras colaboraciones
					</a>
				</div>
			</div>
		</div>
	);
};

export default FaqsMain;
