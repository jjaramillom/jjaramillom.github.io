const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  })
}

module.exports.onCreateNode = ({node, actions: {createNodeField}}) => {
	// only take the "blogs" files
	if (node.internal.type === 'MarkdownRemark') {
		const slug = path.basename(node.fileAbsolutePath, '.md');
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		});
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
