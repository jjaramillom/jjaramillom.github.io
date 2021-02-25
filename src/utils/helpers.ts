type ImageMap = {
	[key: string]: GatsbyTypes.ImageSharpFluid;
};

export default {
	getImageMap: (images: readonly GatsbyTypes.FileEdge[], regex: RegExp): ImageMap => {
		return images.reduce((map: any, image) => {
			const slug = image.node.relativePath.match(regex)?.[0] ?? '';

			map[slug] = image.node.childImageSharp?.fluid as GatsbyTypes.ImageSharpFluid;
			return map;
		}, {});
	},
};
