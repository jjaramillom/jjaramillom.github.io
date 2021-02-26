import React from 'react';
import {PageProps, graphql} from 'gatsby';
import Container from 'react-bootstrap/Container';

import {Utils} from 'utils';
import Layout from 'components/Layout/Layout';
import EducationCard, {Education} from 'components/EducationCard/EducationCard';
import JobCard, {Job} from '@components/JobCard/JobCard';
import classes from './resume.module.scss';

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

const mapWorkData = ({
	company,
	startDate,
	endDate,
	location,
	position,
}: GatsbyTypes.MarkdownRemarkFrontmatter): Job => ({
	company: company ?? '',
	position: position ?? '',
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

	console.log(workImages)
	console.log(educationImages)
	console.log(workImageMap)
	console.log(educationImageMap)

	return (
		<Layout uri={uri}>
			<Container className="mt-3">
				<h1 className={classes.title}>Education</h1>
				<Container className="d-flex flex-column flex-lg-row justify-content-center align-items-center" fluid>
					{educationData.edges.map(({node}) => (
						<EducationCard
							key={node.id}
							education={mapEducationData(node.frontmatter as GatsbyTypes.MarkdownRemarkFrontmatter)}
							image={educationImageMap[node?.fields?.slug ?? '']}
							wide={node?.frontmatter?.location?.includes('Darmstadt') ?? false}
						/>
					))}
				</Container>
				<Container className={`d-flex flex-column justify-content-center align-items-center ${classes.jobs_container}`} fluid>
					{workData.edges.map(({node}) => (
						<JobCard
							key={node.id}
							jobData={mapWorkData(node.frontmatter as GatsbyTypes.MarkdownRemarkFrontmatter)}
							image={workImageMap[node?.fields?.slug ?? '']}
							html={node.html ?? ''}
							tags={(node.frontmatter?.tags as string[]) ?? []}
						/>
					))}
				</Container>
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
				relativePath: {regex: "/logo/"}
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
