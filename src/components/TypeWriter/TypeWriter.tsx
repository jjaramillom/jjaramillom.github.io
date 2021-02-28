import React, {useContext, useState, useEffect} from 'react';

import classes from './TypeWriter.module.scss';

const TypeWriter = () => {
	const [delayedTypewritterClass, setDelayedTypewritterClass] = useState('');

	useEffect(() => {
		const classTimeout = setTimeout(() => setDelayedTypewritterClass(classes.active), 2500);
		return () => {
			clearTimeout(classTimeout);
		};
	}, []);

	return (
		<>
			<div className={`d-md-block d-sm-none d-none ${classes.typewriter} ${classes.active}`}>
				<p className={classes.wide}>An Electronic Engineer by title, a Software Engineer by heart</p>
			</div>
			<div className={`d-md-none ${classes.typewriter} ${delayedTypewritterClass === '' ? `${classes.active}` : ''}`}>
				<p className={classes.narrow}>An Electronic Engineer by title,</p>
			</div>
			<div
				className={`d-md-none ${classes.typewriter} ${delayedTypewritterClass}`}
				style={{opacity: delayedTypewritterClass === '' ? 0 : 1}}
			>
				<p className={classes.narrow}> a Software Engineer by heart</p>
			</div>
		</>
	);
};

export default TypeWriter;
