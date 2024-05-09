import Image from "next/image";
import RWAIMG from "../assets/images/RWA_logo_2017.jpg";
import RWAIMG2 from "../assets/images/RWA_logo_2016.jpg";
import EstensioneImg from "../assets/images/estensione2016.jpg";
import RWASelection from "../assets/images/RWA_Selection.jpg";
import RWADedline from "../assets/images/RWA_dedline.jpg";
import ExcellenceImg from "../assets/images/Excellence2016.jpg";
import RWAApertura from "../assets/images/RWA_apertura_2016.jpg";
import AwardsExcellence600 from "../assets/images/Awards_Excellence_600.jpg";

import Link from "next/link";

import {
  catagoryLists,
  personalList,
  canaliList,
  winner2016List,
  award2016List,
  catagoryBaseList,
  awardSelectionList,
  excellenceAwardList,
} from "./data";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-y-4">
      <Link href="/" className="text-[#303030] text-2xl font-bold self-start">
        Rome Web Awards 2017
      </Link>
      <Image src={RWAIMG} alt="Rome web awards 2017" />

      <div className="flex flex-col gap-y-2 mt-4">
        <h2 className="text-[#303030] text-lg font-bold ">
          Rome Web Awards 2017. Le iscrizioni sono aperte.
        </h2>
        <p className="text-[#303030] text-sm font-normal">
          Da luglio sono aperte le iscrizioni per il Rome Web Awards 2017, gli{" "}
          <span className="font-bold">Oscar Italiani del Web.</span>
        </p>
        <p className="text-[#303030] text-sm font-normal">
          Gli Oscar Italiani del Web, giunti alla loro quarta edizione,
          quest’anno si arricchiscono ancora con le oltre{" "}
          <span className="font-bold">
            1200 nomination, 250 premi di Merito, 45 premi di Eccellenza, i
            premi dei Media Partners e le Golden Stars
          </span>
          , gli ambiti premi ad Honorem. Il Rome Web Awards si conferma essere
          anche per questa edizione la più ricca e complessa premiazione
          mondiale nell’ambito dell’audiovisivo indipendente.
        </p>
        <p className="text-[#303030] text-sm font-normal">
          E’ possibile iscrivere qualsiasi opera audiovisiva distribuita sul
          web:
          <span className="font-bold">
            Web Serie, Cortometraggi, Film, Fan Film, Web Show, Videoclip,
            Animazioni, Documentari
          </span>
          e altro ancora.
        </p>
        <p className="text-[#303030] text-sm font-normal">
          Le iscrizioni, partite a{" "}
          <span className="font-bold">luglio 2016</span> resteranno aperte fino
          al <span className="font-bold">31 Dicembre</span> dello stesso anno.
          Le opere selezionate ufficialmente, oltre a partecipare alla
          competizione, saranno inserite gratuitamente ed automaticamente sulla
          piattaforma <span className="font-bold"></span> e inoltre potrebbero
          ricevere premi aggiuntivi concessi dai numerosi media partner della
          manifestazione.
        </p>
        <p className="text-[#303030] text-sm font-normal">
          Le <span className="font-bold">categorie base</span> in concorso
          quest’anno sono:
        </p>
        <ul className="ml-8 list-disc mb-8">
          {catagoryLists.map((item, indx) => (
            <li key={indx} className="font-bold text-sm text-[#303030]">
              {item}
            </li>
          ))}
        </ul>
        <h2 className="text-[#303030] text-lg font-bold">
          Novità 2017, i migliori Yotubers, Gamers e canali Youtube dell’annno!
        </h2>
        <p className="text-[#303030] text-sm font-normal ">
          Tra le novità di quest’anno inoltre c’è una sezione completamente
          nuova, dedicata agli <span className="font-bold">Youtubers</span>, ai
          <span className="font-bold">Gamers</span>, e in generale ai canali
          YouTube più interessanti e meglio realizzati. La Direzione sceglierà e
          premierà, durante la cerimonia degli Excellence, i migliori canali,
          suddivisi in ben 11 categorie tematiche.{" "}
          <span className="font-bold">
            Questa nuova sezione non richiede iscrizione, ma la selezione
            avverrà a cura esclusiva della Direzione.
          </span>
        </p>
        <p className="text-[#303030] text-sm font-normal ">
          Le categorie dedicate agli{" "}
          <span className="font-bold">YouTubers</span> sono:
        </p>
        <h3 className="text-[#826009] text-base font-bold mt-4">Personali</h3>
        <ul className="ml-8 list-disc mb-8">
          {personalList.map((item, indx) => (
            <li key={indx} className="font-bold text-sm text-[#303030]">
              {item}
            </li>
          ))}
        </ul>
        <h3 className="text-[#826009] text-base font-bold mt-4">Canali</h3>
        <ul className="ml-8 list-disc mb-8">
          {canaliList.map((item, indx) => (
            <li key={indx} className="font-bold text-sm text-[#303030]">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[#303030] text-sm font-normal">
          I Direttori del Rome Web Awards rinnovano anche quest’anno l’invito a
          tutti i webcreativi dell’audiovisivo a partecipare a quella che è la
          più importante manifestazione italiana dedicata ai produttori
          indipendenti.
        </p>
        <p className="text-[#303030] text-sm font-normal">
          Per rimanere aggiornati, seguire tutte le fasi della premiazione e
          conoscere tutte le opere iscritte nel dettaglio, è sufficiente
          diventare fan della pagina Facebook del Rome Web Awards, oppure
          collegarsi al sito{" "}
          <Link href="/" className="text-[#826009]">
            www.romewebawards.it
          </Link>
        </p>

        <p className="text-[#826009] text-sm font-normal my-6">
          <span className="text-red-800 font-bold text-xl">
            Iscriviti ora:{" "}
          </span>
          <Link href="/registration-process">romewebawards.it/Iscrizione</Link>
        </p>

        <Link href="/" className="text-[#826009] text-2xl font-bold self-start">
          Rome Web Awards EXCELLENCE AWARDS 2016
        </Link>
        <p className="text-[#303030] text-lg font-bold ml-4 mb-4">
          Rome Web Awards annuncia i vincitori degli EXCELLENCE AWARDS 2016
        </p>
        <p className="text-[#303030] text-base font-normal">
          Dopo le attese vittorie nella categoria dei MERIT Awards, ecco
          rivelati i nomi delle opere vincitrici dell’ultima, concitata fase
          della gara, gli EXCELLENCE Awards.{" "}
        </p>
        <p className="text-[#303030] text-base font-normal">
          La direzione del Rome Web Awards si congratula con tutti i
          partecipanti per l’alta qualità delle opere in gara, che ha messo in
          seria difficoltà la giuria nel decretare le opere migliori.
        </p>
        <p className="text-[#303030] text-base font-normal">
          La Direzione del Rome Web Awards dichiara conclusa la terza edizione
          degli Oscar italiani del web, e attende i nuovi partecipanti per
          l’edizione del 2017, che sarà ancora più ricca e interessante!
        </p>
        <p className="text-[#303030] text-base font-normal my-4">
          I vincitori {`dell'`}edizione 2016:
        </p>
        {winner2016List.map((item) => (
          <>
            <h3 className="text-black text-base font-bold mt-4">{item.tite}</h3>
            <ul className="ml-8 list-decimal mb-8">
              {item.winners.map((winner, indx) => (
                <li key={indx} className="font-medium text-sm text-[#303030]">
                  {winner}
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>

      <Image src={RWAIMG2} alt="Rome web awards 2017" />

      <div className="border border-b-[1px] border-[#303030] my-8 w-[90%]"></div>

      <Link href="/" className="text-[#826009] text-2xl font-bold self-start">
        ROME WEB AWARDS, Merit awards 2016
      </Link>
      <p className="text-[#303030] text-sm font-normal">
        <span className="font-bold">Rome Web Awards.</span> Si conclude la
        cerimonia di assegnazione dei{" "}
        <span className="font-bold">Merit Awards.</span>
      </p>
      <p className="text-[#303030] text-sm font-normal">
        Si è appena conclusa sul web l’attesa cerimonia di assegnazione dei
        “Merit Awards” della terza edizione del Rome Web Awards, dalla durata di
        tre serate.
      </p>
      <p className="text-[#303030] text-sm font-normal">
        La Direzione del Rome Web Awards ha pubblicato con i consueti video in
        Computer Grafica i ben <span className="font-bold">257 vincitori</span>{" "}
        scelti tra le <span className="font-bold">1155 nominations.</span> Tutti
        i vincitori sono stati decisi da una giuria qualificata tranne i 15
        decisi dai Media Partners dell’evento.
      </p>
      <p className="text-[#303030] text-sm font-normal">
        A questi premi si sono affiancati altri premi quali quello speciale
        della Giuria, quello della Città di Roma, quello della Direzione.
      </p>
      <p className="text-[#303030] text-sm font-normal">
        I numeri del concorso di quest’anno sono ancora più grandiosi: i
        partecipanti provengono da ben{" "}
        <span className="font-bold">15 nazioni</span> diverse, suddivise in ben
        <span className="font-bold">4 continenti.</span> La giuria ha dovuto
        operare scelte estremamente difficili, considerata l’estremo livello
        qualitativo dei lavori in concorso, che si innalza anno dopo anno.{" "}
        <span className="font-bold">
          Rome Web Awards 2016 si riconferma essere l’evento di premiazione più
          complesso e ricco al mondo.
        </span>
      </p>
      <p className="text-[#303030] text-sm font-normal">
        Il Rome Web Awards 2016 non è però ancora terminato. Nonostante
        l’importante e seguitissima premiazione, questa costituisce ancora una
        fase intermedia del concorso, che si concluderà a fine Maggio con
        l’assegnazione degli{" "}
        <span className="font-bold">Excellence Awards.</span> Tutti in vincitori
        dei premi di Merito, infatti, concorreranno insieme per vincere i premi
        di Eccellenza. Una gara serrata, che metterà a confronto diretto i
        migliori lavori di ogni categoria. Saranno inoltre assegnate in questa
        occasione le ambitissime <span className="font-bold">GOLDEN STAR</span>{" "}
        alla carriera.
      </p>
      <span className="font-bold">EXCELLENCE awards dates:</span>

      <p className="text-sm font-normal mb-8">
        <span className="font-bold">07 Maggio: Excellence Nominations</span>
        <br />
        <span className="font-bold">28 Maggio: Excellence Awards</span>
        <br />
        <span className="font-bold">DALLE ORE 21:30 (+1GMT)</span>
      </p>

      <p className="font-bold text-sm">ROME WEB AWARDS, MERIT awards 2016:</p>

      {award2016List.map((item) => (
        <>
          <h3 className="text-black text-sm font-bold mt-4">{item.title}</h3>
          <ul className="list-none mb-8">
            {item.awards.map((award, indx) => (
              <li key={indx} className="text-sm text-[#303030]">
                {award}
              </li>
            ))}
          </ul>
        </>
      ))}
      <Image src={ExcellenceImg} alt="Rome web awards 2017" />
      <Link
        href="/"
        className="text-[#826009] text-2xl font-bold self-start mt-6"
      >
        RWA - Lista della selezione ufficiale 2016
      </Link>
      <Image src={RWASelection} alt="Rome web awards 2017" />

      <p className="text-[#303030] text-sm">
        La direzione del <span className="font-bold">Rome Web Awards</span>,
        l’evento di premiazione della rete più ricco di premi al mondo, è lieta
        di annunciare la lista ufficiale delle opere selezionate per la terza
        edizione degli <span className="font-bold">Oscar italiani del Web</span>
        . L’edizione del 2016 vanta ben{" "}
        <span className="underline">
          74 opere in concorso, provenienti da 4 continenti e 15 paesi
          differenti
        </span>
        . L’evento più importante italiano nato dal web per il web, conferma la
        tendenza di crescita per il terzo anno consecutivo, sia per numeri di
        iscritti, sia per numero di paesi in selezione.
      </p>
      <p className="font-bold text-sm">Official Selection List:</p>

      <ul className="list-none mb-8">
        {awardSelectionList.map((award, indx) => (
          <li key={indx} className="text-sm text-[#303030]">
            {award}
          </li>
        ))}
      </ul>

      <span className="font-bold">Next relevant dates are the following:</span>

      <p className="text-sm font-normal mb-8">
        <span className="font-bold">28 February: Official Categories</span>
        <br />
        <span className="font-bold">18/19/20 March: Merit Nominations</span>
        <br />
        <span className="font-bold">15/16/17 April: Merit Awards</span>
        <br />
        <span className="font-bold">30 April: Excellence Nominations</span>
        <br />
        <span className="font-bold">21 May: Excellence Awards</span>
      </p>
      <Link
        href="/"
        className="text-[#826009] text-2xl font-bold self-start mt-6"
      >
        Estensione iscrizioni 2016!
      </Link>
      <Image src={EstensioneImg} alt="Rome web awards 2017" />
      <p className="font-bold text-base">Estensione iscrizioni!</p>
      <p className="text-[#303030] text-sm">
        La Direzione del <span className="font-bold">Rome Web Awards</span> è
        lieta di annunciare che la{" "}
        <span className="font-bold">scadenza per le iscrizioni</span> alla terza
        edizione, sarà prorogata sino al{" "}
        <span className="font-bold underline">31 gennaio 2016.</span>
      </p>
      <p className="text-[#303030] text-base">Scegli la tua categoria: </p>
      <p className="text-[#303030] text-base">
        Comedy, Drama, Dramedy, War/Action, SciFi/Fantasy Comedy e No Comedy,
        LGBT, Animazione, Cult/ OriginalTrash, No Fiction/Documentary/Reality,
        Horror, Thriller, Romance, Social, Fan Film, Musical/Videoclip e Sketch.
      </p>
      <p className="text-[#303030] text-sm">
        Vi ricordiamo che potete iscrivere Webserie, Cortometraggi, Fan Film,
        Documentari, Videoclip, Reality, e{" "}
        <span className="font-bold">qualsiasi vostra opera del web.</span>
      </p>
      <p className="text-[#303030] text-sm">
        Gli <span className="font-bold">Oscar italiani del web</span> stanno
        tornado, “Siete pronti per le stelle dorate?”
      </p>
      <Link
        href="/"
        className="text-[#826009] text-2xl font-bold self-start mt-6"
      >
        RWA 2016 - Deadline
      </Link>
      <Image src={RWADedline} alt="Rome web awards 2017" />

      <p className="text-[#303030] text-sm">
        <span className="font-bold">Ultimo mese</span> per iscriversi al più
        importante e ricco evento di premiazione italiano per il settore
        audiovisivo del web, il{" "}
        <span className="font-bold">Rome Web Awards.</span>
      </p>
      <p className="text-[#303030] text-sm">
        Gli <span className="font-bold">Oscar Italiani del Web</span> aspettano
        solo te con oltre{" "}
        <span className="font-bold">
          1200 nomination, 230 premi di Merito, 15 premi di Eccellenza
        </span>{" "}
        e le <span className="font-bold">Golden Stars,</span> gli ambiti premi
        ad Honorem.
      </p>
      <p className="text-[#303030] text-sm">
        Per rimanere aggiornati, seguire tutte le fasi della premiazione e
        conoscere tutte le opere iscritte nel dettaglio, è sufficiente diventare
        fan della pagina Facebook del Rome Web Awards, oppure collegarsi al sito
        <Link href="/" className="font-bold text-[#826009]">
          www.romewebawards.it
        </Link>
      </p>

      <Link
        href="/"
        className="text-[#826009] text-2xl font-bold self-start mt-6"
      >
        Aperte le iscrizioni per il Rome Web Awards 2016!
      </Link>
      <Image src={RWAApertura} alt="RWA Apertura" />
      <p className="text-[#303030] text-sm">
        A giugno sono state aperte le iscrizioni per il{" "}
        <span className="font-bold">Rome Web Awards 2016,</span> il cui evento
        di premiazione si svolgerà tra{" "}
        <span className="font-bold">Aprile e Maggio 2016</span> sul web.
      </p>
      <p className="text-[#303030] text-sm">
        Gli <span className="font-bold">Oscar Italiani del Web,</span> giunti
        alla loro <span className="font-bold">terza edizione,</span> quest’anno
        si arricchiscono ancora con le oltre{" "}
        <span className="font-bold">
          1200 nomination, 230 premi di Merito, 15 premi di Eccellenza e le
          Golden Stars,
        </span>{" "}
        gli ambiti premi ad Honorem. Il Rome Web Awards si conferma essere anche
        per questa edizione{" "}
        <span className="font-bold">
          la più ricca e complessa premiazione mondiale nell’ambito
          dell’audiovisivo indipendente.
        </span>
      </p>
      <p className="text-[#303030] text-sm">
        E’ possibile iscrivere qualsiasi opera audiovisiva distribuita sul
        <span className="font-bold">
          web: Web Serie, Cortometraggi, Film, Fan Film, Web Show, Videoclip,
          Animazioni,
        </span>{" "}
        Documentari e altro ancora.
      </p>
      <p className="text-[#303030] text-sm">
        Le iscrizioni, partite a <span className="font-bold">giugno 2015</span>{" "}
        resteranno aperte fino al <span className="font-bold">31 Dicembre</span>{" "}
        dello stesso anno. Le opere selezionate ufficialmente, oltre a
        partecipare alla competizione, saranno inserite gratuitamente ed
        automaticamente sulla piattaforma{" "}
        <span className="font-bold">Web Series Tv</span> e inoltre potrebbero
        ricevere premi aggiuntivi concessi dai numerosi media partner della
        manifestazione.
      </p>
      <p className="text-[#303030] text-sm">
        Le <span className="font-bold">categorie base</span> in concorso
        quest’anno sono:
      </p>
      <ul className="ml-8 list-disc mb-8">
        {catagoryBaseList.map((item, indx) => (
          <li key={indx} className="font-bold text-sm text-[#303030]">
            {item}
          </li>
        ))}
      </ul>
      <p className="text-[#303030] text-sm">
        I Direttori del Rome Web Awards desiderano invitare tutti i webcreativi
        dell’audiovisivo a partecipare a quella che è{" "}
        <span className="font-bold">
          la più importante manifestazione italiana dedicata ai produttori
          indipendenti.
        </span>
      </p>
      <p className="text-[#303030] text-sm">
        Per rimanere aggiornati, seguire tutte le fasi della premiazione e
        conoscere tutte le opere iscritte nel dettaglio, è sufficiente diventare
        fan della pagina Facebook del Rome Web Awards, oppure collegarsi al sito
        <Link href="/" className="font-bold text-[#826009]">
          www.romewebawards.it
        </Link>
      </p>
      <Link
        href="/"
        className="text-[#826009] text-2xl font-bold self-start mt-6"
      >
        Excellence Awards 2015 winners
      </Link>
      <p className="text-[#303030] text-sm font-bold">
        Gli Excellence awards degli Oscar Italiani del Web!
      </p>
      <p className="text-[#303030] text-sm">
        Dopo le meritate vittorie nella categoria dei{" "}
        <span className="font-bold">MERIT Awards,</span> ecco svelati i nomi
        delle opere vincitrici degli{" "}
        <span className="font-bold">EXCELLENCE Awards.</span> La direzione del
        Rome Web Awards si congratula con tutti i partecipanti per l’alta
        qualità delle opere in gara, che ha messo in seria difficoltà la giuria.
        Il Rome Web Awards dimostra, con i suoi{" "}
        <span className="font-bold">250 premi,</span> di essere{" "}
        <span className="font-bold">
          la più ricca cerimonia di premiazione mondiale delle opere del web!
        </span>
      </p>
      <p className="text-[#303030] text-sm">
        Ecco i nomi dei vincitori agli RWA EXCELLENCE 2015:
      </p>
      <ul className="mb-8">
        {excellenceAwardList.map((item, index) => (
          <div key={index} className="mb-6">
            <li className="text-sm font-bold">{item[0]}</li>
            <li className="text-sm font-bold">{item[1]}</li>
          </div>
        ))}
      </ul>
      <p className="text-[#303030] text-sm">
        Ma non finisce quì. A breve comincerà la terza fase del Rome Web Awards
        2015, l’<span className="font-bold">RWA TOURNAMENT</span> Un evento
        tutto dedicato al giudizio del pubblico, dove i fans potranno votare le
        loro opere migliori e portarle alla finalissima che si svolgerà il
        <span className="font-bold">25/26/27 Settembre 2015</span>
      </p>
      <p className="text-[#303030] text-sm font-bold">
        “Siete pronti per le stelle dorate?”
      </p>
      <Link
        href="/"
        className="text-[#826009] text-2xl font-bold self-start mt-6"
      >
        Il 23 Maggio, gli EXCELLENCE awards!
      </Link>
      <p className="text-[#303030] text-sm">
        Sessione ufficiale delle vittorie 2015 al Rome Web Awards degli
        EXCELLENCE Awards, Sabato 23 Maggio alle ore 22 (GMT+1.00) qui sulla
        pagina facebook o sul canale Youtube ufficiale {`dell'RWA."`} Siete
        pronti per le tre stelle {`dorate?"`}
      </p>
      <Image src={AwardsExcellence600} alt="RWA Apertura" />
    </div>
  );
}
