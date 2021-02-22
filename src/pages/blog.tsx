import React from 'react';
import {PageProps} from 'gatsby';

import Layout from 'components/Layout/Layout';

const BlogPage = ({uri}: PageProps) => {
	return (
		<Layout uri={uri}>
			<h1>Blog</h1>
		</Layout>
	);
};
export default BlogPage;
