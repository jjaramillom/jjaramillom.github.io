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

const requiresTemplate = [`blog`];
const getContentType = node => node.fileAbsolutePath.match(/content(.*)/)[0].split(`/`)[1];
//Removes the repeated name coming from folder. E.g. /myblog/myblog.tsx
const cleanSlug = slug => {
	const parsedSlug = slug.split('/');
	if (parsedSlug[1] === parsedSlug[2]) {
		return `/${parsedSlug[1]}/`;
	}
	return slug;
};

module.exports.onCreateNode = ({node, getNode, actions: {createNodeField}}) => {
	if (node.internal.type === 'MarkdownRemark') {
		const contentType = getContentType(node);
		const path = `content/${contentType}/`;
		const slug = createFilePath({node, getNode, basePath: path});
		createNodeField({node, name: `slug`, value: `/${contentType}${cleanSlug(slug)}`});
		if (requiresTemplate.includes(contentType)) {
			createNodeField({
				node,
				name: `templatePath`,
				value: `./src/templates/${contentType}.tsx`,
			});
		}
	}
};

module.exports.createPages = async ({graphql, actions}) => {
	const {createPage} = actions;
	// get markdown data
	const response = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
							templatePath
						}
					}
				}
			}
		}
	`);
	// create new pages
	response.data.allMarkdownRemark.edges.forEach(({node}) => {
		const contentType = node.fields.slug.split(`/`)[1];
		if (requiresTemplate.includes(contentType)) {
			createPage({
				component: path.resolve(node.fields.templatePath),
				path: node.fields.slug,
				context: {
					slug: node.fields.slug,
					templatePath: node.fields.templatePath,
				},
			});
		}
	});
};
