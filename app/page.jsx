import Image from "next/image";
import headerImg from "../assets/images/header-img.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] overflow-y-scroll flex flex-col">
        <div className="HEADER w-full min-h-[30vh] flex items-center justify-center">
          <Image src={headerImg} alt="rome web award logo" />
        </div>
        <nav className="NAV w-full bg-slate-600/30 pt-2 flex justify-evenly">
          <ul className="flex gap-x-4">
            <Link
              href="/"
              className="text-white text-sm p-2 rounded-tr-md hover:bg-slate-950/20"
            >
              Home Page
            </Link>
            <Link
              href="/"
              className="text-white text-sm p-2 rounded-tr-md hover:bg-slate-950"
            >
              News
            </Link>
            <Link
              href="/"
              className="text-white text-sm p-2 rounded-tr-md hover:bg-slate-950"
            >
              User
            </Link>
            <Link
              href="/"
              className="text-white text-sm p-2 rounded-tr-md hover:bg-slate-950"
            >
              RWA
            </Link>
            <Link
              href="/"
              className="text-white text-sm p-2 rounded-tr-md hover:bg-slate-950"
            >
              Partners
            </Link>
            <Link
              href="/"
              className="text-white text-sm p-2 rounded-tr-md hover:bg-slate-950"
            >
              Regulation
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
