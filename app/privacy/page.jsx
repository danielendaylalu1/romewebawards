import PrivacyCard from "@/components/PrivacyCard";
import Link from "next/link";
import React from "react";
import { IoMdMailOpen } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex flex-col w-full gap-y-4 min-h-[70vh]">
      <h2 className="text-[#303030] text-2xl font-bold self-start">
        Privacy Policy di{" "}
        <Link href="/" className="text-[#f2d886] text-xl">
          www.romewebawards.it
        </Link>
      </h2>
      <p className="text-sm text-[#303030]">
        Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti.
      </p>
      <div className="my-6 flex flex-col gap-y-4">
        <p className="text-lg">
          Dati personali raccolti per le seguenti finalità ed utilizzando i
          seguenti servizi:
        </p>
        <div className="flex justify-between my-4">
          <div className="flex gap-x-2 max-w-[50%]">
            <IoMdMailOpen size={24} className="min-w-[36px] mt-1" />
            <div className="flex flex-col gap-y-1">
              <h3 className="font-bold text-sm mb-2">
                Contattare {`l'`}Utente
              </h3>
              <h3 className="text-[#303030] text-sm">Modulo di contatto</h3>
              <p className="text-sm max-w-[95%] font-light">
                Dati Personali: CAP, cognome, data di nascita, email, indirizzo,
                nazione, nome e numero di telefono
              </p>
            </div>
          </div>
          <PrivacyCard
            bigTitle={`Interazione con social network e piattaforme esterne`}
            smallTitle={`Pulsante Mi Piace e widget sociali di Facebook`}
            desc={`Dati Personali: Cookie e Dati di utilizzo`}
          />
        </div>

        <div className="flex justify-between my-4">
          <PrivacyCard
            bigTitle={`Protezione dallo SPAM`}
            smallTitle={`Google reCAPTCHA`}
            desc={`Dati Personali: Cookie e Dati di utilizzo`}
          />
          <PrivacyCard
            bigTitle={`Visualizzazione di contenuti da piattaforme esterne`}
            smallTitle={`Widget Video YouTube`}
            desc={`Dati Personali: Cookie e Dati di utilizzo`}
          />
        </div>

        <p className="font-bold">Informazioni di contatto</p>
        <div className="flex gap-x-2 max-w-[50%] mt-4">
          <FaUserTie size={24} className="min-w-[36px] mt-1" />
          <div className="flex flex-col gap-y-1">
            <h3 className="font-bold text-sm">Titolare del trattamento</h3>
            <h3 className="text-[#303030] text-xs max-w-[95%]">
              Giuseppe Capudi - c/o Associazione International Web Videomakers,
              Via Aleardi 12 - 00185 ROMA,
            </h3>
            <Link href="/" className="text-xs max-w-[95%] font-light">
              info@romewebawards.it
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
