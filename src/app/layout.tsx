import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={noto.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
