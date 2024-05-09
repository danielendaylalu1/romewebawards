import React from "react";
import { FaFile } from "react-icons/fa6";

const PrivacyCard = ({ bigTitle, smallTitle, desc }) => {
  return (
    <div className="flex gap-x-2 max-w-[50%]">
      <FaFile size={24} className="min-w-[36px] mt-1" />
      <div className="flex flex-col gap-y-1">
        <h3 className="font-bold text-sm mb-2 max-w-[95%]">{bigTitle}</h3>
        <h3 className="text-[#303030] text-sm ">{smallTitle}</h3>
        <p className="text-sm max-w-[95%] font-light">{desc}</p>
      </div>
    </div>
  );
};

export default PrivacyCard;
