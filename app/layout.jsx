import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rome Web Awards",
  description:
    "The management of the Rome Web Awards, which confirms itself as the web awards event with the richest awards in the world , is pleased to announce the official list of works selected for the fifth edition of the Italian Web Oscars, the 'Web Golden Stars' .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
