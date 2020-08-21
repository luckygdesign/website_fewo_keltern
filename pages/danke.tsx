import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ferienwohnung in Keltern - Danke für Ihre Anfrage</title>
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
                Danke!
              </h2>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Wir haben Ihre Anfrage erhalten - wir melden uns bei Ihren!
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                      Zurück zur Website
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-64 md:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/img/img18.jpg"
              alt="Blick auf die Dachterasse"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
