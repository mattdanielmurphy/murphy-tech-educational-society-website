import "./globals.css"

import { Geist, Geist_Mono } from "next/font/google"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { Metadata } from "next"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Atlas Educational Society",
	description: "To publish, maintain, and promote free educational, recreational, and socially beneficial software applications and games.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
