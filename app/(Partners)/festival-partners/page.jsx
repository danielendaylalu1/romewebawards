import React from "react";

import dubwebfest from "../../../assets/images/dubwebfest.jpg";
import itff from "../../../assets/images/itff.jpg";
import imaginariaBanner from "../../../assets/images/imaginaria-banner-.jpg";
import oporto from "../../../assets/images/oporto.jpg";
import MWFLOGOWide from "../../../assets/images/MWF_LOGO_wide.jpg";
import StreamyAwardsLogo from "../../../assets/images/Streamy-Awards-Logo.jpg";
import NYCWF from "../../../assets/images/NYCWF.jpg";
import toronto from "../../../assets/images/toronto.jpg";
import BannerBilbaoWebFest1 from "../../../assets/images/Banner_Bilbao_Web_Fest_1.jpg";
import latino from "../../../assets/images/latino.jpg";
import sicily from "../../../assets/images/sicily.jpg";
import bawfest from "../../../assets/images/bawfest.jpg";

import Image from "next/image";

const page = () => {
  const imageList = [
    dubwebfest,
    itff,
    imaginariaBanner,
    oporto,
    MWFLOGOWide,
    StreamyAwardsLogo,
    NYCWF,
    toronto,
    BannerBilbaoWebFest1,
    latino,
    sicily,
    bawfest,
  ];
  return (
    <div className="flex flex-col w-full gap-y-4 min-h-[70vh]">
      <h2 className="text-[#303030] text-2xl font-bold self-start">
        Festival Partners
      </h2>
      <p className="text-sm">
        In questa pagina i festival mondiali amici del{" "}
        <span className="text-[#f4c15b]">Rome Web Awards</span>.
      </p>

      <div className="mt-4 w-full flex flex-col gap-y-4">
        {imageList.map((imge, indx) => (
          <Image
            key={indx}
            src={imge}
            alt="partner"
            className="max-w-[95%] self-center"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
