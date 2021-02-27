import React from 'react';
import {graphql, useStaticQuery, PageProps} from 'gatsby';
import Container from 'react-bootstrap/Container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithubSquare, IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare, faIdCard} from '@fortawesome/free-solid-svg-icons';

import Layout from 'components/Layout/Layout';
import Typewriter from 'components/Typewriter/Typewriter';
import classes from './index.module.scss';
import resume from '../../static/resume.pdf';

type IconConfig = {
	icon: IconDefinition;
	link: string;
	label: string;
};

const ICONS: IconConfig[] = [
	{
		icon: faGithubSquare,
		label: 'Github',
		link: 'https://www.github.com/jjaramillom',
	},
	{
		icon: faLinkedin,
		label: 'LinkedIn',
		link: 'https://www.linkedin.com/in/jjaramillom',
	},
	{icon: faEnvelopeSquare, label: 'Send me an email', link: 'mailto:jjaramillom@unal.edu.co'},
	{icon: faIdCard, label: 'Download my CV', link: resume},
];

const IndexPage = ({uri}: PageProps) => {
	const siteMetadata = useStaticQuery<GatsbyTypes.Query>(query).site?.siteMetadata;

	return (
		<Layout uri={uri}>
			<Container className="mt-3">
				<h1 className={classes.name_title}>
					<span>{siteMetadata?.author?.name}</span> <span>{siteMetadata?.author?.lastName}</span>
				</h1>
				<Typewriter />
				<hr className="my-3 w-100" />
				<div className="d-flex flex-row justify-content-center mt-5">
					{ICONS.map(({icon, link, label}) => (
						<div key={link} className={`${classes.icon_wrapper}`}>
							<a href={link} target="_blank" rel="noopener noreferrer" download={label === 'Download my CV'}>
								<FontAwesomeIcon aria-hidden className={`${classes.icon} `} icon={icon} />
							</a>
							<div className={`mt-1 ${classes.tooltip}`}>{`${label}`}</div>
						</div>
					))}
				</div>
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
