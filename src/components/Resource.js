import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ResourcesSection = () => {
	return (
		<>
			<Carousel custom-carousel>
				<Carousel.Item>
					<img
						className="d-block mx-auto"
						src='https://www.fundobrasil.org.br/wp-content/uploads/2023/03/fundo-brasil-capa-02.png'
						alt="First slide"
						style={{ height: '600px', width: '100%'}}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block mx-auto"
						src='https://www.larissareis.adv.br/uploads/publicacoes/2023/04/26/alteracao-na-lei-maria-da-penha-reforca-combate-a-violencia-domestica.jpg'
						alt="Second slide"
						style={{ height: '600px', width: '100%'}}
					/>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default ResourcesSection;
