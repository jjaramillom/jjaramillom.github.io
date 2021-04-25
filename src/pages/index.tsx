import React from 'react';
import {Helmet} from 'react-helmet';
import {graphql, useStaticQuery, PageProps} from 'gatsby';
import Container from 'react-bootstrap/Container';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaIdCard} from '@react-icons/all-files/fa/FaIdCard';
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin';
import {FaGithubSquare} from '@react-icons/all-files/fa/FaGithubSquare';
import {SiJavascript} from '@react-icons/all-files/si/SiJavascript';
import {SiTypescript} from '@react-icons/all-files/si/SiTypescript';
import {SiReact} from '@react-icons/all-files/si/SiReact';
import {SiNodeDotJs} from '@react-icons/all-files/si/SiNodeDotJs';
import {FaVuejs} from '@react-icons/all-files/Fa/FaVuejs';
import {SiGraphql} from '@react-icons/all-files/si/SiGraphql';
import {SiCss3} from '@react-icons/all-files/si/SiCss3';
import {SiHtml5} from '@react-icons/all-files/si/SiHtml5';
import {SiRedux} from '@react-icons/all-files/si/SiRedux';
import {SiPython} from '@react-icons/all-files/si/SiPython';
import {SiFlask} from '@react-icons/all-files/si/SiFlask';
import {SiJest} from '@react-icons/all-files/si/SiJest';
import {SiMongodb} from '@react-icons/all-files/si/SiMongodb';
import {GrMysql} from '@react-icons/all-files/gr/GrMysql';
import {FaGit} from '@react-icons/all-files/fa/FaGit';
import {SiDocker} from '@react-icons/all-files/si/SiDocker';

import Seo from 'components/Seo/Seo';
import Layout from 'components/Layout/Layout';
import Typewriter from 'components/Typewriter/Typewriter';
import Title from 'components/Title/Title';
import resume from '../../static/resume.pdf';
import * as classes from './index.module.scss';
import {IconType} from '@react-icons/all-files';

type ContactIconConfig = {
	icon: JSX.Element;
	link: string;
	label: string;
};

type TechIconConfig = {
	icon: JSX.Element;
	label: string;
};

const createTechIconComponent = (Icon: IconType): JSX.Element => <Icon className={`${classes.icon} ${classes.tech}`} />;
const createAnimatedIconComponent = (Icon: IconType): JSX.Element => (
	<Icon className={`${classes.icon} ${classes.animated}`} />
);

const TECH_ICONS: TechIconConfig[] = [
	{icon: createTechIconComponent(SiJavascript), label: 'JavaScript'},
	{icon: createTechIconComponent(SiTypescript), label: 'Typescript'},
	{icon: createTechIconComponent(SiReact), label: 'React.js'},
	{icon: createTechIconComponent(SiNodeDotJs), label: 'Node.js'},
	{icon: createTechIconComponent(FaVuejs), label: 'Vue.js'},
	{icon: createTechIconComponent(SiGraphql), label: 'GraphQL'},
	{icon: createTechIconComponent(SiJest), label: 'Jest'},
	{icon: createTechIconComponent(SiCss3), label: 'CSS'},
	{icon: createTechIconComponent(SiHtml5), label: 'HTML'},
	{icon: createTechIconComponent(SiRedux), label: 'Redux'},
	{icon: createTechIconComponent(SiPython), label: 'Python'},
	{icon: createTechIconComponent(SiFlask), label: 'Flask'},
	{icon: createTechIconComponent(SiMongodb), label: 'MongoDB'},
	{icon: createTechIconComponent(GrMysql), label: 'MySQL'},
	{icon: createTechIconComponent(FaGit), label: 'Git'},
	{icon: createTechIconComponent(SiDocker), label: 'Docker'},
];

const CONTACT_ICONS: ContactIconConfig[] = [
	{
		icon: createAnimatedIconComponent(FaGithubSquare),
		label: 'Github',
		link: 'https://www.github.com/jjaramillom',
	},
	{
		icon: createAnimatedIconComponent(FaLinkedin),
		label: 'LinkedIn',
		link: 'https://www.linkedin.com/in/jjaramillom',
	},
	{
		icon: createAnimatedIconComponent(FaEnvelopeSquare),
		label: 'Send me an email',
		link: 'mailto:jjaramillom@unal.edu.co',
	},
	{icon: createAnimatedIconComponent(FaIdCard), label: 'Download my CV', link: resume},
];

const IndexPage = ({uri}: PageProps) => {
	const siteMetadata = useStaticQuery<GatsbyTypes.Query>(query).site?.siteMetadata;
	const [name, lastName] = (siteMetadata?.author as string).split(' ');

	return (
		<Layout uri={uri}>
			<Helmet>
				<meta name="google-site-verification" content="T5Pi7R7GuyzgnmlYenOkLVbQZ3Hn-p4gfzkteQ0S69k" />
			</Helmet>
			<Seo title="Home" />
			<Container className="mt-3">
				<Title className={classes.title}>
					<span>{name}</span> <span>{lastName}</span>
				</Title>
				<Typewriter />
				<hr className="my-3 w-100" />
				<div className="d-flex flex-row justify-content-center my-5">
					{CONTACT_ICONS.map(({icon, link, label}) => (
						<div key={link} className={classes.iconWrapper}>
							<a href={link} target="_blank" rel="noopener noreferrer" download={label === 'Download my CV'}>
								{icon}
							</a>
							<div className={`mt-1 ${classes.tooltip}`}>{`${label}`}</div>
						</div>
					))}
				</div>
				<h3 className={classes.techTitle}>These are some of the technologies I have worked with</h3>
				<div className={classes.techGrid}>
					{TECH_ICONS.map(({icon, label}) => (
						<div key={label} className={`${classes.iconWrapper} ${classes.tech}`}>
							{icon}
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
				author
			}
		}
	}
`;
