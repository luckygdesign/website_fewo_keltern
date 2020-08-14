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
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              alt="Woman on her phone"
            />
          </div>
        </main>
      </div>
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10 mb-12 lg:mb-0">
              <div className="mb-10 prose text-gray-500 mx-auto lg:max-w-none">
                <p>
                  Unsere Ferienwohnung ist 60 m² groß und besteht aus einer
                  Küche mit Essbereich, Bad, sowie einem Wohn/Schlafbereich mit
                  einer Schlaf-Couch: tagsüber Sofa mit Sitzkomfort, nachts ein
                  Bett 160 x 190 cm (extra Matraze, nicht die Sitzfläche vom
                  Sofa!), Wohnschrankwand, kleiner Beistelltisch. Vor dem
                  Wohnzimmer befindet sich ein kleiner Dachgarten. Dieser gehört
                  zur Nachbar-Wohnung und kann nach Absprache mit dem Eigentümer
                  mitbenutzt werden.
                </p>
                <p>
                  Die Ferienwohnung liegt in einer Seitenstraße. Parkplatz am
                  Haus. Unter Ihr befindet sich eine Backstube. In dieser wird
                  in der Regel nur von Freitag auf Samstag gebacken. Dann sind
                  mit Maschinen- und Arbeits-Geräuschen zu rechnen.
                </p>
                <p>
                  Keltern ist ein Gemeindezusammenschluss von 5 Teilorten:
                  Dietlingen, Ellmendingen, Weiler, Niebelsbach und Dietenhausen
                  und hat ca.9000 Einwohner. In allen Orten gibt es eine
                  Wein-Kelter! Zwischen Dietlingen und Ellmendingen erstrecken
                  sich Weinberge mit den bekannten Schwarzriesling-Trauben, aber
                  auch Spätburgunder und Müller Thurgau wird angebaut. Die
                  Weinberge laden zu ausgiebigen Wanderungen ein. Ebenso die
                  Streuobstwiesen und Laub/Mischwälder. In den Scharzwald
                  gelangt man über Niebelsbach/ Straubenhardt/ Dobel, aber auch
                  die Goldstadt Pforzheim, die badische "Hauptstadt" Karlsruhe,
                  Etllingen, Rastatt sind nicht weit.Überquert man den Rhein,
                  ist man in der Pfalz oder im Elsaß und den Vogesen.
                  www.keltern.de
                </p>
              </div>
            </div>
            <div className="relative text-base max-w-prose mx-auto lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="384"
                  fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                />
              </svg>
              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <img
                    src="https://tailwindui.com/img/logos/workcation-color.svg"
                    alt="Workcation"
                    className="h-8"
                  />
                  <div className="relative text-lg text-gray-700 leading-7 font-medium mt-8">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Tincidunt integer commodo, cursus etiam aliquam neque, et.
                      Consectetur pretium in volutpat, diam. Montes, magna
                      cursus nulla feugiat dignissim id lobortis amet. Laoreet
                      sem est phasellus eu proin massa, lectus.
                    </p>
                  </div>
                </div>
                <cite className="flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                  <div className="rounded-full border-2 border-white mr-4 sm:-mt-15 sm:mr-6">
                    <img
                      className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                      src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <span className="text-indigo-300 font-semibold leading-6">
                    <strong className="text-white font-semibold">
                      Judith Black
                    </strong>
                    <br className="sm:hidden" />
                    CEO at Workcation
                  </span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
