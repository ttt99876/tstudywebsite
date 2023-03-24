export const SITE = {
	title: 'ttt学习文档',
	description: '用于记录学习时候的笔记',
	defaultLanguage: 'en-us',
} as const;


export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'logo图标',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'前端': [
			{ text: '简介', link: 'en/00-introduction' },
			{ text: 'html', link: 'en/01-html-page' },
			{ text: 'xml', link: 'en/02-xml-page' },
			{ text: 'css', link: 'en/03-css-page' },
			{ text: 'js', link: 'en/04-js-page' },
			{ text: 'vue2', link: 'en/05-vue2-page' },
			{ text: 'react', link: 'en/06-react-page' },
			{ text: 'ts', link: 'en/07-ts-page' },
		],
		'后端': [
			{ text: 'java入门（安装和使用）', link: 'en/11-java00-page' },
			{ text: 'java入门（基本语法）', link: 'en/11-java01-page' },
			{ text: 'java入门（高级语法）', link: 'en/11-java02-page' },
			{ text: 'javaWeb', link: 'en/12-javaweb-page' },
			{ text: '数据库（一）', link: 'en/13-database1-page' },
			{ text: '数据库（二）', link: 'en/13-database2-page' },
			{ text: 'JDBC', link: 'en/14-jdbc-page' },
			{ text: 'Tomcat', link: 'en/15-tomcat-page' },
			{ text: 'spring-boot', link: 'en/20-spring-boot-page' },
			{ text: 'py', link: 'en/20-py-page' },
		],
		'docker': [
			{ text: 'docker安装和使用', link: 'en/20-docker-install-page' },
			{ text: 'docker安装mysql并使用', link: 'en/20-docker-mysql-page' },
		],
	},
};
