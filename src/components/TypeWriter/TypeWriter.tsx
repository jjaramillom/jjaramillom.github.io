import React, {useContext, useState, useEffect} from 'react';

import classes from './TypeWriter.module.scss';

const START_DELAY = 500;

const TypeWriter = () => {
	const [firstDelayedTypewritterClass, setFirstDelayedTypewritterClass] = useState('');
	const [secondDelayedTypewritterClass, setSecondDelayedTypewritterClass] = useState('');

	useEffect(() => {
		const firstTimeout = setTimeout(() => setFirstDelayedTypewritterClass(classes.active), START_DELAY);
		const secondTimeout = setTimeout(() => {
			setFirstDelayedTypewritterClass('');
			setSecondDelayedTypewritterClass(classes.active);
		}, 4000 + START_DELAY);
		return () => {
			clearTimeout(firstTimeout);
			clearTimeout(secondTimeout);
		};
	}, []);

	return (
		<div className="text-center">
			<div
				className={`d-md-inline-block ${classes.typewriter} ${firstDelayedTypewritterClass} 
				${firstDelayedTypewritterClass !== '' ? `${classes.active}` : ''}`}
				style={{opacity: firstDelayedTypewritterClass === '' && secondDelayedTypewritterClass === '' ? 0 : 1}}
			>
				<p>
					Electronic Engineer by title,<span className="d-none d-sm-none d-md-inline-block">&nbsp;</span>
				</p>
			</div>
			<div
				className={`d-md-inline-block ${classes.typewriter} ${secondDelayedTypewritterClass}`}
				style={{opacity: secondDelayedTypewritterClass === '' ? 0 : 1}}
			>
				<p>Software Engineer by heart</p>
			</div>
		</div>
	);
};

export default TypeWriter;
