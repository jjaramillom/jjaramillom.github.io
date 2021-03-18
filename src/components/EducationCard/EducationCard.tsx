import React from 'react';
import Img, {FluidObject} from 'gatsby-image';
import Container from 'react-bootstrap/Container';

import Card from 'components/Card/Card';
import * as classes from './EducationCard.module.scss';

export type Education = {
	university: string;
	title: string;
	startDate: string;
	endDate: string;
	location: string;
	link: string;
};

type Props = {
	education: Education;
	image: FluidObject;
	wide: boolean;
};

const EducationCard = ({education: {endDate, startDate, location, title, university, link}, image, wide}: Props) => {
	return (
		<Card className={classes.card}>
			<Container fluid>
				<Img fluid={image} className={`${classes.image} ${wide && classes.wide}`} />
				<div className={`${classes.text_container} mt-4`}>
					<h4 className="mb-1">
						<a href={link} target="_blank" rel="noopener noreferrer">
							{university}
						</a>
					</h4>
					<h5 className="mb-3">{location}</h5>
					<h4 className={`${classes.title} mb-1`}>{title}</h4>
					<h5 className="mb-0">
						{startDate}-{endDate}
					</h5>
				</div>
			</Container>
		</Card>
	);
};

export default EducationCard;
