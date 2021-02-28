import BlogPage from '@pages/blog';
import React from 'react';
import {Link} from 'gatsby';

import Card from 'components/Card/Card';
import classes from './BlogCard.module.scss';

type Props = {
	blogPath: string;
	title: string;
	date: string;
};

const BlogCard = ({children, title, date, blogPath}: React.PropsWithChildren<Props>) => (
	<Card className={classes.card}>
		<Link to={blogPath} className={classes.header}>
			<h1>{title}</h1>
			<h2>{date}</h2>
		</Link>

		{children}
	</Card>
);
BlogCard.body = ({children}: React.PropsWithChildren<{}>) => <p className="mb-0 text-justify">{children}</p>;

export default BlogCard;
