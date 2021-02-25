import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from '@components/Navbar/Navbar';
import classes from './Layout.module.scss';
import Footer from 'components/Footer/Footer';
type Props = {uri: string; style?: React.CSSProperties};

const Layout = ({children, uri, style}: React.PropsWithChildren<Props>) => {
	const pathBase = uri.match(/\/\w*/);
	return (
		<Container fluid className={`px-0 ${classes.container}`}>
			<Header currentRoute={pathBase ? pathBase[0] : '/'} />
			<div className={classes.content} style={style}>
				{children}
			</div>
			<Footer />
		</Container>
	);
};

export default Layout;
