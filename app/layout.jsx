import { Inter } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import headerImg from "../assets/images/header-img.png";
import Link from "next/link";

import faceBookImg from "../assets/images/facebook.jpg";
import twitterImg from "../assets/images/twitter.jpg";
import youtubeImg from "../assets/images/youtube.jpg";

import SideBarCard from "@/components/SideBarCard";

import { IoMenu } from "react-icons/io5";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rome Web Awards",
  description:
    "The management of the Rome Web Awards, which confirms itself as the web awards event with the richest awards in the world , is pleased to announce the official list of works selected for the fifth edition of the Italian Web Oscars, the 'Web Golden Stars' .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="CONTAINER h-[100vh] w-[100vw]  flex flex-col overflow-y-scroll">
          <div className="HEADER w-full flex items-center justify-center">
            <Image src={headerImg} alt="rome web award logo" />
          </div>
          <Nav />
          <div className="MAIN w-full ml-2 min-w-[780px] max-w-[970px] self-center bg-[#9f9688] px-2 py-8 flex gap-x-16">
            <div className="flex flex-col gap-y-4">
              <SideBarCard
                title="Contatti"
                bottomLink={{
                  content: "info@romewebawards.it",
                  link: "mailto:info@romewebawards.it",
                }}
              >
                <div className="flex justify-center gap-x-4 w-full">
                  <Image src={faceBookImg} alt="facebook" />
                  <Image src={youtubeImg} alt="facebook" />
                  <Image src={twitterImg} alt="facebook" />
                </div>
              </SideBarCard>
              <SideBarCard
                title="Privacy"
                bottomLink={{ content: "Privacy", link: "/privacy" }}
              ></SideBarCard>
            </div>
            {children}
          </div>
          <div className="FOOTER bg-[#dab54d]/70 w-full ml-2  min-w-[780px] self-center max-w-[970px] min-h-[6vh] flex flex-col items-center justify-center py-4">
            <p className="text-xs">
              Rome Web Awards - Copyright © 2013. All Rights Reserved.
            </p>
            <p className="text-xs">
              <span className="underline">Joomla template</span> created with
              Artisteer.
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
