import React from 'react';
import {PageProps, graphql, useStaticQuery} from 'gatsby';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import Layout from 'components/Layout/Layout';
import classes from './about.module.scss';

const mapBookToElement = ({author, link, title}: GatsbyTypes.SiteSiteMetadataBooksList) => (
	<li key={title}>
		<a target="_blank" rel="noopener noreferrer" href={link}>
			{title}
		</a>
		&nbsp;-<i>{author}</i>
	</li>
);

const mapMovieToElement = ({link, title, year}: GatsbyTypes.SiteSiteMetadataMoviesList) => (
	<li key={title}>
		<a target="_blank" rel="noopener noreferrer" href={link}>
			{title}
		</a>
		&nbsp;{year}
	</li>
);

const mapMusicToElement = ({band, song, link}: GatsbyTypes.SiteSiteMetadataMusicList) => (
	<li key={band}>
		<a target="_blank" rel="noopener noreferrer" href={link}>
			{song}
		</a>
		&nbsp;-{band}
	</li>
);

const mapPersonToElement = (person: string) => <li key={person}>{person}</li>;

const BlogPage = ({uri}: PageProps) => {
	const {author, designations, moviesList, booksList, peopleList, musicList} = useStaticQuery<GatsbyTypes.Query>(query)
		.site?.siteMetadata as GatsbyTypes.SiteSiteMetadata;

	const movieElements = moviesList?.map(m => mapMovieToElement(m as GatsbyTypes.SiteSiteMetadataMoviesList));
	const bookElements = booksList?.map(b => mapBookToElement(b as GatsbyTypes.SiteSiteMetadataBooksList));
	const MusicElements = musicList?.map(m => mapMusicToElement(m as GatsbyTypes.SiteSiteMetadataMusicList));
	const PersonElements = peopleList?.map(p => mapPersonToElement(p as string));

	const extraInformation = [
		{title: 'Some of my favorite books', elements: bookElements},
		{title: 'Some of my favorite movies', elements: movieElements},
		{title: 'Some of my favorite songs', elements: MusicElements},
		{title: 'Some people I admire', elements: PersonElements},
	];

	return (
		<Layout uri={uri}>
			<Container className="d-flex flex-column align-items-center">
				<Image className={classes.image} roundedCircle src={`/pictures/profile.png`} alt="" />
				<article className="pt-2 text-justify">
					<div className={classes.designations}>
						{designations?.map((d, i) => (
							<div key={d}>
								&nbsp;
								<span>
									<b>{d}</b>
								</span>
								&nbsp;
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
						In my leisure time, I'm usually riding my bike, chilling with friends (before Covid-19 at least), playing
						some video-games, and of course, hitting the keyboard.
					</p>
					<p className="">
						One of my other passions is to learn new stuff (I know, it sounds cliché). I'm usually learning something,
						be it tech-related, or something random such as Mongol history (I love history, BTW).
					</p>
				</article>
				<article className="w-100 m-auto">
					<hr />
					<p className="text-justify mt-2">
						I truly think you don't only hire a developer, but a human being. So in case you're interested, here's some
						extra information about me.
					</p>
					<div className="d-flex flex-column flex-xl-row flex-wrap">
						{extraInformation.map(el => (
							<div key={el.title} className={classes.favorite_list}>
								<p className="font-weight-bolder mb-2">{el.title}</p>
								<ul>{el.elements}</ul>
							</div>
						))}
					</div>
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
				musicList {
					band
					song
					link
				}
				peopleList
			}
		}
	}
`;
