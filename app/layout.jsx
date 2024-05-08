import { Inter } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import headerImg from "../assets/images/header-img.png";
import Link from "next/link";

import faceBookImg from "../assets/images/facebook.jpg";
import twitterImg from "../assets/images/twitter.jpg";
import youtubeImg from "../assets/images/youtube.jpg";

import SideBarCard from "@/components/SideBarCard";

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
        <main className="h-[100vh] w-[100vw]  flex flex-col overflow-y-scroll">
          <div className="HEADER w-full flex items-center justify-center">
            <Image src={headerImg} alt="rome web award logo" />
          </div>
          <nav className="NAV w-full bg-slate-600/40 flex pt-1 justify-around relative">
            <ul className="flex gap-x-4 items-center">
              <Link
                href="/"
                className="text-white text-xs p-2 rounded-tr-md hover:bg-slate-950/40"
              >
                Homepage
              </Link>
              <Link
                href="/news"
                className="text-white text-xs p-2  rounded-tr-md hover:bg-slate-950/40"
              >
                Notizie
              </Link>

              <div className="nav-item p-2 rounded-tr-md hover:bg-slate-950/40 relative">
                <p className="text-white  text-xs">RWA</p>
                <ul className="nav-item-list flex flex-col bg-slate-950/70 absolute bottom-[-96px] left-0 min-w-[120px]">
                  <Link
                    href="/who-we-are"
                    className="text-white text-xs p-2  rounded-tr-md hover:bg-slate-950/40"
                  >
                    Chi siamo
                  </Link>
                  <Link
                    href="/what-is-rwa"
                    className="text-white text-xs p-2  rounded-tr-md hover:bg-slate-950/40"
                  >
                    {`Cos'è il RWA`}
                  </Link>
                  <Link
                    href="/iwv"
                    className="text-white text-xs p-2  rounded-tr-md hover:bg-slate-950/40"
                  >
                    Associazione IWV
                  </Link>
                </ul>
              </div>
              <div className="nav-item p-2 rounded-tr-md hover:bg-slate-950/40 relative">
                <p className="text-white  text-xs">Partners</p>
                <ul className="nav-item-list flex flex-col bg-slate-950/70 absolute bottom-[-96px] left-0 min-w-[170px]">
                  <Link
                    href="/festival-partners"
                    className="text-white text-xs p-2  rounded-tr-md hover:bg-slate-950/40"
                  >
                    Festival Partners
                  </Link>
                  <Link
                    href="/media-partners"
                    className="text-white text-xs p-2  rounded-tr-md hover:bg-slate-950/40"
                  >
                    Media Partners
                  </Link>
                  <Link
                    href="/partnership-agreement"
                    className="text-white text-xs p-2  rounded-tr-md hover:bg-slate-950/40"
                  >
                    Accordo di Partnership
                  </Link>
                </ul>
              </div>

              <Link
                href="/regulation"
                className="text-white text-xs p-2  rounded-tr-md hover:bg-slate-950/40"
              >
                Regolamento
              </Link>
              <div className="nav-item p-2 rounded-tr-md hover:bg-slate-950/40 relative">
                <p className="text-white  text-xs">Iscrizione</p>
                <ul className="nav-item-list flex flex-col bg-slate-950/70 absolute bottom-[-64px] left-0 min-w-[170px]">
                  <Link
                    href="/registration-process"
                    className="text-white text-xs p-2  rounded-tr-md hover:bg-slate-950/40"
                  >
                    Processo di Iscrizione
                  </Link>
                  <Link
                    href="/iwv-association-statute"
                    className="text-white text-xs p-2  rounded-tr-md hover:bg-slate-950/40"
                  >
                    Statuto Associazione IWV
                  </Link>
                </ul>
              </div>
            </ul>
          </nav>
          <div className="w-full ml-2 min-w-[780px] max-w-[970px] self-center bg-[#9f9688] px-2 py-8 flex gap-x-16">
            <div className="flex flex-col gap-y-4">
              <SideBarCard
                title="Contatti"
                bottomLink={{ content: "info@romewebawards.it", link: "/" }}
              >
                <div className="flex justify-center gap-x-4 w-full">
                  <Image src={faceBookImg} alt="facebook" />
                  <Image src={youtubeImg} alt="facebook" />
                  <Image src={twitterImg} alt="facebook" />
                </div>
              </SideBarCard>
              <SideBarCard
                title="Privacy"
                bottomLink={{ content: "Privacy", link: "/" }}
              ></SideBarCard>
            </div>
            {children}
          </div>
          <div className="bg-[#dab54d]/70 w-full ml-2  min-w-[780px] self-center max-w-[970px] min-h-[6vh] flex flex-col items-center justify-center py-4">
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
