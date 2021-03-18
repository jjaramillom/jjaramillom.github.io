import React from 'react';
import Container from 'react-bootstrap/Container';
import PageTransition from 'gatsby-plugin-page-transitions';

import Navbar from '@components/Navbar/Navbar';
import * as classes from './Layout.module.scss';
import Footer from 'components/Footer/Footer';
type Props = {uri: string; style?: React.CSSProperties};

const Layout = ({children, uri, style}: React.PropsWithChildren<Props>) => {
	const pathBase = uri.match(/\/\w*/);
	return (
		<Container fluid className={`px-0 ${classes.container}`}>
			<Navbar currentRoute={pathBase ? pathBase[0] : ''} />
			<div className={classes.content} style={style}>
				<PageTransition
					defaultStyle={{
						transition: `opacity 1500ms ease-in-out`,
						opacity: 0,
					}}
					transitionStyles={{
						entering: {opacity: '1'},
						entered: {opacity: '1'},
						exiting: {opacity: '0'},
						exited: {opacity: '0'},
					}}
					transitionTime={1000}
				>
					{children}
				</PageTransition>
			</div>
			<Footer />
		</Container>
	);
};

export default Layout;
