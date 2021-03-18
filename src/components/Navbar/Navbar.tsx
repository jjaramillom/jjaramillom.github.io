import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'gatsby';

import * as classes from './Navbar.module.scss';

type Props = {
	currentRoute: string;
};

const Header = ({currentRoute}: Props) => {
	const routes = [
		{to: '/', label: 'home'},
		{to: '/about', label: 'about'},
		{to: '/resume', label: 'resume'},
		// {to: '/blog', label: 'blog'},
	];

	return (
		<Navbar collapseOnSelect sticky="top" expand="sm" className={classes.navbar}>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse className={classes.navbar_collapse} id="responsive-navbar-nav">
				<Nav className={`mr-auto ${classes.nav}`} activeKey={currentRoute}>
					{routes.map(({to, label}) => (
						<Nav.Link
							key={to}
							className={`${classes.nav_item} ${to === currentRoute ? classes.active : ''}`}
							to={to}
							as={Link}
						>
							{label}
						</Nav.Link>
					))}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
