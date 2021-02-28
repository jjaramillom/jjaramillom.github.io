import React from 'react';
import {PageProps, graphql} from 'gatsby';
import Container from 'react-bootstrap/Container';

import Layout from 'components/Layout/Layout';
import Title from 'components/Title/Title';
import BlogCard from 'components/BlogCard/BlogCard';

const BlogPage = ({uri, data}: PageProps<GatsbyTypes.Query>) => {
	return (
		<Layout uri={uri}>
			<Container className="mt-3">
				<Title>Random thoughts</Title>
				<Container className="d-flex flex-column justify-content-center" fluid>
					{data.allMarkdownRemark.edges.map(({node}) => (
						<BlogCard
							key={node.id}
							blogPath={node.fields?.slug ?? '/blog'}
							title={node.frontmatter?.title ?? ''}
							date={node.frontmatter?.date ?? ''}
						>
							<BlogCard.body>{node.excerpt}</BlogCard.body>
						</BlogCard>
					))}
				</Container>
			</Container>
		</Layout>
	);
};
export default BlogPage;

export const query = graphql`
	query {
		allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "/blog/"}}
			sort: {fields: [frontmatter___date], order: DESC}
		) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					fields {
						slug
					}
					excerpt(pruneLength: 160)
				}
			}
		}
	}
`;
