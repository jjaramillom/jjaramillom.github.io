import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import classes from './Footer.module.scss';

const Footer = () => {
	const metaData = useStaticQuery<GatsbyTypes.Query>(query).site?.siteMetadata;
	return (
		<footer className={classes.footer}>
			<span className="m-auto">
				<b>{`${metaData?.author?.name} ${metaData?.author?.lastName}`}</b> &copy; {new Date().getFullYear()}. Made with
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
				author{
					name
					lastName
				}
			}
		}
	}
`;
