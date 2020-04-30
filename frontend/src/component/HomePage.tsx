import React from 'react';
import backgroud from '../img/backgroud.png'

const HomePage = () => {
	return (
		<React.Fragment>
			<div
				style={{
					minHeight: 561,
					backgroundImage: `url(${backgroud})`,
					backgroundSize: 'cover',
				}}
			></div>
		</React.Fragment>
	);
};

export default HomePage;
