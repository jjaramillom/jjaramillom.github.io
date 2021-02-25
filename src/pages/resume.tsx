import React from 'react';
import {PageProps, graphql} from 'gatsby';
import Container from 'react-bootstrap/Container';

import {Utils} from 'utils';
import Layout from 'components/Layout/Layout';
import EducationCard, {Education} from 'components/EducationCard/EducationCard';

const mapEducationData = ({
	university,
	startDate,
	endDate,
	location,
	title,
}: GatsbyTypes.MarkdownRemarkFrontmatter): Education => ({
	university: university ?? '',
	title: title ?? '',
	location: location ?? '',
	startDate: startDate ?? '',
	endDate: endDate ?? '',
});

const ResumePage = ({uri, data}: PageProps) => {
	const workData = (data as any).workData as GatsbyTypes.MarkdownRemarkConnection;
	const workImages = (data as any).workImages as GatsbyTypes.FileConnection;

	const educationData = (data as any).educationData as GatsbyTypes.MarkdownRemarkConnection;
	const educationImages = (data as any).educationImages as GatsbyTypes.FileConnection;

	const workImageMap = Utils.getImageMap(workImages.edges ?? [], /\/resume\/work.*\/|$/);
	const educationImageMap = Utils.getImageMap(educationImages.edges ?? [], /\/resume\/education.*\/|$/);
	return (
		<Layout uri={uri}>
			<Container
				className="mt-5 mb-5 pt-3 d-flex flex-column flex-md-row justify-content-center align-items-center"
				fluid
			>
				{educationData.edges.map(({node}) => (
					<div key={node.id}>
						<EducationCard
							education={mapEducationData(node.frontmatter as GatsbyTypes.MarkdownRemarkFrontmatter)}
							image={educationImageMap[node?.fields?.slug ?? '']}
							wide={node?.frontmatter?.location?.includes('Darmstadt') ?? false}
						/>
					</div>
				))}
			</Container>
		</Layout>
	);
};

export default ResumePage;

export const query = graphql`
	query {
		workData: allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "/work/"}}
			sort: {fields: [frontmatter___startDate], order: DESC}
		) {
			edges {
				node {
					id
					html
					frontmatter {
						company
						location
						position
						tags
						startDate(formatString: "MMM, YYYY")
						endDate(formatString: "MMM, YYYY")
					}
					fields {
						slug
					}
				}
			}
		}
		workImages: allFile(
			filter: {
				extension: {eq: "png"}
				relativePath: {regex: "/company/"}
				relativeDirectory: {regex: "/content/resume/work/"}
			}
		) {
			edges {
				node {
					childImageSharp {
						fluid(maxWidth: 400) {
							...GatsbyImageSharpFluid
						}
					}
					relativePath
				}
			}
		}
		educationData: allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "/education/"}}
			sort: {fields: [frontmatter___startDate], order: DESC}
		) {
			edges {
				node {
					id
					html
					frontmatter {
						university
						location
						title
						startDate(formatString: "MMM, YYYY")
						endDate(formatString: "MMM, YYYY")
					}
					fields {
						slug
					}
				}
			}
		}
		educationImages: allFile(
			filter: {
				extension: {eq: "png"}
				relativePath: {regex: "/logo/"}
				relativeDirectory: {regex: "/content/resume/education/"}
			}
		) {
			edges {
				node {
					childImageSharp {
						fluid(maxWidth: 400) {
							...GatsbyImageSharpFluid
						}
					}
					relativePath
				}
			}
		}
	}
`;
