import React from 'react';
import {PageProps} from 'gatsby';
import Container from 'react-bootstrap/Container';

import Layout from 'components/Layout/Layout';
import Title from 'components/Title/Title';
import classes from './404.module.scss';

const BlogPage = () => {
	return (
		<Layout uri="">
			<Container>
				<Title className={classes.title}>
					<div>404</div>&nbsp; Sorry, there's nothing here. But... maybe later will be :)
				</Title>
			</Container>
		</Layout>
	);
};
export default BlogPage;
