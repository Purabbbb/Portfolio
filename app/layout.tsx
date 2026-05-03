import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Bhati | Pokémon Portfolio — Full-Stack Developer & AI Engineer",
  description:
    "Explore Aryan Bhati's gamified Pokémon-themed portfolio. A Computer Science student specializing in AI/ML, full-stack development, and creative engineering.",
  keywords: [
    "Aryan Bhati",
    "portfolio",
    "developer",
    "AI",
    "machine learning",
    "full-stack",
    "Pokemon",
    "gamified",
    "Next.js",
  ],
  authors: [{ name: "Aryan Bhati" }],
  openGraph: {
    title: "Aryan Bhati | Pokémon Portfolio",
    description:
      "A gamified Pokémon-themed portfolio showcasing skills, projects, and achievements.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
