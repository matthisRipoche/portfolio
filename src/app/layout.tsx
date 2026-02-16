import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.scss";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Matthis Ripoche - Portfolio",
  description: "Portfolio de Matthis Ripoche, Développeur Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
