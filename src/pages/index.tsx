import React from 'react';
import {graphql, useStaticQuery, PageProps} from 'gatsby';
import Container from 'react-bootstrap/Container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	IconDefinition,
	faLinkedin,
	faGithubSquare,
	faJs,
	faCss3,
	faHtml5,
	faReact,
	faVuejs,
	faNodeJs,
	faPython,
	faDocker,
	faGit,
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare, faIdCard} from '@fortawesome/free-solid-svg-icons';

import Layout from 'components/Layout/Layout';
import Typewriter from 'components/Typewriter/Typewriter';
import classes from './index.module.scss';
import resume from '../../static/resume.pdf';

type ContactIconConfig = {
	icon: IconDefinition;
	link: string;
	label: string;
};

type TechIconConfig = {
	icon: IconDefinition;
	label: string;
};

const TECH_ICONS: TechIconConfig[] = [
	{icon: faJs, label: 'JavaScript'},
	{icon: faReact, label: 'React.js'},
	{icon: faVuejs, label: 'Vue.js'},
	{icon: faCss3, label: 'CSS'},
	{icon: faHtml5, label: 'HTML'},
	{icon: faNodeJs, label: 'Node.js'},
	{icon: faPython, label: 'Python'},
	{icon: faDocker, label: 'Docker'},
	{icon: faGit, label: 'Git'},
];

const CONTACT_ICONS: ContactIconConfig[] = [
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
				<h1 className={`${classes.title} ${classes.name}`}>
					<span>{siteMetadata?.author?.name}</span> <span>{siteMetadata?.author?.lastName}</span>
				</h1>
				<Typewriter />
				<hr className="my-3 w-100" />
				<div className="d-flex flex-row justify-content-center my-5">
					{CONTACT_ICONS.map(({icon, link, label}) => (
						<div key={link} className={classes.icon_wrapper}>
							<a href={link} target="_blank" rel="noopener noreferrer" download={label === 'Download my CV'}>
								<FontAwesomeIcon aria-hidden className={`${classes.icon} ${classes.animated}`} icon={icon} />
							</a>
							<div className={`mt-1 ${classes.tooltip}`}>{`${label}`}</div>
						</div>
					))}
				</div>
				<h3 className={classes.tech_title}>These are some of the technologies I have worked with</h3>
				<div className={classes.tech_grid}>
					{TECH_ICONS.map(({icon, label}) => (
						<div key={label} className={`${classes.icon_wrapper} ${classes.tech}`}>
							<FontAwesomeIcon aria-hidden className={`${classes.icon} ${classes.tech} ${classes.animated}`} icon={icon} />
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
