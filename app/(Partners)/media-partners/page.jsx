import React from "react";

import universal from "../../../assets/images/universal.jpg";
import LogoRaptustvRomewebawardsres from "../../../assets/images/Logo_Raptustv_Romewebawards_res.png";
import YoutubeMagazineItalia from "../../../assets/images/YoutubeMagazineItalia.png";
import Visionaryweb from "../../../assets/images/Visionaryweb.png";
import WorldWideWebserie from "../../../assets/images/WorldWideWebserie.png";
import Cinemamente from "../../../assets/images/Cinemamente.png";
import BuzzIntercultura from "../../../assets/images/BuzzIntercultura.png";
import emerging from "../../../assets/images/emerging.png";
import CiakSocial from "../../../assets/images/CiakSocial.png";
import RadioEklisse from "../../../assets/images/RadioEklisse.jpg";
import famexv from "../../../assets/images/famexv.jpg";
import nonsologor3 from "../../../assets/images/nonsologor3.png";
import antenna_sud from "../../../assets/images/antenna_sud.jpg";
import puntatona from "../../../assets/images/puntatona.jpg";
import webseriestv from "../../../assets/images/webseriestv.jpg";
import tgyou24 from "../../../assets/images/tgyou24.png";

import Image from "next/image";
import Link from "next/link";

const page = () => {
  const imageList = [
    universal,
    LogoRaptustvRomewebawardsres,
    YoutubeMagazineItalia,
    Visionaryweb,
    WorldWideWebserie,
    Cinemamente,
    BuzzIntercultura,
    emerging,
    CiakSocial,
    RadioEklisse,
    famexv,
    nonsologor3,
    antenna_sud,
    puntatona,
    webseriestv,
    tgyou24,
  ];
  return (
    <div className="flex flex-col w-full gap-y-4 min-h-[70vh]">
      <h2 className="text-[#303030] text-2xl font-bold self-start">
        Media Partners
      </h2>
      <p className="text-sm">
        Il<span className="text-[#f4c15b]">Rome Web Awards</span> si avvale
        della collaborazione di differenti Media Partners.
      </p>

      <p className="text-sm">
        In questa pagina desideriamo ringraziarli per la loro preziosa opera e
        per rendere possibile la manifestazione.
      </p>

      <div className="mt-4 w-full flex flex-col gap-y-8">
        {imageList.map((imge, indx) => (
          <Image
            key={indx}
            src={imge}
            alt="partner"
            className="max-w-[95%] self-center"
          />
        ))}
      </div>
      <p className="text-sm">
        In questa pagina desideriamo ringraziarli per la loro preziosa opera e
        per rendere possibile la manifestazione.
      </p>
      <p>
        Se sei interessato a diventare un nostro media partner, leggi il nostro{" "}
        <Link href="/partnership-agreement" className="text-[#866002]">
          Accordo di Partnership
        </Link>
        .
      </p>
    </div>
  );
};

export default page;
