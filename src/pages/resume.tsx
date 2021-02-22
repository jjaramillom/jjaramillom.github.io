import React from 'react';
import {PageProps} from 'gatsby';
import Layout from 'components/Layout/Layout';

const ResumePage = ({uri}: PageProps) => {
	return (
		<Layout uri={uri}>
			<h1>Resume</h1>
		</Layout>
	);
};

export default ResumePage;
