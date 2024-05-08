import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full gap-y-4 min-h-[70vh]">
      <h2 className="text-[#303030] text-2xl font-bold self-start">
        Accordo di Partnership
      </h2>
      <div className="flex flex-col gap-y-4 mt-8">
        <p className="text-[#303030] text-sm">
          Cosa significa essere{" "}
          <span className="text-[#e7cb38]">media partner</span> di Rome Web
          Awards?
        </p>
        <p className="text-[#303030] text-sm">
          Significa siglare un accordo di collaborazione, con il quale
          sostanzialmente si supporta nel dare visibilità reciproca agli eventi
          e iniziative.
        </p>
        <p className="text-[#303030] text-sm">
          Inoltre ad alcuni media partner sarà chiesto di fare da giuria nella
          fase di selezione del vincitore finale di una o più categorie. Un
          compito sicuramente importante e di grande visibilità.
        </p>
        <p className="text-[#303030] text-sm">
          Nel dettaglio ecco cosa{" "}
          <span className="text-[#e7cb38]">offriamo:</span>
        </p>
        <p className="text-[#303030] text-sm">
          - Logo del media partner sul materiale promozionale della
          manifestazione, della pagina Facebook e del sito
        </p>
        <p className="text-[#303030] text-sm">
          - Comunicazione delle news principali del media partner (che ci
          segnalerete) su Facebook e sulla sezione news del sito
        </p>
        <p className="text-[#303030] text-sm">
          - Pubblicazione di una vostra intervista nelle pagine del sito.
        </p>
      </div>

      <div className="flex flex-col gap-y-4 mt-8">
        <p className="text-[#303030] text-sm">
          e cosa <span className="text-[#e7cb38]">chiediamo:</span>
        </p>

        <p className="text-[#303030] text-sm">
          - Che segnaliate sui vostri canali (facebook e/o sito web) la
          manifestazione
        </p>
        <p className="text-[#303030] text-sm">
          - Che curiate la fase di Giuria a voi assegnata (se applicabile).
        </p>
      </div>
      <p className="text-[#303030] text-sm">
        Se siete interessati contattateci!
      </p>
    </div>
  );
};

export default page;
