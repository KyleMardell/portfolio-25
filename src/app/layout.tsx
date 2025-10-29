import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { Metadata } from "next";

import AOSInit from "./aos-init";

export const metadata: Metadata = {
  metadataBase: new URL("https://kylemardell.me"),
  title: "Kyle Mardell | Junior Full Stack Web Developer",
  description:
    "I'm Kyle Mardell, a junior full-stack developer based in Manchester. I build responsive web apps with React, Django, and PostgreSQL.",
  keywords: [
    "Kyle Mardell",
    "Web Developer Manchester",
    "Full Stack Developer",
    "React Developer",
    "Django Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Kyle Mardell", url: "https://kylemardell.me" }],
  openGraph: {
    title: "Kyle Mardell | Junior Full Stack Web Developer",
    description:
      "Full-stack developer based in Manchester building web apps with React, Django, and PostgreSQL.",
    url: "https://kylemardell.me",
    siteName: "Kyle Mardell Portfolio",
    images: [
      {
        url: "https://kylemardell.me/face-animation/face2.png",
        width: 1200,
        height: 630,
        alt: "Kyle Mardell - Junior Full Stack Web Developer",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Mardell | Junior Full Stack Web Developer",
    description:
      "Portfolio website of Kyle Mardell, full-stack web developer based in Manchester.",
    images: ["https://kylemardell.me/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Rowdies:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
