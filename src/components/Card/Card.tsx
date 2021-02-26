import React from 'react';

import classes from './Card.module.scss';

type Props = {
	style?: React.CSSProperties;
};

const EducationCard = ({children, style}: React.PropsWithChildren<Props>) => {
	return (
		<div className={classes.container} style={style}>
			{children}
		</div>
	);
};

export default EducationCard;
