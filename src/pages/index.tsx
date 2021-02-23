import React from 'react';
import {graphql, useStaticQuery, PageProps} from 'gatsby';
import Container from 'react-bootstrap/Container';

import Layout from 'components/Layout/Layout';
import Typewriter from 'components/Typewriter/Typewriter';
import classes from './index.module.scss';

const IndexPage = ({uri}: PageProps) => {
	const siteMetadata = useStaticQuery<GatsbyTypes.Query>(query).site?.siteMetadata;
	return (
		<Layout uri={uri}>
			<Container className="mt-3">
				<h1 className={classes.name_title}>
					<span>{siteMetadata?.author?.name}</span> <span>{siteMetadata?.author?.lastName}</span>
				</h1>
				<Typewriter />
			</Container>
		</Layout>
	);
};

export default IndexPage;

const query = graphql`
	query {
		site {
			siteMetadata {
				author {
					name
					lastName
				}
			}
		}
	}
`;
