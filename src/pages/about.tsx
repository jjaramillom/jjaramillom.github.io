import React from 'react';
import {PageProps, graphql, useStaticQuery} from 'gatsby';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import Layout from 'components/Layout/Layout';
import classes from './about.module.scss';

const mapBookToElement = ({author, link, title}: GatsbyTypes.SiteSiteMetadataBooksList) => (
	<li key={title}>
		<a className={classes.link} target="_blank" rel="noopener noreferrer" href={link}>
			{title}
		</a>
		&nbsp;-<i>{author}</i>
	</li>
);

const mapMovieToElement = ({link, title, year}: GatsbyTypes.SiteSiteMetadataMoviesList) => (
	<li key={title}>
		<a className={classes.link} target="_blank" rel="noopener noreferrer" href={link}>
			{title}
		</a>
		&nbsp;({year})
	</li>
);

const BlogPage = ({uri}: PageProps) => {
	const {author, designations, moviesList, booksList} = useStaticQuery<GatsbyTypes.Query>(query).site
		?.siteMetadata as GatsbyTypes.SiteSiteMetadata;

	const movieElements = moviesList?.map(m => mapMovieToElement(m as GatsbyTypes.SiteSiteMetadataMoviesList));
	const bookElements = booksList?.map(b => mapBookToElement(b as GatsbyTypes.SiteSiteMetadataBooksList));

	return (
		<Layout uri={uri}>
			<Container className="d-flex flex-column align-items-center">
				<Image className={classes.image} roundedCircle src={`/pictures/profile.png`} alt="" />
				<article className="pt-2 text-justify">
					<div className={classes.designations}>
						{designations?.map((d, i) => (
							<div key={d}>
								&nbsp;<span>{d}</span>&nbsp;
								{i < designations.length - 1 ? <span className={classes.pipe}>|</span> : null}
							</div>
						))}
					</div>
					<p className="mt-4 pt-2">
						Hello there! My name is <b>{`${author?.name} ${author?.lastName}`}</b>, an Electronic Engineer turned
						Software Developer. I have been in Germany since 2017, when I came to study a MSc. in Electrical Engineering
						and IT. For the last 3 years I have been working in software development in the areas of IoT, Machine
						Learning, and Telecommunications. I consider myself to be a disciplined and resilient person, always keen to
						learn and open to get involved in different areas.
					</p>
					<p className="">
						In my leisure time, I'm usually riding my bike, chilling with friends (before Corona
						<span aria-label="sad emoji" role="img">
							😢
						</span>
						), playing some video-games, and of course, hitting the keyboard.
					</p>
				</article>
				<article className="w-100 m-auto">
					<hr />
					<p className="text-justify mt-2">
						I truly think you don't only hire a developer, but a human being. So in case you're interested, here's some
						extra information about me.
					</p>
					<p className="text-justify font-weight-bolder mb-3">Some of my favorite books:</p>
					<ul className={classes.book_list}>{bookElements}</ul>
					<p className="text-justify font-weight-bolder mb-3">Some of my favorite movies:</p>
					<ul className={classes.book_list}>{movieElements}</ul>
				</article>
			</Container>
		</Layout>
	);
};
export default BlogPage;

const query = graphql`
	query {
		site {
			siteMetadata {
				author {
					name
					lastName
				}
				designations
				booksList {
					title
					author
					link
				}
				moviesList {
					title
					link
					year
				}
			}
		}
	}
`;
