import React, {useEffect, useState} from 'react';
import {graphql, useStaticQuery, PageProps} from 'gatsby';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithubSquare, IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare, faIdCard} from '@fortawesome/free-solid-svg-icons';
import cloneDeep from 'lodash/cloneDeep';

import Layout from 'components/Layout/Layout';
import Typewriter from 'components/Typewriter/Typewriter';
import classes from './index.module.scss';

type IconConfig = {
	icon: IconDefinition;
	link: string;
	label: string;
	cssClasses: string[];
};

const DEFAULT_ICONS: IconConfig[] = [
	{
		icon: faGithubSquare,
		label: 'Github',
		link: 'https://www.github.com/jjaramillom',
		cssClasses: [classes.github],
	},
	{
		icon: faLinkedin,
		label: 'LinkedIn',
		link: 'https://www.linkedin.com/in/jjaramillom',
		cssClasses: [classes.linkedin],
	},
	{icon: faEnvelopeSquare, label: 'Send me an email', link: 'mailto:jjaramillom@unal.edu.co', cssClasses: ['']},
	{icon: faIdCard, label: 'Download my CV', link: '', cssClasses: ['']}, // ../../resume.pdf
];

const IndexPage = ({uri}: PageProps) => {
	const siteMetadata = useStaticQuery<GatsbyTypes.Query>(query).site?.siteMetadata;

	const [icons, setIcons] = useState<IconConfig[]>(DEFAULT_ICONS);

	useEffect(() => {
		icons.forEach((_, i) => {
			setTimeout(() => {
				setIcons(icons => {
					const iconsCopy = cloneDeep(icons);
					iconsCopy[i].cssClasses = [...icons[i].cssClasses, classes.animated];
					return iconsCopy;
				});
			}, i * 200);
		});
	}, []);

	return (
		<Layout uri={uri}>
			<Container className="mt-3">
				<h1 className={classes.name_title}>
					<span>{siteMetadata?.author?.name}</span> <span>{siteMetadata?.author?.lastName}</span>
				</h1>
				<Typewriter />
				<hr className="my-3 w-100" />
				<div className="d-flex flex-row justify-content-center mt-5">
					{icons.map(({icon, link, cssClasses, label}) => (
						<OverlayTrigger
							placement="bottom"
							overlay={<div className={`mt-3 ${classes.tooltip} ${cssClasses?.join(' ')}`} id={link}>{`${label}`}</div>}
							key={link}
						>
							<a href={link} className={classes.icon_wrapper} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon aria-hidden className={`${classes.icon} ${cssClasses?.join(' ')}`} icon={icon} />
							</a>
						</OverlayTrigger>
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
