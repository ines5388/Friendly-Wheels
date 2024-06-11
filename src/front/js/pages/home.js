import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { CardVehicles } from "../component/cardvehicles";
import { FiltroAsientos } from "../component/filtroasientos";
import { FiltroPrecio } from "../component/filtroprecio";
import { FiltroFecha } from "../component/filtrofecha";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { Chat } from "../component/chat";
import "../../styles/index.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [filtroPrecio, setFiltroPrecio] = useState(null);
	const [filtroAsientos, setFiltroAsientos] = useState(null);

	const filtrarPorPrecio = (vehicle) => {
		if (filtroPrecio === null) {
			return true;
		}
		return (vehicle.precio > filtroPrecio.min && vehicle.precio <= filtroPrecio.max);
	}

	const filtrarPorAsientos = (vehicle) => {
		if (filtroAsientos === null) {
			return true;
		}
		return vehicle.asientos >= filtroAsientos;
	}

	const filtrarPorFechas = (vehicle) => {
		const fechaInicio = store.fechaInicio;
		const fechaFin = store.fechaFin;
		const vehicle_fechaInicio = new Date(vehicle.fecha_inicio).getTime();
		const vehicle_fechaFin = new Date(vehicle.fecha_fin).getTime();
		if (fechaInicio === null || fechaFin === null) {
			return true;
		}
		if ((fechaInicio.getTime() + 7200000) >= vehicle_fechaInicio && fechaFin.getTime() <= vehicle_fechaFin) {
			return true;
		}
		return false;
	}

	useEffect(() => {
		actions.getVehicles();
	}, []);

	useEffect(() => {
		const query = new URLSearchParams(window.location.search);

		if (query.get("success")) {
			swal("Pago realizado con éxito", "En breve recibirá un correo de confirmación", "success");
			actions.sendConfirmationEmail()
			navigate("/");
		}
		if (query.get("canceled")) {
			swal("Orden cancelada", "Por favor inténtelo nuevamente", "error")
			navigate("/");
		}
	}, []);

	return (
		<>
			<div className="mt-5 d-flex justify-content-center text-center fs-4 text-dark-80">
				<p><strong>¿Buscas o rentas tu coche? Estás en el lugar adecuado</strong></p>
			</div>
			<div className="d-flex gap-4 justify-content-center">
				<div className="d-flex gap-3 text-center my-3 fs-4 text-dark-80">
					<FiltroFecha />
				</div>
				<div className="d-flex gap-3 text-center my-3 fs-4 text-dark-80">
					<FiltroAsientos setFiltroAsientos={setFiltroAsientos} />	
					<FiltroPrecio setFiltroPrecio={setFiltroPrecio} />
				</div>
			</div>
			<div className="footer-view text-danger vehicles mb-5 mt-2 justify-content-center bg-light">
				<div className="container">
					<div className="row text-dark d-flex justify-content-center gap-4">
						{store.vehicles.filter(filtrarPorFechas).filter(filtrarPorAsientos).filter(filtrarPorPrecio).map((vehicle) => {
							return (
								<CardVehicles vehicle={vehicle} key={vehicle.id} />
							)
						})
						}
					</div>
				</div>
			</div>
			<div className="chatbot">
				<Chat />
			</div>
		</>
	);
};