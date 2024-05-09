import React from "react";
import Link from "next/link";

const SideBarCard = ({ title, children, bottomLink }) => {
  return (
    <div className="px-2 pt-4 pb-2 bg-[#7a766f] flex flex-col gap-y-4">
      <h2 className="font-bold text-sm ml-2">{title}</h2>
      <div className="bg-[#7a7c7a] flex flex-col gap-y-4 items-center p-4">
        {children}
        <Link
          href={bottomLink.link}
          target="_blank"
          className="text-xs text-[#f2d886]"
        >
          {bottomLink.content}
        </Link>
      </div>
    </div>
  );
};

export default SideBarCard;
