import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import classes from './Footer.module.scss';

const Footer = () => {
	const data = useStaticQuery<GatsbyTypes.Query>(query);
	return (
		<footer className={classes.footer}>
			<p>Created by {data.site?.siteMetadata?.author}, 2019</p>
		</footer>
	);
};

export default Footer;

const query = graphql`
	query {
		site {
			siteMetadata {
				author
			}
		}
	}
`;
