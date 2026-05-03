import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purab Bhatia | Pokémon Portfolio — AI/ML Engineer",
  description:
    "Explore Purab Bhatia's gamified Pokémon-themed portfolio. A B.Tech CSE (AI & ML) student specializing in machine learning, deep learning, and creative engineering.",
  keywords: [
    "Purab Bhatia",
    "portfolio",
    "developer",
    "AI",
    "machine learning",
    "deep learning",
    "Pokemon",
    "gamified",
    "Next.js",
  ],
  authors: [{ name: "Purab Bhatia" }],
  openGraph: {
    title: "Purab Bhatia | Pokémon Portfolio",
    description:
      "A gamified Pokémon-themed portfolio showcasing AI/ML skills, projects, and achievements.",
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
