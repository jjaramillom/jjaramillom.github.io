import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';

type Props = {
	description?: string;
	keywords?: string;
	title?: string;
	url?: string;
	author?: string;
};

const Seo = ({description, title}: Props) => {
	const {site} = useStaticQuery<GatsbyTypes.Query>(query);
	const metaDescription = description || site?.siteMetadata?.description;
	return (
		<Helmet
			htmlAttributes={{lang: 'en'}}
			title={title}
			titleTemplate={`%s | ${site?.siteMetadata?.title}`}
			meta={[
				{name: `description`, content: metaDescription},
				{name: `keywords`, content: site?.siteMetadata?.keywords?.join(`,`)},
				{property: `og:title`, content: title},
				{property: `og:description`, content: metaDescription},
				{property: `og:type`, content: `website`},
				{name: `twitter:creator`, content: site?.siteMetadata?.author},
				{name: `twitter:title`, content: `title`},
				{name: `twitter:description`, content: metaDescription},
			]}
		/>
	);
};

export default Seo;

const query = graphql`
	query {
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`;
