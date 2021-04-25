/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	pathPrefix: '/jjaramillom.github.io',
	siteMetadata: {
		title: 'personal-site',
		description: 'A colombian software developer living in Munich, Germany.',
		url: 'https://github.com/jjaramillom',
		siteUrl: `https://github.com/jjaramillom`,
		twitterUsername: '@jacobo119',
		author: 'Jacobo Jaramillo',
		keywords: [
			'jacobo',
			'jaramillo',
			'software',
			'engineer',
			'front',
			'fullstack',
			'javascript',
			'typescript',
			'react',
			'germany',
			'colombia',
		],
		designations: ['TypeScript lover', 'Your fullstack guy', 'Avid learner', 'Gamer', 'Tennis player'],
		booksList: [
			{
				title: `The Analyst`,
				author: `John Katzenbach`,
				link: `https://www.goodreads.com/el/book/show/67931.The_Analyst`,
			},
			{
				title: `1984`,
				author: `George Orwell`,
				link: `https://www.goodreads.com/book/show/40961427-1984?ac=1&from_search=true&qid=zbxFQfErFq&rank=1`,
			},
			{
				title: `Blindness`,
				author: `José Saramago`,
				link: `https://www.goodreads.com/book/show/40495148-blindness`,
			},
		],
		moviesList: [
			{title: 'Interstellar', year: 2014, link: 'https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0'},
			{title: 'Incendies', year: 2010, link: 'https://www.imdb.com/title/tt1255953/?ref_=rt_li_tt'},
			{
				title: 'Eternal Sunshine of the Spotless Mind',
				year: 2004,
				link: 'https://www.imdb.com/title/tt0338013/?ref_=rt_li_tt',
			},
		],
		musicList: [
			{
				band: 'AC/DC',
				song: 'You Shook Me All Night Long',
				link: 'https://youtu.be/zakKvbIQ28o',
			},
			{
				band: 'The Doors',
				song: 'Light My Fire',
				link: 'https://youtu.be/mbj1RFaoyLk',
			},
			{
				band: 'Pink Floyd',
				song: 'Hey you',
				link: 'https://youtu.be/c-MU_5VkjtE',
			},
			{
				band: 'Nina Simone',
				song: 'Feeling Good',
				link: 'https://youtu.be/BNMKGYiJpvg',
			},
		],
		peopleList: ['Linus Torvalds', 'Richard Branson', 'My dad'],
	},
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-page-transitions`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-relative-images`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`,
				ignore: [`**/__generated__`],
			},
		},
		{
			resolve: `gatsby-plugin-typegen`,
			options: {
				outputPath: `src/__generated__/gatsby-types.d.ts`,
				emitSchema: {
					'src/__generated__/gatsby-introspection.json': true,
				},
				emitPluginDocuments: {
					'src/__generated__/gatsby-plugin-documents.graphql': true,
				},
			},
		},
	],
};
