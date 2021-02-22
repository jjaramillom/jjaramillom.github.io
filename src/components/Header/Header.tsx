import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'gatsby';

import classes from './Header.module.scss';

console.log(classes);

const DEFAULT_ROUTE = '/';

const Header = () => {
	const [currentRoute, setCurrentRoute] = useState<string>(DEFAULT_ROUTE);

	return (
		<Nav
			className={classes.nav}
			activeKey={currentRoute}
			onSelect={selectedKey => setCurrentRoute(selectedKey as string)}
		>
			<Nav.Link className={classes.nav_item} to="/" as={Link}>
				Home
			</Nav.Link>
			<Nav.Item>
				<Nav.Link className={classes.nav_item} to="/resume" as={Link}>
					Link
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link className={classes.nav_item} to="/projects" as={Link}>
					Project
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link className={classes.nav_item} to="/blog" as={Link}>
					Blog
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default Header;
