import React from 'react';

import * as classes from './Card.module.scss';

type Props = {
	style?: React.CSSProperties;
	className?: string;
};

const EducationCard = ({children, style, className}: React.PropsWithChildren<Props>) => {
	return (
		<div className={`${className ?? ''} ${classes.container}`} style={style}>
			{children}
		</div>
	);
};

export default EducationCard;
