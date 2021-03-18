import React from 'react';

import * as classes from './Title.module.scss';

type Props = {
	style?: React.CSSProperties;
	className?: string;
};

const Header = ({children, style, className}: React.PropsWithChildren<Props>) => (
	<h1 className={`${className ?? ''} ${classes.title}`} style={style}>
		{children}{' '}
	</h1>
);

export default Header;
