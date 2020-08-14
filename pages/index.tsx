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
                man in der Pfalz oder im Elsaß und den Vogesen.{" "}
                <a href="https://www.keltern.de" target="_blanc">
                  www.keltern.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-50 overflow-hidden">
        <h2>Ausstattung</h2>
      </div>
    </div>
  );
}
