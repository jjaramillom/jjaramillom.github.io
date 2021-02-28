import React from 'react';
import {graphql, PageProps} from 'gatsby';
import Container from 'react-bootstrap/Container';
import Layout from 'components/Layout/Layout';
import Title from 'components/Title/Title';

export default ({data, uri}: PageProps<GatsbyTypes.Query>) => {
	const postData = data.markdownRemark as GatsbyTypes.MarkdownRemark;

	return (
		<Layout uri={uri}>
			<Container className="text-center mt-3" fluid>
				<Container className="text-justify">
				<Title>{postData.frontmatter?.title}</Title>
					<div dangerouslySetInnerHTML={{__html: postData.html ?? ''}} />
				</Container>
			</Container>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			html
			frontmatter {
				title
				date(formatString: "DD MMMM, YYYY")
			}
			excerpt
			timeToRead
		}
	}
`;
