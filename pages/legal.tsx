import Link from "next/link";

const LegalPage = () => {
  return (
    <div>
      <div className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="prose text-gray-500 mx-auto lg:max-w-none">
              <ImpressumText />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
              &copy; 2020 Johannes und Karin Becker
            </p>
            <Link href="/">
              <a className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1 hover:text-gray-300 transition ease-in-out duration-300">
                Startseite
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;

const ImpressumText = () => (
  <>
    <h1>Impressum</h1>
    <h3>Angaben gemäß § 5 TMG</h3>
    <p>
      Johannes Becker
      <br /> Weinbergstr. 10
      <br /> 75210 Keltern
    </p>
    <h3>Vertreten durch:</h3>
    <p>Johannes Becker</p>
    <h3>Kontakt:</h3>
    <p>
      Telefon: 07236/8222
      <br /> Fax: 07236/9829718
    </p>
    <h3>Umsatzsteuer-ID:</h3>
    <p>
      Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
      DE144088335
    </p>
    <h3>Aufsichtsbehörde:</h3>
    <p>
      Handwerkskammer Karlsruhe, Friedrichsplatz 4-5, 76133 Karlsruhe
      <br /> Bundesrepublik Deutschland
      <br /> Gesetz zur Ordnung des Handwerks -Handwerksordnung i.d.
      Veröffentlichung vom 10.11.2001,BGBI. I S.2997
    </p>
    <h1>Haftungsausschluss:</h1>
    <h3>Haftung für Inhalte</h3>
    <p>
      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
      Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
      keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
      für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
      verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
      nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
      überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
      Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
      Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
      unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
      der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
      von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
      entfernen.
    </p>
    <h3>Haftung für Links</h3>
    <p>
      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
      Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
      Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
      Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
      verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
      auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
      Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
      Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
      einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
      Rechtsverletzungen werden wir derartige Links umgehend entfernen.
    </p>
    <h3>Urheberrecht</h3>
    <p>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
      Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
      Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
      des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
      Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
      privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
      dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
      Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
      gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
      aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
      Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
      entfernen.
    </p>
    <h3>Datenschutz</h3>
    <p>
      Die Nutzung unserer Webseite ist in der Regel ohne Angabe
      personenbezogener Daten möglich. Soweit auf unseren Seiten
      personenbezogene Daten (beispielsweise Name, Anschrift oder
      eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
      freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung
      nicht an Dritte weitergegeben. <br /> Wir weisen darauf hin, dass die
      Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
      Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
      Zugriff durch Dritte ist nicht möglich. <br /> Der Nutzung von im Rahmen
      der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
      Übersendung von nicht ausdrücklich angeforderter Werbung und
      Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die
      Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
      Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
      Spam-Mails, vor.
    </p>
    <h3>Google Analytics</h3>
    <p>
      Diese Website benutzt Google Analytics, einen Webanalysedienst der Google
      Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'',
      Textdateien, die auf Ihrem Computer gespeichert werden und die eine
      Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den
      Cookie erzeugten Informationen über Ihre Benutzung dieser Website
      (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den
      USA übertragen und dort gespeichert. Google wird diese Informationen
      benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
      Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um
      weitere mit der Websitenutzung und der Internetnutzung verbundene
      Dienstleistungen zu erbringen. Auch wird Google diese Informationen
      gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben
      oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google
      wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in
      Verbindung bringen. Sie können die Installation der Cookies durch eine
      entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen
      Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
      sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch
      die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über
      Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise
      und zu dem zuvor benannten Zweck einverstanden.
    </p>
    <h3>Google AdSense</h3>
    <p>
      Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google
      Inc., USA (''Google''). Google Adsense verwendet sog. ''Cookies''
      (Textdateien), die auf Ihrem Computer gespeichert werden und die eine
      Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense
      verwendet auch sog. ''Web Beacons'' (kleine unsichtbare Grafiken) zur
      Sammlung von Informationen. Durch die Verwendung des Web Beacons können
      einfache Aktionen wie der Besucherverkehr auf der Webseite aufgezeichnet
      und gesammelt werden. Die durch den Cookie und/oder Web Beacon erzeugten
      Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer
      IP-Adresse) werden an einen Server von Google in den USA übertragen und
      dort gespeichert. Google wird diese Informationen benutzen, um Ihre
      Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports
      über die Websiteaktivitäten und Anzeigen für die Websitebetreiber
      zusammenzustellen und um weitere mit der Websitenutzung und der
      Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google
      diese Informationen gegebenenfalls an Dritte übertragen, sofern dies
      gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von
      Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen
      Daten der Google in Verbindung bringen. Das Speichern von Cookies auf
      Ihrer Festplatte und die Anzeige von Web Beacons können Sie verhindern,
      indem Sie in Ihren Browser-Einstellungen ''keine Cookies akzeptieren''
      wählen (Im MS Internet-Explorer unter ''Extras &gt; Internetoptionen &gt;
      Datenschutz &gt; Einstellung''; im Firefox unter ''Extras &gt;
      Einstellungen &gt; Datenschutz &gt; Cookies''); wir weisen Sie jedoch
      darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
      Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung
      dieser Website erklären Sie sich mit der Bearbeitung der über Sie
      erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und
      zu dem zuvor benannten Zweck einverstanden.
    </p>
    <p>
      Impressum vom{" "}
      <a href="http://www.impressum-generator.de/">impressum-generator.de</a>{" "}
      der{" "}
      <a href="https://www.kanzlei-hasselbach.de/rechtsanwalt-arbeitsrecht-bonn/">
        Rechtsanwältin Franziska Hasselbach, Bonn
      </a>
    </p>
    <h1>Datenschutzerklärung</h1>
    <h3>Datenschutz</h3>
    <p>
      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
      sehr ernst.
    </p>
    <p>
      Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
      der gesetzlichen Datenschutzvorschriften sowie dieser
      Datenschutzerklärung.
    </p>
    <p>
      Die Nutzung unserer Webseite ist in der Regel ohne Angabe
      personenbezogener Daten möglich. Soweit auf unseren Seiten
      personenbezogene Daten (beispielsweise Name, Anschrift oder
      E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
      freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung
      nicht an Dritte weitergegeben.
    </p>
    <p>
      Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
      Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
      lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
      möglich.
    </p>
    <h3>Cookies</h3>
    <p>
      Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
      richten auf Ihrem
      <br /> Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen
      dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
      Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und
      die Ihr Browser speichert.
    </p>
    <p>
      Die meisten der von uns verwendeten Cookies sind so genannte
      „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch
      gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie
      diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim
      nächsten Besuch wiederzuerkennen.
    </p>
    <p>
      Sie können Ihren Browser so einstellen, dass Sie über das Setzen
      <br /> von Cookies informiert werden und Cookies nur im Einzelfall
      erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
      ausschließen sowie das automatische Löschen der Cookies beim Schließen des
      Browser aktivieren. Bei der Deaktivierung von Cookies kann die
      Funktionalität dieser Website eingeschränkt sein.
    </p>
    <h3>Kontaktformular</h3>
    <p>
      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
      <br /> Angaben aus dem Anfrageformular inklusive der von Ihnen dort
      angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
      von Anschlussfragen bei uns gespeichert.
    </p>
    <p>Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
    <h3>Server-Log-Files</h3>
    <p>
      Der Provider der Seiten erhebt und speichert automatisch Informationen in
      so genannten Server-Log Files, die Ihr Browser automatisch an uns
      übermittelt. Dies sind:
    </p>
    <ul>
      <li>Browsertyp und Browserversion</li>
      <li>verwendetes Betriebssystem</li>
      <li>Referrer URL</li>
      <li>Hostname des zugreifenden Rechners</li>
      <li>Uhrzeit der Serveranfrage</li>
    </ul>
    <p>
      Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
      Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
      vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen,
      wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt
      werden.
    </p>
    <h3>Recht auf Auskunft, Löschung, Sperrung</h3>
    <p>
      Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
      gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und
      den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung
      oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
      personenbezogene Daten können Sie sich jederzeit unter der im Impressum
      angegebenen Adresse an uns wenden.
    </p>
    <h3>Widerspruch Werbe-Mails</h3>
    <p>
      Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
      Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung
      und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der
      Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der
      unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails,
      vor.
    </p>
    <p>
      Quelle: <a href="https://www.e-recht24.de/">e-recht24.de</a>
    </p>{" "}
  </>
);
