const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({actions}) => {
	actions.setWebpackConfig({
		resolve: {
			plugins: [new TsconfigPathsPlugin()],
		},
	});
};

const requiresTemplate = [`blog`, `projects`];
const getContentType = node => node.fileAbsolutePath.match(/content(.*)/)[0].split(`/`)[1];

module.exports.onCreateNode = ({node, getNode, actions: {createNodeField}}) => {
	if (node.internal.type === 'MarkdownRemark') {
		const contentType = getContentType(node);
		const path = `content/${contentType}/`;
		const slug = createFilePath({node, getNode, basePath: path});
		createNodeField({node, name: `slug`, value: `/${contentType}${slug}`});
		if (requiresTemplate.includes(contentType)) {
			createNodeField({
				node,
				name: `templatePath`,
				value: `./src/templates/${contentType}-post.js`,
			});
		}
	}
};

module.exports.createPages = async ({graphql, actions}) => {
	// const {createPage} = actions;
	// // get path to template
	// const blogTemplate = path.resolve('./src/templates/Blog.tsx');
	// // get markdown data
	// const response = await graphql(`
	// 	query {
	// 		allMarkdownRemark {
	// 			edges {
	// 				node {
	// 					fields {
	// 						slug
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `);
	// // create new pages
	// response.data.allMarkdownRemark.edges.forEach(edge => {
	// 	createPage({
	// 		component: blogTemplate,
	// 		path: `/blog/${edge.node.fields.slug}`,
	// 		context: {
	// 			slug: edge.node.fields.slug,
	// 		},
	// 	});
	// });
};
