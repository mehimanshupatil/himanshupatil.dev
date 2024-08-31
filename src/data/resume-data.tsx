import {
	AmbitLogo,
	BarepapersLogo,
	CDGOLogo,
	ClevertechLogo,
	ConsultlyLogo,
	EvercastLogo,
	Howdy,
	JarockiMeLogo,
	Minimal,
	MobileVikingsLogo,
	MonitoLogo,
	NSNLogo,
	ParabolLogo,
	TastyCloudLogo,
	YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
	name: "Himanshu Patil",
	initials: "HP",
	location: "Mumbai, India",
	locationLink: "",
	about:
		"Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
	summary:
		"As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide.",
	avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
	personalWebsiteUrl: "https://himanshupatil.dev",
	contact: {
		email: "dev@himanshupatil.dev",
		tel: "+918237732718",
		social: [
			{
				name: "GitHub",
				url: "https://github.com/mehimanshupatil",
				icon: GitHubIcon,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/mehimanshupatil/",
				icon: LinkedInIcon,
			},
			{
				name: "X",
				url: "https://x.com/mehimanshupatil",
				icon: XIcon,
			},
		],
	},
	education: [
		{
			school: "University of Mumbai ",
			degree: "Bachelor's Degree in Information Technology",
			start: "2016",
			end: "2019",
		},
		{
			school: "Maharashtra State Board of Technical Education",
			degree: "Diploma in Computer Technology",
			start: "2013",
			end: "2016",
		},
	],
	work: [
		{
			company: "Canvs",
			link: "https://canvs.in/",
			badges: ["Remote First"],
			title: "Fullstack Developer",
			logo: ConsultlyLogo,
			start: "2021",
			end: null,
			description:
				"Leading the development of the Film.io platform. Technologies: React, TypeScript, Node.js",
		},

		{
			company: "Bizotics",
			link: "https://bizotics.com",
			badges: [],
			title: "Frontend Developer",
			logo: NSNLogo,
			start: "2019",
			end: "2021",
			description: "Developed and tested software for LTE base stations",
		},
	],
	skills: ["JavaScript", "TypeScript", "React/Next.js", "Angular", "Node.js"],
	projects: [
		{
			title: "Parabol",
			techStack: [
				"Full Stack Developer",
				"TypeScript",
				"React",
				"Node.js",
				"GraphQL",
			],
			description:
				"The Agile meeting co-pilot that delivers better meetings with less effort",
			logo: ParabolLogo,
			link: {
				label: "github.com",
				href: "https://parabol.co/",
			},
		},
		{
			title: "Evercast",
			techStack: [
				"Lead Frontend Developer",
				"TypeScript",
				"React",
				"Node.js",
				"GraphQL",
			],
			description:
				"Creative collaboration platform that combines video conferencing and HD media streaming",
			logo: EvercastLogo,
			link: {
				label: "evercast.us",
				href: "https://www.evercast.us/",
			},
		},
		{
			title: "Consultly",
			techStack: [
				"Side Project",
				"TypeScript",
				"Next.js",
				"Vite",
				"GraphQL",
				"WebRTC",
			],
			description: "A platform to build and grow your online business",
			logo: ConsultlyLogo,
			link: {
				label: "consultly.com",
				href: "https://consultly.com/",
			},
		},
		{
			title: "Monito",
			techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
			description:
				"Browser extension that records everything happening in a web application",
			logo: MonitoLogo,
			link: {
				label: "monito.dev",
				href: "https://monito.dev/",
			},
		},
		{
			title: "Jarocki.me",
			techStack: ["Side Project", "Next.js", "MDX"],
			description:
				"Personal website and blog. Built with Next.js and Notion API",
			logo: JarockiMeLogo,
			link: {
				label: "github.com",
				href: "https://jarocki.me/",
			},
		},
		{
			title: "Minimal",
			techStack: ["Side Project", "Next.js", "Puppeteer"],
			description:
				"Minimalist calendars, habit trackers, and planners generator",
			logo: Minimal,
			link: {
				label: "useminimal.com",
				href: "https://useminimal.com/",
			},
		},
		{
			title: "Barepapers",
			techStack: ["Side Project", "Next.js", "Puppeteer"],
			description:
				"Generates beautiful wallpapers using random shapes and gradients",
			logo: BarepapersLogo,
			link: {
				label: "barepapers.com",
				href: "https://barepapers.com/",
			},
		},
		{
			title: "Year progress",
			techStack: ["Side Project", "TypeScript", "Next.js"],
			description: "Tracks current year progress and displays a countdown",
			logo: YearProgressLogo,
			link: {
				label: "getyearprogress.com",
				href: "https://getyearprogress.com/",
			},
		},
		{
			title: "Mobile Vikings",
			techStack: ["Lead Android Developer", "Android", "Kotlin"],
			description:
				"Android application for leading virtual mobile operator in Poland",
			logo: MobileVikingsLogo,
			link: {
				label: "mobilevikings.pl",
				href: "https://mobilevikings.pl/",
			},
		},
		{
			title: "Howdy",
			techStack: ["Lead Android Developer", "Android", "Kotlin"],
			description: "Howdy is a place for joining communities you care about",
			logo: Howdy,
			link: {
				label: "play.google.com",
				href: "https://howdy.co/",
			},
		},
		{
			title: "Tastycloud",
			techStack: ["Lead Android Developer", "Android", "Kotlin"],
			description:
				"Android application for managing and displaying restaurant menus in kiosk mode",
			logo: TastyCloudLogo,
			link: {
				label: "tastycloud.fr",
				href: "https://www.tastycloud.fr/",
			},
		},
		{
			title: "Canal Digital GO",
			techStack: ["Lead Android Developer", "Android", "Kotlin"],
			description:
				"Video streaming mobile application for Canal Digital subscribers",
			logo: CDGOLogo,
		},
	],
} as const;
