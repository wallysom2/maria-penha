import ReportIcon from '@mui/icons-material/Report';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const ReportSectionContainer = styled(Box)`
	margin-bottom: 40px;
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-end;
  h1 {
      font-size: 48px;
      color: #130F49;
      margin-bottom: 80px;

  }
`;

const IconContainer = styled(Box)`
	display: flex;
	align-items: center;
	background-color: red;
	padding: 16px;
	color: white;
	width: 100%;
`;

const StyledSVG = styled.svg`
	transform: scaleX(-1);
`;

const ReportSection = () => {
	return (
		<>
			<ReportSectionContainer>
				<StyledSVG
					xmlns="http://www.w3.org/2000/svg"
					width="782"
					height="889"
					viewBox="0 0 782 889"
					fill="none"
					style={{ marginLeft: 'auto' }}>
					<path
						opacity="0.8"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M600.516 604.504C546.826 692.71 566.739 835.735 472.657 878.33C379.278 920.608 283.905 819.981 185.102 792.582C89.116 765.964 -23.8375 787.548 -97.2995 720.274C-174.164 649.885 -205.825 539.255 -205.308 435.063C-204.81 334.908 -155.288 243.33 -94.5354 163.719C-37.9902 89.6196 33.2093 17.3823 125.164 2.00143C211.189 -12.3878 280.145 71.3159 366.012 86.6841C463.564 104.144 574.311 40.6387 655.846 96.9808C740.955 155.793 791.486 270.141 780.278 372.948C769.421 472.531 652.596 518.943 600.516 604.504Z"
						fill="#D9F4FF"
					/>
				</StyledSVG>
				<Typography
					variant="body1"
					style={{
						padding: '80px',
						marginTop: '200px',
						fontSize: '23px',
					}}>
					<Card>
						<h1>Como solicitar ajuda?</h1>
						<Card.Body
							style={{
								paddingLeft: '20px',
								marginBottom: '16px',
								border: 'solid 1px',
								borderRadius: '20px',
							}}>
							Ligue para a Central de Atendimento à Mulher, no
							número 180.
						</Card.Body>{' '}
						<Card.Body
							style={{
								paddingLeft: '20px',
								marginBottom: '16px',
								border: 'solid 1px',
								borderRadius: '20px',
							}}>
							Procure uma delegacia especializada em atendimento à
							mulher.
						</Card.Body>
						<Card.Body
							style={{
								paddingLeft: '20px',
								border: 'solid 1px',
								borderRadius: '20px',
							}}>
							Entre em contato com organizações de apoio às
							vítimas de violência contra mulheres.
						</Card.Body>
					</Card>
				</Typography>
			</ReportSectionContainer>
			<IconContainer>
				<ReportIcon fontSize="large" />
				<Typography component="p" style={{ color: 'white', marginLeft: '40px'}}>
					Se você está presenciando ou sendo vítima de violência,
					denuncie imediatamente.
				</Typography>
			</IconContainer>
		</>
	);
};

export default ReportSection;
