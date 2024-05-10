import { Inter } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import headerImg from "../assets/images/header-img.png";

import faceBookImg from "../assets/images/facebook.jpg";
import twitterImg from "../assets/images/twitter.jpg";
import youtubeImg from "../assets/images/youtube.jpg";

import SideBarCard from "@/components/SideBarCard";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DonateForm from "@/components/DonateForm";

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
          <Header />
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
                title="Donate!"
                bottomLink={{ content: "", link: "/" }}
              >
                <DonateForm />
              </SideBarCard>
              <SideBarCard
                title="Privacy"
                bottomLink={{ content: "Privacy", link: "/privacy" }}
              ></SideBarCard>
              <SideBarCard
                title="Administration"
                bottomLink={{ content: "", link: "/" }}
              >
                <div className="flex flex-col gap-y-6 self-start">
                  <div className="flex flex-col gap-y-1">
                    <p className="text-white/65 text-xs font-light">
                      Nome utente
                    </p>
                    <input
                      type="text"
                      className="py-[1px] px-2 outline-none text-sm max-w-[180px]"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-white/65 text-xs font-light">Password</p>
                    <input
                      type="text"
                      className="py-[1px] px-2 outline-none text-sm max-w-[180px]"
                    />
                  </div>
                  <div className="flex gap-x-2">
                    {" "}
                    <p className="text-white/65 text-xs font-light">
                      Ricordami
                    </p>
                    <input type="checkbox" />
                  </div>
                  <button className="shadow-black shadow-md text-sm border-none bg-yellow-400 py-[6px] px-3 rounded-md font-normal self-start">
                    Accedi
                  </button>
                </div>
              </SideBarCard>
            </div>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
