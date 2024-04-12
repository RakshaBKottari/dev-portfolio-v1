import * as icon  from 'react-icons/si'

const profile = {
	name: 'Raksha B Kottari',
	role: 'Front End Developer',
	description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facere, itaque excepturi, necessitatibus cum ex nisi.',
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com' },
	{ icon: icon.SiCodepen, link: 'https://www.medium.com/' },
	{ icon: icon.SiTwitter, link: 'https://www.twitter.com/' },
	{ icon: icon.SiInstagram, link: 'https://www.instagram.com/' },
];

const brand = 'Raksha B Kottari'


const work = [
	{
		name: 'Todo app',
		description: 'Phasellus metus mi, scelerisque eu volutpat non, posuere et massa. Nunc hendrerit, augue non fringilla mattis.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'E-Commerce',
		description: 'Nullam id mauris auctor, sollicitudin sapien id, sagittis turpis proin et nunc sempe, venenatis erat.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
]


const stack = [
	{
		name: 'Front End',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiBootstrap, name: 'Bootstrap', },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiTypescript, name: 'Typescript' },
			{ icon: icon.SiReact, name: 'React', },
		],
	}
]

const contact = {
	description: 'Feel free to contact me!',
	email: 'example@email.com'
}

export { profile, social, work, stack, contact, brand }