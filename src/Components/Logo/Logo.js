import React from 'react';
import Tilt from 'react-tilt';
import brain from './Logo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma3 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 120, width: 120 }} >
 				<div className="Tilt-inner"><img alt = 'logo' src = {brain}/> </div>
			</Tilt>
		</div>
	);
}
export default Logo;