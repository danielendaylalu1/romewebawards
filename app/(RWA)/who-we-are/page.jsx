import Image from "next/image";
import React from "react";

import scorpioneImg from "../../../assets/images/scorpione.jpg";
import stefanoImg from "../../../assets/images/stefano.jpg";

import WhoWeAreCard from "@/components/WhoWeAreCard";

const page = () => {
  return (
    <div className="flex flex-col w-full gap-y-4 min-h-[70vh]">
      <h2 className="text-[#303030] text-2xl font-bold self-start">
        Chi siamo
      </h2>

      <WhoWeAreCard
        position={"Direttore Artistico"}
        name={"Scorpione"}
        img={scorpioneImg}
        content={` Scorpione, è il direttore artistico del Rome Web Awards. Regista,
            sceneggiatore e Videomaker per professione, è un creatore di Web
            serie e cortometraggi. ${`E'`} il fondatore della Scorpion
            Entertainement, la casa di produzione di tutti i suoi video.`}
      ></WhoWeAreCard>
      <WhoWeAreCard
        position={"Direttore Tecnico"}
        name={"Stefano Indraccolo"}
        img={stefanoImg}
        content={` Il direttore tecnico del Rome Web Awards si occupa del funzionamento di tutte le piattaforme informatiche che regolano i processi del RWA. Tra i suoi compiti si occupa della parte visuale e di motion graphics dell'evento.
        Collabora con molti videomaker e filmaker per la realizzazione di post produzione video, motion graphics ed effetti speciali. Ha collaborato a molte produzioni nazionali e internazionali pluripremiate.`}
      ></WhoWeAreCard>

      <p>
        Vuoi contattarci? Spediscici una mail a{" "}
        <a href="mailto:info@romewebawards.it" className="text-[#f4c15b]">
          info@romewebawards.it
        </a>
      </p>
    </div>
  );
};

export default page;
