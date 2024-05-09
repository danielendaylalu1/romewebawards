"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [navShow, setNavShow] = useState(false);
  return (
    <nav className="NAV w-full bg-slate-600/40 flex pt-1 justify-around relative">
      {!navShow ? (
        <IoMenu
          size={32}
          className="MENUICON min-w-[28px] self-center cursor-pointer"
          onClick={() => setNavShow(!navShow)}
        />
      ) : (
        <IoClose
          size={32}
          className="MENUICON min-w-[28px] self-center cursor-pointer"
          onClick={() => setNavShow(!navShow)}
        />
      )}
      <ul
        className={`NAVITEM ${
          navShow && "NAVITEMSHOW"
        } flex gap-x-4 items-center`}
      >
        <Link
          href="/"
          className="text-white text-xs p-2 rounded-tr-md hover:bg-slate-950/40"
        >
          Homepage
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
  );
};

export default Nav;
