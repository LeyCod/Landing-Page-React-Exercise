import React from "react";
import "../../styles/navStyle.css";

const Nav = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark">
				<div className="container-fluid d-flex px-5">
					<div className="flex-fill">
						<a className="navbar-brand" href="#">
							Uber
						</a>
					</div>

					<div>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0 items-wrapper">
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										Empresa
									</a>
									<ul
										className="dropdown-menu"
										aria-labelledby="navbarDropdown">
										<li>
											<a
												className="dropdown-item"
												href="#">
												Conocenos
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												Nuestras ofertas
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Como funciona Uber
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Ciudadania global
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												Newsroom
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												Relaciones con los inversores
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Blog
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Unete al equipo
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										aria-current="page"
										href="#">
										Seguridad
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Ayuda
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-globe"
											viewBox="0 0 16 16">
											<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
										</svg>{" "}
										ES-ES
									</a>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										Productos
									</a>
									<ul
										className="dropdown-menu"
										aria-labelledby="navbarDropdown">
										<li>
											<a
												className="dropdown-item"
												href="#">
												Inicio
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												Viaja
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												Conduce
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												come
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												restaurantes
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												transporte
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												Bicicleta y patinete
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												Uber Transit
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												Empresa
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												Dinero
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a className="nav-link align-items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-person-circle"
											viewBox="0 0 16 16">
											<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
											<path
												fill-rule="evenodd"
												d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
											/>
										</svg>{" "}
										Iniciar sesion
									</a>
								</li>
								<li className="nav-item">
									<a
										role="button"
										className="nav-link btn-register">
										Registrate
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
