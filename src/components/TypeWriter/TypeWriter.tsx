import React, {useContext, useState, useEffect} from 'react';

import classes from './TypeWriter.module.scss';

const TypeWriter = () => {
	const [delayedTypewritterClass, setDelayedTypewritterClass] = useState('');

	useEffect(() => {
		const classTimeout = setTimeout(() => setDelayedTypewritterClass(classes.active), 4000);
		return () => {
			clearTimeout(classTimeout);
		};
	}, []);

	return (
		<div className="text-center">
			<div
				className={`d-md-inline-block ${classes.typewriter} ${
					delayedTypewritterClass === '' ? `${classes.active}` : ''
				}`}
			>
				<p>
					Electronic Engineer by title,<div className="d-none d-sm-none d-md-inline-block">&nbsp;</div>
				</p>
			</div>
			<div
				className={`d-md-inline-block ${classes.typewriter} ${delayedTypewritterClass}`}
				style={{opacity: delayedTypewritterClass === '' ? 0 : 1}}
			>
				<p>Software Engineer by heart</p>
			</div>
		</div>
	);
};

export default TypeWriter;
