import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'This Smart Brain will detect the faces in your picture! Give it a try.'}
			</p>
			<p className='f3'>
				{'Paste the image url of your picture! You can find this in the search bar when you choose "Open image in new tab!"'}
			</p>
			<div className='center'>
				<div className='form  center pa4 br3 shadow-5'>
					<input className='center f4 pa2 w-70 center' type='text' onChange={onInputChange}></input>
					<button 
					className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
					onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>


	);
}

export default ImageLinkForm;