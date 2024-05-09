import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full gap-y-4 min-h-[70vh]">
      <h2 className="text-[#303030] text-2xl font-bold self-start">
        Associazione IWV
      </h2>
      <p className="text-[13px] font-normal">
        {`L'`}Associazione International Web Videomaker è stata fondata nel 2013
        dai creatori del <span className="text-[#f4c15b]">Rome Web Awards</span>{" "}
        che la gestiscono.
      </p>
      <p className="text-[13px] font-normal">
        {`L'`}associazione culturale è{" "}
        <span className="text-[#f4c15b]">senza scopo di lucro </span>, e il suo
        scopo è quello di diffondere, promuovere e incentivare {`l'`}are e la
        cultura, con particolare cura verso il lavoro dei videomaker.
      </p>
      <p className="text-[13px] font-normal">
        Tutte le persone che lavorano per {`l'`}Associazione sono{" "}
        <span className="text-[#f4c15b]">volontari</span> e non percepiscono
        alcun compenso per la loro opera.
      </p>
      <p className="text-[13px] font-normal">
        {`L'`}sAssociazione organizza la cerimonia del Rome Web Awards, che è la
        prima di molte{" "}
        <span className="text-[#f4c15b]">importanti iniziative</span> che
        saranno proposte negli anni futuri.
      </p>
      <p className="text-[13px] font-normal">
        Per partecipare al concorso è richiesto di associarsi come soci
        sostenitori.
      </p>

      <p className="text-[13px] font-normal">
        Tale carica di socio <span className="font-bold">non</span> comporta il
        versamento di alcuna quota aggiuntiva (oltre a quella stabilita), nè può
        essere richiesto qualunque altro tipo di prestazione, in nessuna forma.
      </p>
    </div>
  );
};

export default page;
