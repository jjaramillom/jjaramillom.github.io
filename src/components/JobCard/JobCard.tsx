import React from 'react';
import Img, {FluidObject} from 'gatsby-image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import Card from 'components/Card/Card';
import classes from './JobCard.module.scss';

export type Job = {
	company: string;
	location: string;
	position: string;
	startDate: string;
	endDate: string;
};

type CompanySectionProps = {
	job: Job;
	image: FluidObject;
};

const CompanyCard = ({job: {company, location, position, startDate, endDate}, image}: CompanySectionProps) => {
	const endDateYear = Number((endDate.match(/(\d+)/) as RegExpMatchArray)[0]);
	return (
		<Container fluid>
			<Img fluid={image} className={classes.image} />
			<div className={`${classes.text_container} mt-4`}>
				<h4 className={` mb-1 ${classes.university}`}>{company}</h4>
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

const cardStyle: React.CSSProperties = {
	width: '100%',
	height: 'fit-content',
};

const JobCard = ({jobData, image, tags, html}: Props) => {
	return (
		<Card style={cardStyle}>
			<Container fluid>
				<Row className="align-items-center">
					<Col className="col-md-4 col-12">
						<CompanyCard job={jobData} image={image} />
					</Col>
					<Col className="col-md-8 col-12">
						<p className="text-justify mt-2" dangerouslySetInnerHTML={{__html: html}} />
					</Col>
				</Row>
				<Row>
					<Col className="col-md-4 col-1"></Col>
					<Col className="col-md-8 col-12">
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
