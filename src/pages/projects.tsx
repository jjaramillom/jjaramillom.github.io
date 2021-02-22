import React from 'react';
import {PageProps} from 'gatsby';
import Layout from 'components/Layout/Layout';

const ProjectsPage = ({uri}: PageProps) => {
	return (
		<Layout uri={uri}>
			<h1>Projects</h1>
		</Layout>
	);
};

export default ProjectsPage;
