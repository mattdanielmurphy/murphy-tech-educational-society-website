import "./globals.css"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
})

export const metadata: Metadata = {
	title: {
		default: "Atlas Educational Society",
		template: "%s | Atlas Educational Society",
	},
	description: "A nonprofit society dedicated to publishing free educational, recreational, and socially beneficial software for the general public.",
	keywords: ["educational software", "nonprofit", "free apps", "social benefit", "Alberta"],
	openGraph: {
		title: "Atlas Educational Society",
		description: "Free educational software for the public good — no ads, no purchases, no tracking.",
		type: "website",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.variable}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
