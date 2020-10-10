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
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import Head from "next/head";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ferienwohnung in Keltern</title>
        <meta
          name="description"
          content="Ferienwohnung für zwei Personen im Weinbaugebiet Keltern (in der Nähe von Pfrozheim und dem Nordschwarzwald). Mit ausgestatteter Küche, WLAN und Parkplatz."
        />
      </Head>
      <div className="relative lg:bg-gray-200">
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
                    href="#kontakt"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Jetzt anfragen
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-64 md:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="hidden md:block absolute inset-0 w-full h-full object-cover"
              src="/img/img05.jpg"
              alt="Blick in das Wohnzimmer"
            />
            <div className="md:hidden">
              <Carousel slides={images} />
            </div>
          </div>
        </main>
      </div>
      <div className="py-16 bg-gray-50 overflow-hidden">
        <Home.Ausstattung />
      </div>
      <div className="hidden sm:block py-16 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 mb-12 lg:mb-0">
            <div className="space-y-3 md:col-count-2 lg:col-count-3">
              {images.map((a, i) => (
                <ImageThumb {...a} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50 overflow-hidden">
        <Home.Text />
      </div>
      <div className="relative bg-gray-700 pb-16 pt-16 px-4 sm:px-6 lg:px-8">
        <div
          className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 rounded-lg overflow-hidden"
          id="kontakt"
        >
          <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-16 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                Unverbindlich Anfragen
              </h2>
              <dl className="mt-8 text-base leading-6 text-gray-500">
                <div>
                  <dt className="sr-only">Postadresse</dt>
                  <dd>
                    <p>Johannes und Karin Becker</p>
                    <p>Weinbergstr. 10</p>
                    <p>75210 Keltern</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Telefon</dt>
                  <dd className="flex">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                    />
                    <span className="ml-3">07236/8222</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                    />
                    <span className="ml-3">info(at)cafe-becker.de</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-8 px-4 sm:px-6 lg:col-span-3 lg:py-16 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="hidden">
                <Link href="/danke">
                  <a aria-hidden={true}>zur Bestätigungsseite</a>
                </Link>
              </div>
              <form
                name="kontaktformular"
                className="grid grid-cols-1 gap-y-6"
                data-netlify="true"
                method="post"
                action="/danke"
              >
                <input type="hidden" name="form-name" value="kontaktformular" />
                <div>
                  <label htmlFor="name" className="sr-only">
                    Vor- und Nachname
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      id="name"
                      name="name"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                      placeholder="Vor- und Nachname"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    E-Mail
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                      placeholder="E-Mailadresse"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Telefon
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      id="phone"
                      name="phone"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                      placeholder="Telefonnummer"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="anreise" className="sr-only">
                    Anreisetag
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      id="anreise"
                      name="anreise"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                      placeholder="Anreisetag (z.B. 5. November 2020)"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="abreise" className="sr-only">
                    Abreisetag
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      id="abreise"
                      name="abreise"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                      placeholder="Abreisetag (z.B. 9. November 2020)"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Nachricht
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <textarea
                      id="message"
                      name="nachricht"
                      rows={4}
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                      placeholder="Ihre Nachricht..."
                    ></textarea>
                  </div>
                </div>
                <div className="">
                  <span className="inline-flex rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow active:bg-yellow-700 transition duration-150 ease-in-out"
                    >
                      Absenden
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
          <div className="mt-8 border-t border-gray-600 pt-8 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-base leading-6 text-gray-300 md:mt-0 md:order-1">
              &copy; 2020 Johannes und Karin Becker
            </p>
            <Link href="/legal">
              <a
                target="_blanc"
                className="mt-8 text-base leading-6 text-gray-300 md:mt-0 md:order-1 hover:text-gray-400 transition ease-in-out duration-300"
              >
                Impressum und Datenschutz
              </a>
            </Link>
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

const ausstattungRaeume: IAusstattungItem[] = [
  {
    title: "Küche mit Essbereich",
    icon: faUtensils,
    details: [
      "Herd mit zwei Kochplatten, Dunstabzug",
      "Backofen",
      "Spülmaschine",
      "Geschirr, Töpfe und Pfannen",
      "Tisch, Stühle und Sideboard",
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
];
const ausstattungMerkmale: IAusstattungItem[] = [
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
];
const ausstattungBuchung: IAusstattungItem[] = [
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
  {
    title: "Anreise / Abreise",
    icon: faCalendarCheck,
    details: ["Anreise ab 16:00 Uhr", "Abreise bis 11:00 Uhr"],
  },
  {
    title: "Belegung: 1-2 Personen",
    icon: faUsers,
  },
];

const AusstattungItem = (item: IAusstattungItem) => (
  <div className="p-6 bg-gray-100 rounded-lg shadow-md">
    <div className="flex items-center text-gray-700">
      <FontAwesomeIcon className="mr-2 text-lg fill-current" icon={item.icon} />
      <span className="">{item.title}</span>
    </div>
    {item.details && (
      <ul className="pt-4 text-gray-600">
        {item.details.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    )}
  </div>
);

type IImage = {
  alt: string;
  src: string;
};

const images: IImage[] = [
  { src: "img01.jpg", alt: "Esstisch mit 2 Stühlen und Bank" },
  { src: "img03.jpg", alt: "Küche" },
  { src: "img06.jpg", alt: "Sideboard" },
  { src: "img09.jpg", alt: "Sofa" },
  { src: "img26.jpg", alt: "Blick Richtung Bad" },
  { src: "img13.jpg", alt: "Waschbecken mit Spiegel und Ablage" },
  { src: "img30.jpg", alt: "moderne Sidebar im Wohnzimmer" },
  { src: "img14.jpg", alt: "moderne, barrierefreie Dusche" },
  { src: "img17.jpg", alt: "Sofa als Bett" },
  { src: "img16.jpg", alt: "Fenster im Wohnzimmer" },
  { src: "img29.jpg", alt: "moderne, gut ausgestattete Küche" },
  { src: "img18.jpg", alt: "Dachterasse" },
  { src: "img20.jpg", alt: "Eingang zum Bad" },
  { src: "img07.jpg", alt: "Blick auf Dachterasse" },
  { src: "img27.jpg", alt: "Blick Richtung Fenster" },
];
const IMG_BASE_URL = "/img/thumb/";

const ImageThumb = (img: IImage) => (
  <div className="rounded-lg shadow-sm overflow-hidden self-start">
    <img src={IMG_BASE_URL + img.src} alt={img.alt} />
  </div>
);

Home.Ausstattung = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
    <div className="">
      <h3 className="text-lg pb-8 leading-6 font-medium text-gray-900">
        Räume
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ausstattungRaeume.map((a, i) => (
          <AusstattungItem {...a} key={i} />
        ))}
      </div>
    </div>
    <div className="">
      <h3 className="text-lg pb-8 leading-6 font-medium text-gray-900">
        Merkmale
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ausstattungMerkmale.map((a, i) => (
          <AusstattungItem {...a} key={i} />
        ))}
      </div>
    </div>
    <div className="">
      <h3 className="text-lg pb-8 leading-6 font-medium text-gray-900">
        Buchung
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ausstattungBuchung.map((a, i) => (
          <AusstattungItem {...a} key={i} />
        ))}
      </div>
    </div>
  </div>
);

const links = [
  {
    title: "Stadt Keltern",
    href: "https://www.keltern.de",
  },
  {
    title: "Stadt Pforzheim",
    href: "https://www.pforzheim.de",
  },
  {
    title: "Stadt Karlsruhe",
    href: "https://www.karlsruhe.de",
  },
  {
    title: "Enzkreis",
    href: "https://www.enzkreis.de",
  },
];

Home.Text = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative">
      <div className="prose text-gray-500 mx-auto lg:prose-lg lg:max-w-none">
        <p>
          Unsere Ferienwohnung ist 60 m² groß und besteht aus einer Küche mit
          Essbereich, Bad, sowie einem Wohn/Schlafbereich mit einer
          Schlaf-Couch: tagsüber Sofa mit Sitzkomfort, nachts ein Bett 160 x 190
          cm (extra Matraze, nicht die Sitzfläche vom Sofa!), Wohnschrankwand,
          kleiner Beistelltisch. Vor dem Wohnzimmer befindet sich ein kleiner
          Dachgarten. Dieser gehört zur Nachbar-Wohnung und kann nach Absprache
          mit dem Eigentümer mitbenutzt werden. .
        </p>
        <p>
          Die Ferienwohnung liegt in einer Seitenstraße. Parkplatz am Haus. Im
          Erdgeschoß befindet sich eine tradionelle Handwerks-Bäckerei.
        </p>
        <p>Weitere Informationen unter:</p>
        <ul>
          {links.map((l, i) => (
            <HomeTextLink key={i} {...l} />
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const HomeTextLink = ({ title, href }: { title: string; href: string }) => (
  <li>
    <a href={href} target="_blanc">
      {title}
    </a>
  </li>
);

const Carousel = ({ slides }: { slides: IImage[] }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={300}
      naturalSlideHeight={200}
      totalSlides={slides.length}
      infinite
      isPlaying
    >
      <Slider>
        {slides.map((s, i) => (
          <Carousel.Slide
            key={i}
            index={i}
            img={IMG_BASE_URL + s.src}
            text={s.alt}
          />
        ))}
      </Slider>
    </CarouselProvider>
  );
};

Carousel.Slide = ({
  index,
  text,
  img,
}: {
  index: number;
  text: string;
  img: string;
}) => {
  return (
    <Slide index={index}>
      <div
        className="w-full h-full bg-center bg-cover"
        aria-label={text}
        style={{ backgroundImage: `url(${img})`, touchAction: "pan-x" }}
      ></div>
    </Slide>
  );
};
