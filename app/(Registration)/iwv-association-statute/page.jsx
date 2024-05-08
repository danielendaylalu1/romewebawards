import Image from "next/image";
import React from "react";
import pdfIcon from "../../../assets/images/PDFicon.png";
import Link from "next/link";

const Regulation = () => {
  return (
    <div className="flex flex-col w-full gap-y-4 min-h-[70vh]">
      <h2 className="text-[#303030] text-2xl font-bold self-start">Statuto</h2>
      <p className="text-[#303030] text-sm">
        Di seguito lo Statuto {`dell'Associazione`} International Web
        Videomakers.
      </p>
      <Link
        href="../../../Statuto-IWV.pdf"
        target="_blank"
        className="self-center"
      >
        <Image src={pdfIcon} alt="click to open pdf" />
      </Link>
    </div>
  );
};

export default Regulation;
