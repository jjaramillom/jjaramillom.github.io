import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';

type Props = {
	description?: string;
	keywords?: string[];
	title?: string;
	url?: string;
	author?: string;
};

const Seo = ({description, title, keywords, url, author}: Props) => {
	const {site} = useStaticQuery<GatsbyTypes.Query>(query);
	const metaDescription = description || site?.siteMetadata?.description;
	const metaKeyWords = (keywords || site?.siteMetadata?.keywords)?.join(', ');
	return (
		<Helmet
			htmlAttributes={{lang: 'en'}}
			title={title || site?.siteMetadata?.title}
			meta={[
				{name: `description`, content: metaDescription},
				{name: `keywords`, content: metaKeyWords},
				{property: `og:title`, content: title || site?.siteMetadata?.title},
				{property: `og:description`, content: description || site?.siteMetadata?.description},
				{property: `og:type`, content: `website`},
				{property: `og:url`, content: url || site?.siteMetadata?.url},
				{name: `twitter:creator`, content: author || site?.siteMetadata?.author},
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
				url
				twitterUsername
			}
		}
	}
`;
