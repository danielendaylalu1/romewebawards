import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full gap-y-4 min-h-[70vh]">
      <h2 className="text-[#303030] text-2xl font-bold self-start">
        {`Cos'è il RWA`}
      </h2>
      <p className="font-medium">
        Il <span className="text-[#f4c15b]">Rome Web Awards</span> (RWA) è il{" "}
        <span className="text-[#f4c15b] font-normal">
          primo evento ufficiale italiano
        </span>{" "}
        di premiazione del web.
      </p>
      <p className="font-medium">
        Nato nel 2013, è il festival del web con più premi al mondo, più di 200.
      </p>
      <p className="font-medium">
        E’ stato ideato da Giuseppe Capudi, in arte Scorpione, che ricopre il
        ruolo di Direttore Artistico dell’evento, e dal Direttore Tecnico e
        amministrativo Stefano Indraccolo.
      </p>
      <p className="font-medium">
        Dello staff fa anche parte Domenico Barilari, e Ilaria Ceccarossi.
      </p>
      <p className="font-medium">
        L’ obiettivo dell’RWA è quello di{" "}
        <span className="text-[#f4c15b]">
          promuovere e premiare i migliori videomaker
        </span>{" "}
        online di tutto il mondo.
      </p>
      <p className="font-medium">
        La competizione è organizzata {`dall'`} International Videomakers Web
        Association, associazione culturale no-profit fondata nel 2013 da
        volontari, che mira a promuovere, incentivare e divulgare {`l'`}arte e
        la cultura, con particolare attenzione al lavoro dei videomaker.
      </p>
      <p className="font-medium">
        Già soprannominato gli “Oscar italiani del web”, l’RWA si distingue per
        lo stile dell’evento in puro Academy Awards. Dalle opere selezionate
        ufficialmente verranno formate le cinquine delle{" "}
        <span className="text-[#f4c15b]">nominations,</span> da cui poi verrà
        decretato il <span className="text-[#f4c15b]">vincitore</span> di ogni
        categoria. E’ il più ricco evento europeo per quantità e differenza di
        categorie, con oltre <span className="text-[#f4c15b]">230</span> premi e
        più di <span className="text-[#f4c15b]">1000</span> nominations!
        {`L'`}evento si divide in deu gateggoire ben distinte, le vittorie di{" "}
        <span className="text-[#f4c15b]">MERIT</span>e quelle di{" "}
        <span className="text-[#f4c15b]">EXCELLENCE</span>. i vincitori delle
        categorie base di Merit, si sfideranno ulteriormente nella categoria
        Excellence che premia i vincitori assoluti.
      </p>
      <p className="font-medium">
        Agli RWA è possibile iscrivere ogni genere di opera pubblicata sul web:
        Web serie, cortometraggi, lungometraggi, documentari, reality, web show,
        videoblog, videoclip, etc.
      </p>
      <p className="font-medium">
        Il Rome Web Awards è l’unico evento di premiazione nato dal web , sul
        web per il web!
      </p>
      <p className="text-[#f4c15b] font-bold self-center">
        Siete pronti per gli Oscar italiani del web?
      </p>
    </div>
  );
};

export default page;
