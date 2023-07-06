import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
`;

const FormWrapper = styled.div`
	background-color: #fff;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const FormComponent = ({ setShowForm }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [birthdate, setBirthdate] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Lógica para lidar com o envio do formulário
		// Aqui você pode enviar os dados para o backend ou realizar qualquer outra ação necessária
		console.log('Dados do formulário:', {
			name,
			email,
			phone,
			address,
			city,
			state,
			zipCode,
			birthdate,
		});
		// Resetar os campos do formulário
		setName('');
		setEmail('');
		setPhone('');
		setAddress('');
		setCity('');
		setState('');
		setZipCode('');
		setBirthdate('');
		setShowForm(false); // Defina o estado para ocultar o formulário após o envio
	};

	return (
		<FormContainer>
			<FormWrapper>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Nome:
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email:
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="phone" className="form-label">
							Telefone:
						</label>
						<input
							type="tel"
							className="form-control"
							id="phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="address" className="form-label">
							Endereço:
						</label>
						<input
							type="text"
							className="form-control"
							id="address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="city" className="form-label">
							Cidade:
						</label>
						<input
							type="text"
							className="form-control"
							id="city"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="state" className="form-label">
							Estado:
						</label>
						<input
							type="text"
							className="form-control"
							id="state"
							value={state}
							onChange={(e) => setState(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="zipCode" className="form-label">
							CEP:
						</label>
						<input
							type="text"
							className="form-control"
							id="zipCode"
							value={zipCode}
							onChange={(e) => setZipCode(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="birthdate" className="form-label">
							Data de Nascimento:
						</label>
						<input
							type="date"
							className="form-control"
							id="birthdate"
							value={birthdate}
							onChange={(e) => setBirthdate(e.target.value)}
						/>
					</div>
					<div className="d-flex justify-content-end">
						<button type="submit" className="btn btn-primary me-2">
							Enviar
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							onClick={() => setShowForm(false)}>
							Cancelar
						</button>
					</div>
				</form>
			</FormWrapper>
		</FormContainer>
	);
};

export default FormComponent;
