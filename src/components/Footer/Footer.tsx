import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import * as classes from './Footer.module.scss';

const Footer = () => {
	const metaData = useStaticQuery<GatsbyTypes.Query>(query).site?.siteMetadata;
	return (
		<footer className={classes.footer}>
			<span className="m-auto">
				<b>{metaData?.author}</b> &copy; {new Date().getFullYear()}. Made with
				<span className={classes.heart}>&nbsp;❤&nbsp;</span> & &nbsp;<a href="https://www.gatsbyjs.org/">Gatsby</a>
			</span>
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
