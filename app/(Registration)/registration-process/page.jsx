import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full gap-y-4 min-h-[70vh]">
      <h2 className="text-[#303030] text-2xl font-bold self-start">
        Processo di Iscrizione
      </h2>
      <p className="text-[#303030] text-sm">
        Per poter iscrivere {`un'opera`} devi associarti {`all'`}Associazione
        culturale International Web Videomaker (IWV) che organizza {`l'`}evento,
        in qualità di socio sostenitore.
      </p>
      <p className="text-[#303030] text-sm">
        La quota annuale di iscrizione è di 65€.
      </p>

      <p className="text-[#303030] text-xs">
        In caso di vittoria dell’opera sarà comunque premiato l’autore e non chi
        la iscrive.
      </p>

      <div className="my-6 flex flex-col gap-y-4">
        <p className="text-[#303030] text-base">
          Il processo di iscrizione alla premiazione è semplice:
        </p>
        <ul className="flex flex-col ml-8 list-disc gap-y-2">
          <li className="text-[#303030] text-sm">
            Prima di tutto leggi il regolamento, accertati di averlo compreso
            pienamente e assicurati di avere i requisiti necessari.
          </li>
          <li className="text-[#303030] text-sm">
            Compila il form nel menù {`"Iscrizione"`} avendo cura di selezionare
            il tipo di opera che vuoi iscrivere
          </li>
          <li className="text-[#303030] text-sm">Effettua il pagamento</li>
          <li className="text-[#303030] text-sm">
            Riceverai una mail automatica che ti confermerà i dati.
          </li>
        </ul>
      </div>
      <p className="text-[#303030] text-sm">
        Se hai problemi procedurali contattaci e faremo il possibile per
        aiutarti.
      </p>
    </div>
  );
};

export default page;
