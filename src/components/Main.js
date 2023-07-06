import { Box } from '@mui/material';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import a from '../assets/images/a.png'
import c from '../assets/images/c.png'


const MainSectionContainer = styled(Box)`
	margin-bottom: 40px;
	display: flex;
	align-items: center;
`;

const Tspan = styled.tspan`
	color: var(--130-f-49, #130f49);
	font-family: Roboto;
	font-size: 50px;
	font-style: normal;
	font-weight: 500;
	line-height: 76.8px;
	letter-spacing: -1.7px;
`;

const CardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 160px;
`;

const StyledButton = styled(Button)`
	background-color: #130f49;
	border-color: #130f49;
	margin-top: 10px;
  font-size: 20px;
`;

const StyledCardTitle = styled(Card.Title)`
	margin-top: 20px;
`;

const MainSection = () => {
	return (
		<MainSectionContainer>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="782"
				height="889"
				viewBox="0 0 782 889"
				fill="none"
				style={{ float: 'left' }}
			>
				<path
					opacity="0.8"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M600.516 604.504C546.826 692.71 566.739 835.735 472.657 878.33C379.278 920.608 283.905 819.981 185.102 792.582C89.116 765.964 -23.8375 787.548 -97.2995 720.274C-174.164 649.886 -205.825 539.255 -205.308 435.063C-204.81 334.908 -155.288 243.33 -94.5354 163.719C-37.9901 89.6196 33.2093 17.3823 125.164 2.00143C211.189 -12.3878 280.145 71.3159 366.012 86.6841C463.564 104.144 574.311 40.6387 655.846 96.9808C740.955 155.793 791.486 270.141 780.278 372.948C769.421 472.531 652.596 518.943 600.516 604.504Z"
					fill="#FEDFB1"
				/>
				<text x="0" y="330" style={{ fill: '#130F49' }}>
					<Tspan x="70" dy="0">
						Ao menos 36% das mulheres
					</Tspan>
					<Tspan x="70" dy="76.8">
						brasileiras já sofreram
					</Tspan>
					<Tspan x="70" dy="76.8">
algum tipo de violência
</Tspan>
<Tspan x="70" dy="76.8">
doméstica.
</Tspan>
</text>
</svg>
		<CardContainer>
			<Card
				style={{
					width: '18rem',
					height: '500px',
					marginLeft: '30px',
				}}>
				<Card.Img variant="top" src={a} />
				<Card.Body>
					<StyledButton variant="primary">
						Violência física
					</StyledButton>
					<StyledCardTitle>
						Ofende a integridade corporal, deixa marcas no
						corpo.
					</StyledCardTitle>
				</Card.Body>
			</Card>
			<Card
				style={{
					width: '18rem',
					height: '500px',
					marginLeft: '80px',
				}}>
				<Card.Img variant="top" src={c} />
				<Card.Body>
					<StyledButton variant="primary">
						Violência psicológica
					</StyledButton>
					<StyledCardTitle>
						Causa danos emocionais, controle de ações, crenças, 
            humilhação, xingamentos etc.
					</StyledCardTitle>
				</Card.Body>
			</Card>
		</CardContainer>
	</MainSectionContainer>
);
};
export default MainSection;
