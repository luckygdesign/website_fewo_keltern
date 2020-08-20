import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerThreeQuarters,
  faDog,
  faSmokingBan,
  faWifi,
  faCar,
  faUsers,
  faCalendarCheck,
  faCreditCard,
  faBed,
  faShower,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Home() {
  return (
    <div>
      <div className="relative bg-gray-50">
        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                Ferienwohnung in Keltern
              </h2>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Willkommen in unserer Ferienwohnung - Urlaub am Tor zum
                Nordschwarzwald. Gerne würden wir Sie bei uns begrüßen!
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Jetzt anfragen
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-64 md:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/img/img05.jpg"
              alt="Blick in das Wohnzimmer"
            />
          </div>
        </main>
      </div>
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 mb-12 lg:mb-0">
            <div className="mb-10 prose text-gray-500 mx-auto lg:max-w-none">
              <p>
                Unsere Ferienwohnung ist 60 m² groß und besteht aus einer Küche
                mit Essbereich, Bad, sowie einem Wohn/Schlafbereich mit einer
                Schlaf-Couch: tagsüber Sofa mit Sitzkomfort, nachts ein Bett 160
                x 190 cm (extra Matraze, nicht die Sitzfläche vom Sofa!),
                Wohnschrankwand, kleiner Beistelltisch. Vor dem Wohnzimmer
                befindet sich ein kleiner Dachgarten. Dieser gehört zur
                Nachbar-Wohnung und kann nach Absprache mit dem Eigentümer
                mitbenutzt werden.
              </p>
              <p>
                Die Ferienwohnung liegt in einer Seitenstraße. Parkplatz am
                Haus. Unter Ihr befindet sich eine Backstube. In dieser wird in
                der Regel nur von Freitag auf Samstag gebacken. Dann sind mit
                Maschinen- und Arbeits-Geräuschen zu rechnen.
              </p>
              <p>
                Keltern ist ein Gemeindezusammenschluss von 5 Teilorten:
                Dietlingen, Ellmendingen, Weiler, Niebelsbach und Dietenhausen
                und hat ca.9000 Einwohner. In allen Orten gibt es eine
                Wein-Kelter! Zwischen Dietlingen und Ellmendingen erstrecken
                sich Weinberge mit den bekannten Schwarzriesling-Trauben, aber
                auch Spätburgunder und Müller Thurgau wird angebaut. Die
                Weinberge laden zu ausgiebigen Wanderungen ein. Ebenso die
                Streuobstwiesen und Laub/Mischwälder. In den Scharzwald gelangt
                man über Niebelsbach/ Straubenhardt/ Dobel, aber auch die
                Goldstadt Pforzheim, die badische "Hauptstadt" Karlsruhe,
                Etllingen, Rastatt sind nicht weit.Überquert man den Rhein, ist
                man in der Pfalz oder im Elsaß und den Vogesen. Mehr Infos:{" "}
                <a href="https://www.keltern.de" target="_blanc">
                  www.keltern.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 mb-12 lg:mb-0">
            <h3 className="text-lg leading-6 font-medium text-gray-900 py-6">
              Ausstattung
            </h3>

            <div className="md:grid md:grid-cols-3 md:gap-6">
              {ausstattungItems.map((a, i) => (
                <AusstattungItem {...a} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type IAusstattungItem = {
  title: string;
  icon: IconProp;
  details?: string[];
};

const ausstattungItems: IAusstattungItem[] = [
  {
    title: "Küche",
    icon: faUtensils,
    details: [
      "Herd mit zwei Kochplatten, Dunstabzug und Backofen",
      "Spülmaschine",
      "Spülbecken",
      "Geschirr, Töpfe und Pfannen",
    ],
  },
  {
    title: "Wohn- und Schlafbereich",
    icon: faBed,
    details: [
      "Schrankwand und Kleiderschrank",
      "Couch, verwandelbar in Bett für 1-2 Personen",
      "mit extra Matratze 160 x 190 cm",
      "kleiner Beistelltisch",
      "Garderobe mit Schuhablage",
    ],
  },
  {
    title: "Bad",
    icon: faShower,
    details: ["barrierefreie Dusche", "Waschbecken", "Toilette"],
  },
  {
    title: "Heizung",
    icon: faThermometerThreeQuarters,
  },
  {
    title: "keine Haustiere",
    icon: faDog,
  },
  {
    title: "Nichtraucher",
    icon: faSmokingBan,
  },
  {
    title: "freies WLAN",
    icon: faWifi,
  },
  {
    title: "Parkplatz an Haus",
    icon: faCar,
  },
  {
    title: "Belegung: 1-2 Personen",
    icon: faUsers,
  },
  {
    title: "Anreise / Abreise",
    icon: faCalendarCheck,
    details: ["Anreise ab 16:00 Uhr", "Abreise bis 11:00 Uhr"],
  },
  {
    title: "Preise",
    icon: faCreditCard,
    details: [
      "1. und 2. Tag: 95,00 € pro Tag",
      "ab 3 Tagen: 90,00 € pro Tag",
      "ab 4 Tagen: 85,00 € pro Tag",
      "ab 5 Tagen: 80,00 € pro Tag",
    ],
  },
];

const AusstattungItem = (item: IAusstattungItem) => (
  <div className="p-6 bg-gray-100 rounded-lg shadow-md">
    <div className="flex items-center text-gray-700">
      <FontAwesomeIcon className="mr-2 text-lg fill-current" icon={item.icon} />
      <span className="">{item.title}</span>
    </div>
    {item.details && (
      <ul className="pt-4 text-gray-500">
        {item.details.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    )}
  </div>
);
