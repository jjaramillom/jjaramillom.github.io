import React from 'react';

import Header from 'components/Header/Header';
import classes from './Layout.module.scss';
import Footer from 'components/Footer/Footer';
type Props = {uri: string};

const Layout = ({children, uri}: React.PropsWithChildren<Props>) => {
	const pathBase = uri.match(/\/\w*/);
	return (
		<div className={classes.container}>
			<Header currentRoute={pathBase ? pathBase[0] : '/'} />
			<div className={classes.content}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
