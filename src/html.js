import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta name="google-site-verification" content="T5Pi7R7GuyzgnmlYenOkLVbQZ3Hn-p4gfzkteQ0S69k" />
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta httpEquiv="Cache-control" content="public, max-age=0, must-revalidate" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{__html: props.body}} />
				{props.postBodyComponents}
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
};
