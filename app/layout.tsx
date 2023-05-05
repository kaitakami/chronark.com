import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "Kai Takami",
		template: "%s | Kai Takami",
	},
	description: "Full Stack developer passionate about building great software",
	openGraph: {
		title: "Kai Takami",
		description:
			"Full stack developer passionate about building great software",
		url: "https://hire.kaitakami.dev",
		siteName: "hire.kaitakami.dev",
		images: [
			{
				url: "https://hire.kaitakami.dev.com/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Kai Takami",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<body
				className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
					}`}
			>
				<Analytics />
				{children}
			</body>
		</html>
	);
}
