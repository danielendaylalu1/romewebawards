import React from "react";
import Image from "next/image";

const WhoWeAreCard = ({ position, name, content, img, children }) => {
  return (
    <>
      <p className="text-lg font-bold">
        {position} – <span className="text-[#f4c15b]">{name}</span>
      </p>
      <div className="flex border border-[#303030]">
        <div className="px-2 pt-6 pb-2 min-w-[30%]">
          <Image src={img} alt={position + name} />
        </div>
        <div className="border border-l-[#303030]"></div>
        <div className="flex flex-col gap-y-6 px-2 pt-4 pb-2">
          <p className="text-sm">{content}</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default WhoWeAreCard;
