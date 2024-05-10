import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full gap-y-4 min-h-[70vh]">
      <h2 className="text-[#303030] text-2xl font-bold self-start">
        Modulo di Iscrizione
      </h2>
      <p className="text-sm font-light">
        Per iscriverti utilizza questo modulo e compilalo in tutte le sue parti
      </p>
      <p className="text-sm font-light">
        NOTA BENE: Alla pressione del tasto submit si verrà automaticamente
        reindirizzati alla pagina di PAYPAL. Non completare il pagamento
        comporta {`l'`}annullamento del form di iscrizione.
      </p>
      <p className="text-sm font-bold">Istruzioni di compilazione</p>
      <p className="text-sm font-light">
        La prima parte del form (socio) si riferisce al socio {`dell'`}
        associazione culturale no profit International Web Videomakers: per
        cortesia, inserire dati reali per adempiere alle formalità giuridiche.
      </p>
      <p className="text-sm font-light">
        La seconda parte del form (creatore) è quella relativa {`all'`}
        iscrizione
        {`dell'`}opera. Il creatore può essere persona diversa dal socio. I dati
        del creatore {`dell'`}opera saranno quelli presi in considerazione per
        il concorso.
      </p>
      <p className="text-sm font-light">
        Ricorda che le parti con il triangolino giallo sono obbligatorie.
      </p>
      <p className="text-sm font-light">
        Le parti facoltative se non compilate potrebbero escludere {`l'`}opera
        da qualche categoria di concorso.
      </p>
      <p className="text-sm font-light">
        Nei campi dove si chiede nome e cognome di uno specialista (per esempio
        compositore) è eventualmente possibile specificare NON APPLICABILE, se
        tale figura non è stata impiegata nella lavorazione {`dell'`}opera.
      </p>
      <p className="text-sm font-light">
        Ricorda di compilare anche il campo del cast, nel formato proposto.
      </p>
      <p className="text-sm font-light">
        Al termine, premi il tasto Submit per inviare il modulo. Una volta
        inviato non è più possibile modificare nulla o ripetere {`l'`}
        iscrizione.
      </p>
      <div className="flex flex-col my-4 gap-y-4">
        <p className="text-sm font-light">Subscription / Iscrizione</p>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">Member Name / Nome Socio</p>
          <input
            type="text"
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">Member Surname / Cognome Socio</p>
          <input
            type="text"
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">
            Member Birth Date / Data di Nascita Socio
          </p>
          <input
            type="date"
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">Email Member / E-mail del Socio</p>
          <input
            type="email
            "
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">
            Nationality Member / Nazionalità Socio
          </p>
          <input
            type="text"
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">
            Work Creator / Creatore {`dell'`}Opera
          </p>
          <input
            type="text"
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">
            Title of the work / Titolo {`dell'`}opera
          </p>
          <input
            type="text"
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">
            Work Nationality / Nazionalità {`dell'`}opera
          </p>
          <input
            type="text"
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">Genre / Genere</p>
          <div className="flex flex-col">
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Animation</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Comedy</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold"> Cult / Original Trash</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Documentary / Mockumentary</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Drama</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Dramedy</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Fan Film</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Horror</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">LGBT</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Musical/Videoclip</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold"> No Fiction / Reality</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Romance</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Sci-Fi/Fantasy Comedy</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Sci-Fi/Fantasy No Comedy</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Sketch Comedy / Sketch</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Social</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">Thriller</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">War/Action</p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">Season / Stagione</p>
          <input
            type="text"
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">Synopsis / Sinossi</p>
          <textarea
            type="text"
            // rows={"50px"}
            // cols={"90"}
            className="py-[2px] px-2 min-h-[90px] outline-none text-sm max-w-[180px]"
          />
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">Trailer Link</p>
          <input
            type="text"
            placeholder="http:\\"
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>

        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">
            Link of the work or season / Link {`dell'`}opera o della stagione
          </p>
          <textarea
            type="text"
            placeholder="http:\\...
            http:\\..."
            className="py-[2px] px-2 min-h-[90px] outline-none text-sm max-w-[180px]"
          />
        </div>

        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">Director / Regista</p>
          <input
            type="text"
            placeholder="http:\\"
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>

        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">
            Screenplay Writer / Sceneggiatore
          </p>
          <input
            type="text"
            placeholder="http:\\"
            className="py-[1px] max-h-[30px] px-2 outline-none text-sm max-w-[180px]"
          />
        </div>

        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">Main Cast / Cast Protagonisti</p>
          <textarea
            type="text"
            placeholder="Actor name surname - Character Name
            i.e.: Sylvester Stallone - John Rambo"
            className="py-[2px] px-2 min-h-[90px] outline-none text-sm max-w-[180px]"
          />
        </div>

        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">
            Supporting Cast / Cast Non Protagonista
          </p>
          <textarea
            type="text"
            placeholder="Actor name surname - Character Name
            i.e.: Sigourney Weaver - Ellen Ripley"
            className="py-[2px] px-2 min-h-[90px] outline-none text-sm max-w-[180px]"
          />
        </div>

        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">
            Original Song / Canzone Originale
          </p>
          <textarea
            type="text"
            placeholder="Song 1 - Ep. 1 - 05:23
            Song 2 - Ep. 3 - 03:10
            etc..."
            className="py-[2px] px-2 min-h-[90px] outline-none text-sm max-w-[180px]"
          />
        </div>
        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">
            Original Soundtrack / Colonna Sonora Originale
          </p>
          <div className="flex flex-col">
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">
                Completely Original Sountrack / Colonna Sonora Totalmente
                Originale
              </p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">
                Partially original / Solo alcune originali
              </p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="text-xs font-bold">
                No Original Soundtrack / Colonna Sonora Non Originale
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">Poster / Locandina</p>
          <div className="flex flex-col">
            <div className="flex gap-x-2">
              <input type="file" />
              <p className="text-xs font-bold"></p>
            </div>
          </div>
        </div>

        <div className="flex gap-x-2 w-[70%] min-w-[320px] justify-between">
          <p className="text-sm font-light">Notes / Note</p>
          <textarea
            type="text"
            className="py-[2px] px-2 min-h-[90px] outline-none text-sm max-w-[180px]"
          />
        </div>
        <button className="shadow-black shadow-md text-sm border-none bg-yellow-400 py-[6px] px-3 rounded-md font-normal self-start">
          submit
        </button>
      </div>
    </div>
  );
};

export default page;
