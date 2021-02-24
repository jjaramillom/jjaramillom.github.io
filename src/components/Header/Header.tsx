import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'gatsby';

import classes from './Header.module.scss';

type Props = {
	currentRoute: string;
};

const Header = ({currentRoute}: Props) => {
	console.log(currentRoute);
	const routes = [
		{to: '/', label: 'home'},
		{to: '/projects', label: 'projects'},
		{to: '/resume', label: 'resume'},
		{to: '/blog', label: 'blog'},
	];

	return (
		<Navbar collapseOnSelect expand="sm">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse className={classes.nav_collapse} id="responsive-navbar-nav">
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
