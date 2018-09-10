import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className = 'mt0 pa0 f3'>
			 	{'This Magic Brain will detect faces in your picture. Give it a try!'
			 	}
			</p>
		<div className='form w-70 center pa2 br3 shadow-5 ma1 mt0'>
				<input className = 'f4 pa2 w-50 center' type = 'tex' onChange={onInputChange} />
				<button className = 'ma2 w-20 pa4 grow f4 center link ph4 pv2 dib white' onClick = {onButtonSubmit}> Detect </button>
		</div>
		</div>	
	);
}
export default ImageLinkForm;