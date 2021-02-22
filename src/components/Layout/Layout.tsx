import React from 'react';

import Header from 'components/Header/Header';
import classes from './Layout.module.scss';
import Footer from 'components/Footer/Footer';
type Props = {};

const Layout = ({children}: React.PropsWithChildren<Props>) => {
	return (
		<div className={classes.container}>
			<Header />
			<div className={classes.content}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
