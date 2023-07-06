import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import image from './../assets/images/d.png';
import FormComponent from './FormComponent'

const HeaderContainer = styled.header`
	background-color: #f5f5f5;
	padding: 20px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	h1 {
		color: var(--130-f-49, #130f49);
		font-family: Poppins;
		font-size: 60px;
		font-weight: 600;
		line-height: 85.3px;
		letter-spacing: -1.8px;
		padding: 90px;
	}
	h2 {
		color: #0b0736;
		font-family: Poppins;
		font-size: 30px;
		font-weight: 400;
		line-height: normal;
		letter-spacing: -0.26px;
		padding: 150px 0 0 150px;
	}
	h3 {
		font-family: Roboto;
		font-weight: 200;
		font-size: 25px;
		padding: 310px 0 0 0;
		color: #0b0736;
		margin-left: 40px;
	}
	span {
		font-family: Ysabeau Infant;
		font-weight: 100;
		font-size: 20px;
		padding: 0 0 0 590px;
	}
	button {
		width: 186px;
		height: 81px;
		border-radius: 40px;
		margin: 60px 0 0 290px;
		background: var(--130-f-49, #130f49);
		color: #fff;
		text-align: center;
		font-family: Roboto;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.9px;
	}
`;

const Img = styled.img`
	width: 55%;
	flex-shrink: 0;
	z-index: 1;
`;

const Svg = styled.svg`
	position: absolute;
	top: 0;
	right: 0;
	fill: var(--d-9-f-4-ff, #d9f4ff);
`;

const TitleContainer = styled.div`
	flex-grow: 1;
	text-align: left;
`;

const Header = () => {
	const [showForm, setShowForm] = useState(false);
	const handleClick = () => {
		setShowForm(true);
	};
  
	return (
		<HeaderContainer>
			<TitleContainer>
				<Typography variant="h1">Maria da Penha Virtual</Typography>
				<h2>Se estiver presenciando de ajuda</h2>
				<Button onClick={handleClick}>Clique aqui</Button>
				<h3>
					“Toda vez que uma mulher se defende, sem nem perceber que
					isso é possível, sem qualquer pretensão, ela defende todas
					as mulheres.” <span>Maya Angelou</span>{' '}
				</h3>
        {showForm && <FormComponent setShowForm={setShowForm} />}
      </TitleContainer>
			<Img src={image} alt="Third slide" />
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				width="890"
				height="992"
				viewBox="0 0 890 992"
				fill="none">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M576.071 -121.746C715.069 -144.885 845.108 -292.938 972.977 -233.688C1099.89 -174.881 1080.92 13.3567 1140.67 139.87C1198.72 262.778 1321.69 360.256 1317.66 496.125C1313.43 638.287 1227.34 769.607 1119.21 861.938C1015.28 950.692 876.511 981.142 740.1 989.324C613.135 996.939 475.032 987.753 377.18 906.445C285.638 830.38 310.669 684.523 250.016 582.098C181.11 465.735 16.7822 407.902 2.32895 273.434C-12.7579 133.071 60.3612 -21.0598 176.582 -101.11C289.158 -178.65 441.241 -99.3004 576.071 -121.746Z"
					fill="#D9F4FF"
				/>
			</Svg>
		</HeaderContainer>
	);
};

export default Header;
