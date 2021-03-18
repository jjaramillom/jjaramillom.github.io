import React from 'react';
import Img, {FluidObject} from 'gatsby-image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import Card from 'components/Card/Card';
import * as classes from './JobCard.module.scss';

export type Job = {
	company: string;
	location: string;
	position: string;
	startDate: string;
	endDate: string;
	link: string;
};

type CompanySectionProps = {
	job: Job;
	image: FluidObject;
};

const CompanyCard = ({job: {company, location, position, startDate, endDate, link}, image}: CompanySectionProps) => {
	const endDateYear = Number((endDate.match(/(\d+)/) as RegExpMatchArray)[0]);
	return (
		<Container fluid>
			<Img fluid={image} className={classes.image} />
			<div className={`${classes.text_container} mt-4`}>
				<h4 className="mb-1">
					<a href={link} target="_blank" rel="noopener noreferrer">
						{company}
					</a>
				</h4>
				<h5 className="mb-3">{location}</h5>
				<h4 className={`${classes.title} mb-1`}>{position}</h4>
				<h5 className="mb-0">
					{startDate}-{endDateYear > 2030 ? 'Present' : endDate}
				</h5>
			</div>
		</Container>
	);
};

type Props = {
	jobData: Job;
	tags: string[];
	html: string;
	image: FluidObject;
};

const JobCard = ({jobData, image, tags, html}: Props) => {
	return (
		<Card className={classes.card}>
			<Container fluid>
				<Row className="align-items-center">
					<Col className="col-md-4 col-12 mb-4 mb-md-0">
						<CompanyCard job={jobData} image={image} />
					</Col>
					<Col className="col-md-8 col-12">
						<p className="mt-2" dangerouslySetInnerHTML={{__html: html}} />
						<div className="d-inline-flex flex-wrap justify-content-center">
							{tags.map(tag => (
								<Badge key={tag} pill className={`mr-2 my-1 py-2 px-3 ${classes.badge}`}>
									{tag}
								</Badge>
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</Card>
	);
};

export default JobCard;
